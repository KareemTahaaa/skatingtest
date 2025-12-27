import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { urlForImage } from "@/lib/sanity.client"
import { formatDate } from "@/lib/utils"

interface Event {
  _id: string
  title: string
  slug: {
    current: string
  }
  startDate: string
  endDate?: string
  location: string
  excerpt?: string
  mainImage?: any
}

interface UpcomingEventsProps {
  events: Event[]
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (!events || events.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">الفعاليات القادمة</h2>
          <Link href="/events" className="text-red-600 hover:underline">
            عرض الكل ←
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Link
              key={event._id}
              href={`/events/${event.slug.current}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative h-48">
                <Image
                  src={event.mainImage ? urlForImage(event.mainImage).url() : "/placeholder.svg?height=200&width=400"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 ml-2" />
                    <span>{formatDate(event.startDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
