import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

interface DisciplineEventsProps {
  events: any[]
  disciplineName: string
}

export default function DisciplineEvents({ events, disciplineName }: DisciplineEventsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>فعاليات {disciplineName}</CardTitle>
      </CardHeader>
      <CardContent>
        {events.length === 0 ? (
          <p className="text-gray-500 text-center py-8">لا توجد فعاليات متاحة حالياً</p>
        ) : (
          <div className="space-y-4">
            {events.map((event) => {
              const imageUrl = event.mainImage?.asset?.url || "/placeholder.svg?height=200&width=300"
              const eventExcerpt = typeof event.excerpt === "string" ? event.excerpt : ""

              return (
                <Link
                  key={event._id}
                  href={`/events/${event.slug.current}`}
                  className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded"
                      unoptimized={imageUrl.includes("placeholder")}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 line-clamp-2">{event.title}</h3>
                    {eventExcerpt && <p className="text-sm text-gray-600 line-clamp-2">{eventExcerpt}</p>}
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(event.startDate).toLocaleDateString("ar-EG")}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
