import { getAllSportDisciplines } from "@/lib/sanity.queries"
import DisciplineCard, { type DisciplineCardProps } from "@/components/ui/discipline-card"

export const revalidate = 60

export default async function DisciplinesPage() {
  const disciplines: DisciplineCardProps['discipline'][] = await getAllSportDisciplines()

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">التخصصات الرياضية</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            تعرف على جميع التخصصات الرياضية التي يدعمها الاتحاد المصري لرياضات الانزلاق
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {disciplines && disciplines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {disciplines.map((discipline) => (
                <DisciplineCard key={discipline._id} discipline={discipline} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">لا توجد تخصصات رياضية متاحة حالياً</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
