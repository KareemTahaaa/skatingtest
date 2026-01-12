import RegulationsHero from "@/components/regulations-hero"
import RegulationsTableOfContents from "@/components/regulations-table-of-contents"
import GeneralRegulations from "@/components/general-regulations"
import DisciplineRegulations from "@/components/discipline-regulations"
import AntiDopingRegulations from "@/components/anti-doping-regulations"
import UpcomingAmendments from "@/components/upcoming-amendments"
import RegulationsDownload from "@/components/regulations-download"
import RegulationsContact from "@/components/regulations-contact"
import { getRegulations, getRegulationsPageMeta } from "@/lib/sanity.queries"

export async function generateMetadata() {
  const pageMeta = await getRegulationsPageMeta()

  return {
    title: pageMeta?.metaTitle || "اللوائح والقوانين - الاتحاد المصري للتزلج",
    description:
      pageMeta?.metaDescription || "جميع القوانين واللوائح الخاصة بالرياضيين والحكام والأندية في الاتحاد المصري للتزلج",
  }
}

export default async function RegulationsPage() {
  const regulations = await getRegulations()

  return (
    <main className="min-h-screen bg-gray-50">
      <RegulationsHero data={regulations?.hero} />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
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
            <span className="text-red-600">اللوائح والقوانين</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <RegulationsTableOfContents sections={regulations?.tableOfContents} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <GeneralRegulations data={regulations?.generalRegulations} />
            <DisciplineRegulations data={regulations?.disciplineRegulations} />
            <AntiDopingRegulations data={regulations?.antiDopingRegulations} />
            <UpcomingAmendments data={regulations?.upcomingAmendments} />
            <RegulationsDownload documents={regulations?.documents} />
            <RegulationsContact contacts={regulations?.contacts} />
          </div>
        </div>
      </div>
    </main>
  )
}
