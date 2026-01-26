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

export default function HistorySection({ title, content, milestones }: HistorySectionProps) {
  const defaultMilestones = [
    {
      year: "2010",
      title: "تأسيس الاتحاد",
      description: "تم تأسيس الاتحاد المصري للتزلج كأول اتحاد متخصص في رياضة التزلج في مصر",
    },
    {
      year: "2015",
      title: "أول بطولة دولية",
      description: "استضافة أول بطولة دولية للتزلج في مصر بمشاركة 8 دول عربية وأفريقية",
    },
    {
      year: "2018",
      title: "الانضمام للاتحاد الدولي",
      description: "انضمام الاتحاد المصري للتزلج رسمياً للاتحاد الدولي للتزلج",
    },
    {
      year: "2020",
      title: "إطلاق أكاديمية التزلج",
      description: "افتتاح أكاديمية التزلج المصرية لتدريب الناشئين والمواهب الشابة",
    },
    {
      year: "2023",
      title: "أول ميدالية دولية",
      description: "حصول المنتخب المصري على أول ميدالية ذهبية في البطولة العربية للتزلج",
    },
    {
      year: "2025",
      title: "التوسع والتطوير",
      description: "إطلاق خطة التوسع لتشمل جميع محافظات مصر وافتتاح مراكز تدريب جديدة",
    },
  ]

  const displayMilestones = milestones && milestones.length > 0 ? milestones : defaultMilestones

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title || "تاريخنا ومسيرتنا"}</h2>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto prose">
            {/* If content is complex block content we might need PortableText, but if simple text: */}
            <p>{(typeof content === 'string' ? content : "رحلة طويلة من العمل والإنجازات في سبيل تطوير رياضة التزلج في مصر")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600&text=تاريخ+الاتحاد+المصري+للتزلج"
              alt="تاريخ الاتحاد المصري للتزلج"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />

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
