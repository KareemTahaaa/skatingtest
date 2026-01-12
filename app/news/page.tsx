import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsHero from "@/components/news-hero"
import NewsGrid from "@/components/news-grid"
import { getAllNews, getAllSportDisciplines, getNewsPageMeta, getSiteSettings } from "@/lib/sanity.queries"
import { Suspense } from "react"

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageMeta, siteSettings] = await Promise.all([getNewsPageMeta(), getSiteSettings()])

    return {
      title: pageMeta?.metaTitle || `الأخبار - ${siteSettings?.siteName || "الاتحاد المصري للتزلج"}`,
      description: pageMeta?.metaDescription || "تابع آخر أخبار الاتحاد المصري للتزلج والفعاليات والبطولات",
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error)
    return {
      title: "الأخبار - الاتحاد المصري للتزلج",
      description: "تابع آخر أخبار الاتحاد المصري للتزلج والفعاليات والبطولات",
    }
  }
}

export default async function NewsPage({ searchParams }: { searchParams?: { discipline?: string } }) {
  let news = []
  let sportDisciplines = []
  let newsPageData = null

  try {
    const [newsData, disciplinesData, pageData] = await Promise.all([
      getAllNews(),
      getAllSportDisciplines(),
      getNewsPageMeta()
    ])
    news = newsData
    sportDisciplines = disciplinesData
    newsPageData = pageData
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  const disciplineFilter = searchParams?.discipline
  let filteredNews = news

  if (disciplineFilter && disciplineFilter !== "all") {
    filteredNews = news.filter((item: any) => item.sportDisciplines?.some((d: any) => d.slug?.current === disciplineFilter))
  }

  // Use Sanity hero title/description by default, override if discipline filter is active
  let currentDisciplineName = newsPageData?.heroTitle || "الأخبار"
  let currentHeroDescription = newsPageData?.heroDescription
  const currentBackgroundImage = newsPageData?.backgroundImage?.asset?.url

  if (disciplineFilter && disciplineFilter !== "all") {
    const discipline = sportDisciplines.find((d: any) => d.slug?.current === disciplineFilter)
    if (discipline) {
      currentDisciplineName = `أخبار ${discipline.title}`
      currentHeroDescription = undefined // Clear generic description when showing specific discipline
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <NewsHero
        title={currentDisciplineName}
        description={currentHeroDescription}
        backgroundImage={currentBackgroundImage}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 space-x-reverse">
            <a href="/" className="text-gray-500 hover:text-red-600">
              الرئيسية
            </a>
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-180"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span className="text-red-600">{currentDisciplineName}</span>
          </div>
        </div>

        <Suspense fallback={<div>جاري التحميل...</div>}>
          <NewsGrid news={filteredNews} />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
