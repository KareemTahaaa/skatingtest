import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, FileQuestion, Scale } from "lucide-react"

interface Contact {
  icon: string
  title: string
  description: string
  email: string
  phone: string
  color: string
  bgColor: string
}

interface RegulationsContactProps {
  contacts?: Contact[]
}

// Removed mock data

export default function RegulationsContact({ contacts }: RegulationsContactProps) {
  if (!contacts || contacts.length === 0) {
    return null
  }
  const contactList = contacts

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">للتواصل والاستفسارات</h2>
        <p className="text-lg text-gray-600">فريقنا مستعد للإجابة على جميع استفساراتكم حول اللوائح والقوانين</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactList.map((contact, index) => {
          const Icon = iconMap[contact.icon] || FileQuestion
          return (
            <Card key={index} className={`${contact.bgColor} border-2`}>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className={`${contact.bgColor} rounded-full w-12 h-12 flex items-center justify-center ml-3`}>
                    <Icon className={`h-6 w-6 ${contact.color}`} />
                  </div>
                  <span className={contact.color}>{contact.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{contact.description}</p>
                <div className="space-y-3">
                  <a href={`mailto:${contact.email}`} className={`flex items-center ${contact.color} hover:underline`}>
                    <Mail className="h-4 w-4 ml-2" />
                    {contact.email}
                  </a>
                  <a href={`tel:${contact.phone}`} className={`flex items-center ${contact.color} hover:underline`}>
                    <Phone className="h-4 w-4 ml-2" />
                    {contact.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
