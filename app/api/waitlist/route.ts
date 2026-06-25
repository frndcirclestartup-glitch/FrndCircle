import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, activityTitle } = body

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL

    if (!webhookUrl) {
      console.log("----------------------------------------")
      console.log("💡 [FRNDCIRCLE WAITLIST - DEMO MODE]")
      console.log(`captured email: ${email}`)
      console.log(`activity context: ${activityTitle || "General Waitlist"}`)
      console.log("To save to Google Sheets, set GOOGLE_SHEET_WEBHOOK_URL in .env.local")
      console.log("----------------------------------------")

      return NextResponse.json({
        success: true,
        message: "Email captured successfully (Demo Mode: set GOOGLE_SHEET_WEBHOOK_URL to save to Sheets).",
      })
    }

    // Call Google Apps Script Web App
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        activityTitle: activityTitle || "General Waitlist",
      }),
    })

    if (!response.ok) {
      const errorResponse = await response.text()
      console.error("Google Sheet webhook error response:", errorResponse)
      return NextResponse.json(
        { success: false, error: "Failed to submit. Please try again later." },
        { status: 500 }
      )
    }

    const data = await response.json()
    if (data && data.success === false) {
      console.error("Google Sheet Apps Script returned failure:", data.error)
      return NextResponse.json(
        { success: false, error: data.error || "Failed to save to Google Sheets." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Waitlist API handler error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    )
  }
}
