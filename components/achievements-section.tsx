import Image from "next/image"
import { Award, Medal, Star, Globe } from "lucide-react"

interface AchievementItem {
  title?: string
  description?: string
  year?: string
  type?: string
  image?: any
  icon?: string // We might use this if we add icon selection to schema
}

interface AchievementsData {
  title?: string
  items?: AchievementItem[]
}

interface AchievementsSectionProps {
  data?: AchievementsData
}

// Helper to pick icon based on simple heuristic or random if not provided
// Since schema doesn't have icon picker for achievements yet, we'll cycle or default

export default function AchievementsSection({ data }: AchievementsSectionProps) {
  const defaultAchievements = [
    {
      icon: Award,
      title: "بطولة العالم للناشئين 2024",
      description: "المركز الثالث في بطولة العالم للناشئين تحت 18 سنة",
      year: "2024",
      type: "دولي",
    },
    {
      icon: Medal,
      title: "البطولة العربية 2023",
      description: "المركز الأول في البطولة العربية للتزلج الفني",
      year: "2023",
      type: "إقليمي",
    },
    {
      icon: Star,
      title: "أفضل اتحاد عربي",
      description: "جائزة أفضل اتحاد عربي لتطوير رياضة التزلج",
      year: "2023",
      type: "تقدير",
    },
    {
      icon: Globe,
      title: "البطولة الأفريقية 2022",
      description: "المركز الثاني في البطولة الأفريقية للتزلج السريع",
      year: "2022",
      type: "قاري",
    },
  ]

  const displayItems = data?.items && data.items.length > 0 ? data.items : defaultAchievements

  // Icon cycling for dynamic items since we didn't add icon field to schema yet
  const icons = [Award, Medal, Star, Globe]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{data?.title || "إنجازاتنا وجوائزنا"}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نفخر بالإنجازات التي حققها رياضيونا على المستوى المحلي والإقليمي والدولي
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayItems.map((achievement: any, index: number) => {
              const Icon = icons[index % icons.length]
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {achievement.type || "عام"}
                      </span>
                      <div className="text-gray-500 text-sm mt-1">{achievement.year}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600&text=إنجازات+الاتحاد+المصري+للتزلج"
              alt="إنجازات الاتحاد المصري للتزلج"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-red-600">{displayItems.length}+</div>
              <div className="text-sm text-gray-600">جائزة وإنجاز</div>
            </div>
          </div>
        </div>

        {/* Gallery of achievements - Optional to make dynamic later, keeping existing logic for now or hiding if no images */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=200&width=300&text=إنجاز+${item}`}
                alt={`إنجاز ${item}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
