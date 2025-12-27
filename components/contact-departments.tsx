import { Users, Trophy, GraduationCap, Camera, Settings, MessageSquare, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactDepartments() {
  const departments = [
    {
      icon: Users,
      name: "التسجيل والعضوية",
      description: "للاستفسار عن التسجيل في الاتحاد والحصول على العضوية",
      email: "registration@ensf.com",
      phone: "+20 100 123 4567",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Trophy,
      name: "الفعاليات والبطولات",
      description: "معلومات عن البطولات القادمة والتسجيل في المسابقات",
      email: "events@ensf.com",
      phone: "+20 100 123 4568",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: GraduationCap,
      name: "التدريب والأكاديميات",
      description: "برامج التدريب والدورات التعليمية للمدربين والرياضيين",
      email: "training@ensf.com",
      phone: "+20 100 123 4569",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Camera,
      name: "الإعلام والعلاقات العامة",
      description: "للصحفيين والإعلاميين والاستفسارات الإعلامية",
      email: "media@ensf.com",
      phone: "+20 100 123 4570",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Settings,
      name: "الشؤون الفنية",
      description: "الاستفسارات الفنية والقوانين واللوائح",
      email: "technical@ensf.com",
      phone: "+20 100 123 4571",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: MessageSquare,
      name: "الشكاوى والاقتراحات",
      description: "لتقديم الشكاوى والاقتراحات لتطوير الخدمات",
      email: "complaints@ensf.com",
      phone: "+20 100 123 4572",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ]

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">الأقسام المختصة</h2>
        <p className="text-lg text-gray-600">تواصل مع القسم المناسب للحصول على أفضل خدمة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className={`${dept.bgColor} rounded-full w-12 h-12 flex items-center justify-center mr-3`}>
                  <dept.icon className={`h-6 w-6 ${dept.color}`} />
                </div>
                <h3 className="font-bold text-gray-800">{dept.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{dept.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 ml-1" />
                  <span>{dept.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 ml-1" />
                  <span>{dept.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
