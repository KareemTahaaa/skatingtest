import { Users, Trophy, Calendar, MapPin, Activity, Award, Star } from "lucide-react"

interface StatItem {
  label?: string
  value?: string
  icon?: string
  description?: string
}

interface StatsSectionProps {
  title?: string
  subtitle?: string
  stats?: StatItem[]
}

const iconMap: Record<string, any> = {
  Users,
  Trophy,
  Calendar,
  MapPin,
  Activity,
  Award,
  Star
}

export default function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
  const defaultStats = [
    {
      icon: "Users",
      value: "500+",
      label: "رياضي مسجل",
      description: "من مختلف الفئات العمرية",
    },
    {
      icon: "Trophy",
      value: "25+",
      label: "بطولة سنوياً",
      description: "على المستوى المحلي والدولي",
    },
    {
      icon: "Calendar",
      value: "15",
      label: "عاماً من الخبرة",
      description: "في تطوير رياضة التزلج",
    },
    {
      icon: "MapPin",
      value: "12",
      label: "محافظة",
      description: "تضم أندية تابعة للاتحاد",
    },
  ]

  const displayStats = stats && stats.length > 0 ? stats : defaultStats

  return (
    <section className="py-12 md:py-16 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title || "إنجازاتنا بالأرقام"}</h2>
          <p className="text-xl text-red-100">{subtitle || "نفخر بما حققناه خلال مسيرتنا في تطوير رياضة التزلج"}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {displayStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon || "Activity"] || Activity
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg md:text-xl font-semibold text-red-100 mb-1">{stat.label}</div>
                <div className="text-sm text-red-200">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
