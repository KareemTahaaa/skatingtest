import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function LeadershipSection() {
  const leaders = [
    {
      name: "د. أحمد محمد علي",
      position: "رئيس الاتحاد",
      image: "/placeholder.svg?height=300&width=300&text=رئيس+الاتحاد",
      bio: "خبرة تزيد عن 20 عاماً في إدارة الاتحادات الرياضية وتطوير الرياضات الفردية",
      email: "president@ensf.com",
      phone: "+20 100 123 4567",
    },
    {
      name: "أ. سارة إبراهيم",
      position: "نائب رئيس الاتحاد",
      image: "/placeholder.svg?height=300&width=300&text=نائب+الرئيس",
      bio: "متخصصة في تطوير برامج التدريب والأكاديميات الرياضية للناشئين",
      email: "vp@ensf.com",
      phone: "+20 100 123 4568",
    },
    {
      name: "كابتن محمد حسن",
      position: "المدير الفني",
      image: "/placeholder.svg?height=300&width=300&text=المدير+الفني",
      bio: "بطل سابق في التزلج ومدرب معتمد دولياً مع خبرة 15 عاماً في التدريب",
      email: "technical@ensf.com",
      phone: "+20 100 123 4569",
    },
    {
      name: "أ. فاطمة أحمد",
      position: "أمين الصندوق",
      image: "/placeholder.svg?height=300&width=300&text=أمين+الصندوق",
      bio: "خبيرة في الإدارة المالية والتخطيط الاستراتيجي للمؤسسات الرياضية",
      email: "treasurer@ensf.com",
      phone: "+20 100 123 4570",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">قيادة الاتحاد</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            فريق من الخبراء والمتخصصين يقود الاتحاد نحو تحقيق أهدافه وطموحاته
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Mail className="h-4 w-4 ml-2" />
                    <span>{leader.email}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Phone className="h-4 w-4 ml-2" />
                    <span>{leader.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
