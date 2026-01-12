import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSectionContainer from "@/components/hero-section-container"
import CategoriesSectionContainer from "@/components/categories-section-container"
import QuoteSectionContainer from "@/components/quote-section-container"
import UpcomingEvents from "@/components/upcoming-events"
import NewsGrid from "@/components/news-grid"
import ContactSection from "@/components/contact-section"
import { getAllNews, getAllEvents } from "@/lib/sanity.queries"
import { getHomePageMeta, getSiteSettings } from "@/lib/sanity.queries"

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageMeta, siteSettings] = await Promise.all([getHomePageMeta(), getSiteSettings()])

    return {
      title: pageMeta?.metaTitle || siteSettings?.siteName || "الاتحاد المصري للتزلج",
      description: pageMeta?.metaDescription || siteSettings?.siteDescription || "الموقع الرسمي للاتحاد المصري للتزلج",
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error)
    return {
      title: "الاتحاد المصري للتزلج",
      description: "الموقع الرسمي للاتحاد المصري للتزلج",
    }
  }
}

export default async function Home() {
  let news = []
  let events = []

  try {
    const [newsData, eventsData] = await Promise.all([getAllNews(), getAllEvents()])
    news = newsData
    events = eventsData
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  const latestNews = news.slice(0, 6)
  const upcomingEvents = events.slice(0, 4)

  return (
    <main className="min-h-screen bg-gray-100">
      <HeroSectionContainer />
      <CategoriesSectionContainer />
      <QuoteSectionContainer />

      {/* News Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">آخر الأخبار</h2>
            <a href="/news" className="text-red-600 hover:text-red-700 font-semibold">
              عرض جميع الأخبار ←
            </a>
          </div>
          <NewsGrid news={latestNews} />
        </div>
      </section>

      {/* Red Divider Section */}
      <section className="h-16 bg-gradient-to-r from-red-600 to-red-700"></section>

      {/* Events Section - Now positioned after News */}
      <UpcomingEvents events={upcomingEvents} />

      <ContactSection />
    </main>
  )
}
