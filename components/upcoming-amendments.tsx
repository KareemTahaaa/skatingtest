import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, AlertCircle } from "lucide-react"

interface Amendment {
  title: string
  description: string
  expectedDate: string
  status: string
  priority: string
  icon: string
}

interface TimelineQuarter {
  label: string
  title: string
}

interface UpcomingAmendmentsProps {
  data?: {
    amendments: Amendment[]
    timelineSummary?: {
      quarters: TimelineQuarter[]
    }
    notificationText?: string
  }
}

// Removed mock data

const statusColors: { [key: string]: string } = {
  "قيد المراجعة": "bg-blue-100 text-blue-800",
  "في الصياغة": "bg-yellow-100 text-yellow-800",
  مقترح: "bg-purple-100 text-purple-800",
  "تحت الدراسة": "bg-gray-100 text-gray-800",
}

const priorityColors: { [key: string]: string } = {
  عالية: "bg-red-100 text-red-800",
  متوسطة: "bg-orange-100 text-orange-800",
  منخفضة: "bg-green-100 text-green-800",
}

export default function UpcomingAmendments({ data }: UpcomingAmendmentsProps) {
  if (!data || !data.amendments || data.amendments.length === 0) {
    return null
  }

  const amendments = data.amendments
  // Use timeline if available, otherwise just use empty list (or hide logic for timeline if critical, but user seems focused on removing default junk)
  const timeline = data.timelineSummary?.quarters || []
  const notificationText =
    data?.notificationText ||
    "سيتم إخطار جميع الأعضاء والأندية المسجلة عند اعتماد أي تعديلات جديدة عبر البريد الإلكتروني والموقع الرسمي."

  return (
    <section id="upcoming-amendments" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">التعديلات والتحديثات القادمة</h2>
        <p className="text-lg text-gray-600">التعديلات المقترحة والمتوقعة على اللوائح خلال الفترة القادمة</p>
      </div>

      {/* Timeline Summary */}
      <Card className="mb-8 bg-gradient-to-r from-red-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-6 w-6 text-red-600 ml-2" />
            الجدول الزمني للتعديلات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {timeline.map((quarter, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-red-600 mb-2">{quarter.label}</div>
                  <div className="text-sm text-gray-600">{quarter.title}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Amendments List */}
      <div className="space-y-6">
        {amendments.map((amendment, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-start justify-between">
                <div className="flex items-start">
                  <span className="text-3xl ml-3">{amendment.icon}</span>
                  <div>
                    <div className="text-xl mb-2">{amendment.title}</div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className={statusColors[amendment.status] || "bg-gray-100 text-gray-800"}>
                        {amendment.status}
                      </Badge>
                      <Badge className={priorityColors[amendment.priority] || "bg-gray-100 text-gray-800"}>
                        أولوية: {amendment.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 leading-relaxed">{amendment.description}</p>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 ml-2" />
                <span className="text-sm">
                  التاريخ المتوقع: {new Date(amendment.expectedDate).toLocaleDateString("ar-EG")}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Notification Card */}
      <Card className="mt-8 bg-orange-50 border-orange-200">
        <CardContent className="p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-orange-600 ml-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-800 mb-2">إشعار هام</h3>
              <p className="text-orange-700 leading-relaxed">{notificationText}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
