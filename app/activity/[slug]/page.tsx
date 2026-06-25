import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getActivityBySlug, getAllActivitySlugs, activities } from "@/lib/activities-data"
import { ActivityDetailClient } from "@/components/activity-detail-client"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllActivitySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const activity = getActivityBySlug(slug)
  if (!activity) return {}

  return {
    title: `${activity.title} – Activities`,
    description: activity.description.slice(0, 160),
    openGraph: {
      title: `${activity.title} | FrndCircle`,
      description: activity.tagline,
      images: [{ url: activity.image, width: 1200, height: 630 }],
    },
  }
}

export default async function ActivityDetailPage({ params }: PageProps) {
  const { slug } = await params
  const activity = getActivityBySlug(slug)

  if (!activity) {
    notFound()
  }

  const relatedActivities = activities.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ActivityDetailClient activity={activity} relatedActivities={relatedActivities} />
      <Footer />
    </main>
  )
}
