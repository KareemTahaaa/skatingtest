import { notFound } from "next/navigation"
import Image from "next/image"
import { getSportDisciplineBySlug, getNewsByDiscipline, getEventsByDiscipline } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import DisciplineNews from "@/components/discipline-news"
import DisciplineEvents from "@/components/discipline-events"

export default async function DisciplinePage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const discipline = await getSportDisciplineBySlug(slug)

  if (!discipline) {
    notFound()
  }

  const [news, events] = await Promise.all([getNewsByDiscipline(discipline._id), getEventsByDiscipline(discipline._id)])

  const imageUrl = discipline.image ? urlForImage(discipline.image).url() : "/placeholder.svg?height=400&width=1200"


  return (
    <main className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={discipline.name}
          fill
          className="object-cover"
          unoptimized={imageUrl.includes("placeholder")}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center items-center text-white text-center">
          {discipline.icon && (
            <div className="mb-4 relative w-24 h-24">
              <Image
                src={urlForImage(discipline.icon).url()}
                alt={discipline.name}
                fill
                className="object-contain"
              />
            </div>
          )}
          <h1 className="text-5xl font-bold mb-4">{discipline.name}</h1>
          {discipline.description && typeof discipline.description === "string" && (
            <p className="text-xl max-w-2xl">{discipline.description}</p>
          )}
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DisciplineNews news={news} disciplineName={discipline.name} />
          <DisciplineEvents events={events} disciplineName={discipline.name} />
        </div>
      </div>

    </main>
  )
}
