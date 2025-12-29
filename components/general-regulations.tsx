import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Award, Scale } from "lucide-react"

interface Regulation {
  icon: string
  title: string
  items: string[]
}

interface GeneralRegulationsProps {
  data?: {
    title: string
    description: string
    regulations: Regulation[]
  }
}

// Removed defaultRegulations (mock data) to hide section when empty

const iconMap: { [key: string]: any } = {
  Users,
  Shield,
  Award,
  Scale,
}

export default function GeneralRegulations({ data }: GeneralRegulationsProps) {
  // If no data is provided or regulations list is empty, don't render anything
  if (!data || !data.regulations || data.regulations.length === 0) {
    return null
  }

  const regulations = data.regulations

  return (
    <section id="general-regulations" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{data?.title || "اللوائح العامة"}</h2>
        <p className="text-lg text-gray-600">
          {data?.description || "القوانين الأساسية التي تحكم جميع أنشطة الاتحاد المصري للتزلج"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regulations.map((regulation, index) => {
          const Icon = iconMap[regulation.icon] || Users

          return (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  {regulation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {regulation.items && regulation.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="bg-red-100 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-blue-800 mb-3 flex items-center">
            <span className="text-2xl ml-2">ℹ️</span>
            ملاحظة مهمة
          </h3>
          <p className="text-blue-700 leading-relaxed">
            جميع اللوائح المذكورة أعلاه تخضع للتحديث المستمر وفقاً لقرارات الاتحاد الدولي للتزلج. يُنصح بمراجعة النسخة
            الأحدث من اللوائح قبل المشاركة في أي فعالية رسمية.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
