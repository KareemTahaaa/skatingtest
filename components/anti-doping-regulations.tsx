import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, FileCheck, Scale } from "lucide-react"

interface AntiDopingSection {
  icon: "Shield" | "AlertTriangle" | "FileCheck" | "Scale"
  title: string
  content: string[]
  color: string
  bgColor: string
}

interface ImportantNotice {
  title: string
  content: string
  contactPhone: string
  contactEmail: string
}

interface AntiDopingRegulationsProps {
  data?: {
    sections: AntiDopingSection[]
    importantNotice: ImportantNotice
  }
}

// Removed mock data

export default function AntiDopingRegulations({ data }: AntiDopingRegulationsProps) {
  if (!data || !data.sections || data.sections.length === 0) {
    return null
  }

  const sections = data.sections
  const notice = data.importantNotice || {
    title: "تحذير مهم",
    content: "يرجى مراجعة اللوائح",
    contactPhone: "",
    contactEmail: ""
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return Shield
      case "AlertTriangle":
        return AlertTriangle
      case "FileCheck":
        return FileCheck
      case "Scale":
        return Scale
      default:
        return Shield
    }
  }

  return (
    <section id="anti-doping" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">لوائح مكافحة المنشطات</h2>
        <p className="text-lg text-gray-600">قوانين صارمة لضمان النزاهة والعدالة في المنافسات الرياضية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {sections.map((section, index) => {
          const IconComponent = getIconComponent(section.icon)
          return (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className={`${section.bgColor} rounded-full w-12 h-12 flex items-center justify-center mr-3`}>
                    <IconComponent className={`h-6 w-6 ${section.color}`} />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className={`${section.bgColor} rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Important Notice */}
      <Card className="bg-yellow-50 border-yellow-200 border-2">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-yellow-800 mb-3">{notice.title}</h3>
              <p className="text-yellow-700 leading-relaxed mb-4">{notice.content}</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  خط المساعدة: {notice.contactPhone}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {notice.contactEmail}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
