import Image from "next/image"
import { Mail, Phone } from "lucide-react"

interface Member {
  name?: string
  position?: string
  bio?: string
  image?: any // Sanity Image object
  email?: string
  phone?: string
}

interface LeadershipData {
  title?: string
  subtitle?: string
  members?: Member[]
}

interface LeadershipSectionProps {
  data?: LeadershipData
}

export default function LeadershipSection({ data }: LeadershipSectionProps) {

  const displayLeaders = data?.members && data.members.length > 0 ? data.members : [];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{data?.title || "قيادة الاتحاد"}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data?.subtitle || "فريق من الخبراء والمتخصصين يقود الاتحاد نحو تحقيق أهدافه وطموحاته"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayLeaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={leader.image?.asset?.url || "/placeholder.svg"}
                  alt={leader.name || "عضو فريق"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                <div className="space-y-2">
                  {leader.email && (
                    <div className="flex items-center text-gray-500 text-sm">
                      <Mail className="h-4 w-4 ml-2" />
                      <span>{leader.email}</span>
                    </div>
                  )}
                  {leader.phone && (
                    <div className="flex items-center text-gray-500 text-sm">
                      <Phone className="h-4 w-4 ml-2" />
                      <span>{leader.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
