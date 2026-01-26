import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import MissionSection from "@/components/mission-section"
import HistorySection from "@/components/history-section"
import LeadershipSection from "@/components/leadership-section"
import AchievementsSection from "@/components/achievements-section"
import StatsSection from "@/components/stats-section"
import ContactSection from "@/components/contact-section"
import { getAboutPageData, getSiteSettings } from "@/lib/sanity.queries"

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageData, siteSettings] = await Promise.all([getAboutPageData(), getSiteSettings()])

    return {
      title: pageData?.metaTitle || `من نحن - ${siteSettings?.siteName || "الاتحاد المصري للتزلج"}`,
      description:
        pageData?.metaDescription ||
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

export default async function AboutPage() {
  const aboutData = await getAboutPageData()

  return (
    <main className="min-h-screen bg-gray-100">
      <AboutHero
        title={aboutData?.heroTitle}
        description={aboutData?.heroDescription}
        image={aboutData?.backgroundImage?.asset?.url}
      />
      <MissionSection
        title={aboutData?.missionSectionTitle}
        subtitle={aboutData?.missionSectionSubtitle}
        mission={{ title: aboutData?.missionTitle, content: aboutData?.missionContent }}
        vision={{ title: aboutData?.visionTitle, content: aboutData?.visionContent }}
        values={{ title: aboutData?.valuesTitle, content: aboutData?.valuesContent }}
      />
      <StatsSection
        title={aboutData?.statsTitle}
        subtitle={aboutData?.statsSubtitle}
        stats={aboutData?.stats}
      />
      <HistorySection
        title={aboutData?.historyTitle}
        subtitle={aboutData?.historySubtitle}
        content={aboutData?.historyContent}
        image={aboutData?.historyImage?.asset?.url}
        milestones={aboutData?.milestones}
      />
      <LeadershipSection data={aboutData?.leadership} />
      <AchievementsSection data={aboutData?.achievements} />
      <ContactSection />
    </main>
  )
}
