import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { urlForImage } from "@/lib/sanity.client"
import { formatDate } from "@/lib/utils"

interface EventsListProps {
  events: any[] | null | undefined
}

export default function EventsList({ events }: EventsListProps) {
  // Ensure events is always an array
  const eventsData = Array.isArray(events) ? events : []

  if (eventsData.length === 0) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <p className="text-lg text-gray-600">لا توجد فعاليات متاحة حالياً</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {eventsData.map((event) => {
        // Get the icon from the first sport discipline or use a default
        const disciplineIcon = event.sportDisciplines?.[0]?.icon

        // Get image URL safely
        const imageUrl = event.mainImage ? urlForImage(event.mainImage).url() : "/placeholder.svg?height=200&width=200"

        return (
          <Link
            href={`/events/${event.slug?.current || event._id}`}
            key={event._id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex"
          >
            <div className="flex w-full flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-40 md:h-auto">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={event.title || "فعالية"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 p-4 border-l border-gray-100">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title || "فعالية"}</h3>
                    <div className="flex items-center space-x-4 space-x-reverse text-gray-600 text-sm mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>{formatDate(event.startDate) || "قريباً"}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{event.location || "القاهرة"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700">
                      {event.isRegistrationOpen ? "إشترك الآن" : "عرض التفاصيل"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-24 p-4 flex justify-center items-center">
                {disciplineIcon ? (
                  <div className="w-16 h-16 relative">
                    <Image
                      src={urlForImage(disciplineIcon).url()}
                      alt={event.sportDisciplines[0].title || "رياضة"}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">-</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
