import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

export default function ContactMap() {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">موقعنا</h2>
        <p className="text-lg text-gray-600">زورونا في مقر الاتحاد المصري للتزلج</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">خريطة الموقع</h3>
                    <p className="text-gray-600">256A شارع الهرم، الجيزة، القاهرة</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center text-red-600">
                    <Navigation className="h-5 w-5 ml-1" />
                    <span className="font-semibold">الاتحاد المصري للتزلج</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                <MapPin className="h-5 w-5 ml-2 text-red-600" />
                العنوان التفصيلي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>الاتحاد المصري للتزلج</strong>
                </p>
                <p className="text-gray-600">256A شارع الهرم</p>
                <p className="text-gray-600">الجيزة، القاهرة</p>
                <p className="text-gray-600">مصر 12345</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>معلم مرجعي:</strong> بجوار مجمع الأهرام التجاري
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
