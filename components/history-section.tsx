import Image from "next/image"

interface Milestone {
  year?: string
  title?: string
  description?: string
}

interface HistorySectionProps {
  title?: string
  subtitle?: string
  content?: string
  image?: string
  milestones?: Milestone[]
}

export default function HistorySection({ title, subtitle, content, image, milestones }: HistorySectionProps) {


  const displayMilestones = milestones && milestones.length > 0 ? milestones : []

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title || "تاريخنا ومسيرتنا"}</h2>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto prose">
            {/* If content is complex block content we might need PortableText, but if simple text: */}
            <p>{subtitle || "رحلة طويلة من العمل والإنجازات في سبيل تطوير رياضة التزلج في مصر"}</p>
            {content && typeof content === 'string' && <p className="mt-4">{content}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {image && (
              <Image
                src={image}
                alt="تاريخ الاتحاد المصري للتزلج"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
            {image && (
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">سنة من التميز</div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {displayMilestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
