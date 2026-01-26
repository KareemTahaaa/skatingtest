import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactInfoProps {
  data?: any
}

export default function ContactInfo({ data }: ContactInfoProps) {
  const contactMethods = [
    {
      icon: MapPin,
      title: "العنوان",
      details: data?.address ? [
        data.address.street,
        `${data.address.city || ''} ${data.address.country || ''} ${data.address.postalCode || ''}`
      ].filter(Boolean) : ["256A شارع الهرم، الجيزة", "القاهرة، مصر 12345"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: data?.phone?.map((p: any) => p.number) || ["+20 2 1234 5678", "+20 100 123 4567"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: data?.email?.map((e: any) => e.address) || ["info@ensf.com", "contact@ensf.com"],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      details: data?.whatsapp?.map((w: any) => w.number) || ["+20 100 123 4567", "متاح 24/7"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },


  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">معلومات الاتصال</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-3 space-x-reverse">
              <div
                className={`${method.bgColor} rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0`}
              >
                <method.icon className={`h-5 w-5 ${method.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{method.title}</h3>
                {method.details.map((detail: string, detailIndex: number) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>


    </div>
  )
}
