import type { Metadata } from "next"
import EventsHero from "@/components/events-hero"
import EventsContent from "@/components/events-content"
import { getAllEvents, getAllSportDisciplines, getEventsPageMeta, getSiteSettings } from "@/lib/sanity.queries"
import { Suspense } from "react"

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageMeta, siteSettings] = await Promise.all([getEventsPageMeta(), getSiteSettings()])

    return {
      title: pageMeta?.metaTitle || `الفعاليات - ${siteSettings?.siteName || "الاتحاد المصري للتزلج"}`,
      description: pageMeta?.metaDescription || "تعرف على الفعاليات والبطولات القادمة للاتحاد المصري للتزلج",
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error)
    return {
      title: "الفعاليات - الاتحاد المصري للتزلج",
      description: "تعرف على الفعاليات والبطولات القادمة للاتحاد المصري للتزلج",
    }
  }
}

export default async function EventsPage({ searchParams }: { searchParams?: { discipline?: string } }) {
  let events = []
  let sportDisciplines = []
  let eventsPageMeta = null

  try {
    const results = await Promise.all([
      getAllEvents(),
      getAllSportDisciplines(),
      getEventsPageMeta()
    ])
    events = results[0]
    sportDisciplines = results[1]
    eventsPageMeta = results[2]
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  const disciplineFilter = searchParams?.discipline
  let filteredEvents = events

  if (disciplineFilter && disciplineFilter !== "all") {
    filteredEvents = events.filter((item: any) =>
      item.discipline?.slug?.current === disciplineFilter
    )
  }

  let currentDisciplineName = eventsPageMeta?.heroTitle || "الفعاليات"
  if (disciplineFilter && disciplineFilter !== "all") {
    const discipline = sportDisciplines.find((d: any) => d.slug?.current === disciplineFilter)
    if (discipline) {
      currentDisciplineName = `فعاليات ${discipline.name}`
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <EventsHero
        title={currentDisciplineName}
        description={eventsPageMeta?.heroDescription}
        image={eventsPageMeta?.backgroundImage?.asset?.url}
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
          <EventsContent initialEvents={filteredEvents} sportDisciplines={sportDisciplines} />
        </Suspense>
      </div>
    </main>
  )
}
