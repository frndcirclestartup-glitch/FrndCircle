import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const _poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FrndCircle: Meet New Friends Through Real-Life Activities",
    template: "%s | FrndCircle",
  },
  description:
    "FrndCircle is the app for making real friends. Discover and host activities like coffee meetups, bike rides, board game nights, and brunches with like-minded people in your city. Download FrndCircle and never have another boring week.",
  applicationName: "FrndCircle",
  generator: "v0.app",
  keywords: [
    "FrndCircle",
    "Frndcircle",
    "Frnd Circle",
    "friend circle app",
    "make new friends app",
    "social meetups",
    "local activities",
    "community events",
    "meet people in your city",
    "social discovery app",
    "friendship app",
    "things to do near me",
  ],
  authors: [{ name: "FrndCircle", url: "https://frndcircle.app" }],
  creator: "FrndCircle",
  publisher: "FrndCircle",
  metadataBase: new URL("https://frndcircle.app"),
  alternates: {
    canonical: "/",
  },
  category: "social",
  openGraph: {
    title: "FrndCircle: Meet New Friends Through Real-Life Activities",
    description:
      "Discover and host real-world activities with like-minded people in your city. Download FrndCircle and never have another boring week.",
    url: "https://frndcircle.app",
    siteName: "FrndCircle",
    images: [
      {
        url: "/images/og-frndcircle.png",
        width: 1200,
        height: 630,
        alt: "FrndCircle: never have another boring week. Meet new friends through real-life activities.",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@frndcircle",
    creator: "@frndcircle",
    title: "FrndCircle: Meet New Friends Through Real-Life Activities",
    description:
      "Discover meaningful friendships through shared activities in your city. Download the FrndCircle app.",
    images: ["/images/og-frndcircle.png"],
  },
  appleWebApp: {
    capable: true,
    title: "FrndCircle",
    statusBarStyle: "default",
  },
  verification: {
    google: "google-site-verification-token",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#18121c" },
    { media: "(prefers-color-scheme: dark)", color: "#18121c" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FrndCircle",
              alternateName: ["Frnd Circle", "Frndcircle App"],
              url: "https://frndcircle.app",
              logo: "https://frndcircle.app/images/app-mockup-frndcircle.png",
              description:
                "FrndCircle is a social app for discovering and hosting real-world activities with like-minded people in your city.",
              sameAs: [
                "https://x.com/frndcircle_app",
                "https://www.instagram.com/frndcircle_app/",
                "https://www.linkedin.com/company/frndcircle/about/?viewAsMember=true",
              ],
              areaServed: "US",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FrndCircle",
              alternateName: "Frnd Circle",
              url: "https://frndcircle.app",
              description:
                "Discover meaningful friendships through shared real-world activities in your city. Download the FrndCircle app today.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "FrndCircle",
              operatingSystem: "iOS, ANDROID",
              applicationCategory: "SocialNetworkingApplication",
              description:
                "Discover and host activities like coffee meetups, bike rides, board game nights, and brunches with like-minded people in your city.",
              url: "https://frndcircle.app",
              image: "https://frndcircle.app/images/app-mockup-frndcircle.png",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "12000",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is FrndCircle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FrndCircle is a mobile app for making real friends. You can discover and host real-world activities like coffee meetups, bike rides, board game nights, and brunches with like-minded people in your city.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is FrndCircle free to download?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. FrndCircle is free to download on iOS and Android, and you can browse and join activities at no cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I meet new people on FrndCircle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Download the app, set up your profile, then browse activities happening in your city this week or host your own. Tap to join and meet people in real life over shared interests.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is FrndCircle safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Safety is a priority on FrndCircle. Members are verified, hosts review join requests, and every activity is built around real, in-person connection.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <div className="grain-overlay" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  )
}
