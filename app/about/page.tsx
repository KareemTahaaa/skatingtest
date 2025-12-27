import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import MissionSection from "@/components/mission-section"
import HistorySection from "@/components/history-section"
import LeadershipSection from "@/components/leadership-section"
import AchievementsSection from "@/components/achievements-section"
import StatsSection from "@/components/stats-section"
import ContactSection from "@/components/contact-section"
import { getAboutPageMeta, getSiteSettings } from "@/lib/sanity.queries"

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageMeta, siteSettings] = await Promise.all([getAboutPageMeta(), getSiteSettings()])

    return {
      title: pageMeta?.metaTitle || `من نحن - ${siteSettings?.siteName || "الاتحاد المصري للتزلج"}`,
      description:
        pageMeta?.metaDescription ||
        "تعرف على الاتحاد المصري للتزلج، رسالتنا، رؤيتنا، وإنجازاتنا في تطوير رياضة التزلج في مصر",
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error)
    return {
      title: "من نحن - الاتحاد المصري للتزلج",
      description: "تعرف على الاتحاد المصري للتزلج، رسالتنا، رؤيتنا، وإنجازاتنا في تطوير رياضة التزلج في مصر",
    }
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <AboutHero />
      <MissionSection />
      <StatsSection />
      <HistorySection />
      <LeadershipSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
