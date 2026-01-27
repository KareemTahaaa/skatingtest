import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  contactInfo?: any
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  const email = contactInfo?.email?.[0]?.address || "info@ensf.com"
  const phone = contactInfo?.phone?.[0]?.number || "+20 100 123 4567"
  const address = contactInfo?.address?.city
    ? `${contactInfo.address.city}, ${contactInfo.address.country || "مصر"}`
    : "القاهرة، مصر"

  return (
    <section className="py-16 bg-gradient-to-l from-red-600 to-red-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تواصل معنا</h2>
          <p className="text-xl text-red-100 mb-8">نحن هنا للإجابة على استفساراتكم ومساعدتكم</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
              <a href={`mailto:${email}`} className="text-red-100 hover:text-white">
                {email}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">الهاتف</h3>
              <a href={`tel:${phone}`} className="text-red-100 hover:text-white" dir="ltr">
                {phone}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">العنوان</h3>
              <p className="text-red-100">{address}</p>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
              انتقل إلى صفحة الاتصال ←
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
