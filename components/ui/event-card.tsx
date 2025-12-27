"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { urlForImage } from "@/lib/sanity.client"

export interface EventCardProps {
  event: {
    _id: string
    title: string
    mainImage: any
    startDate: string
    slug: { current: string }
    location?: string
    isRegistrationOpen?: boolean
    sportDisciplines?: Array<{
      title: string
      icon: any
    }>
  }
  showLocation?: boolean
  imageHeight?: string
  className?: string
}

export default function EventCard({ 
  event, 
  showLocation = true, 
  imageHeight = "h-48 sm:h-56",
  className = ""
}: EventCardProps) {
  return (
    <Card className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}>
      <div className={`relative ${imageHeight}`}>
        <div className="absolute top-3 right-3 z-10 flex justify-between w-[94%]">
          <div className="bg-white rounded-md p-2 text-center">
            <div className="text-xs text-gray-600">
              {new Date(event.startDate).toLocaleDateString('ar-EG', { month: 'short' })}
            </div>
            <div className="text-xl font-bold text-red-600">
              {new Date(event.startDate).toLocaleDateString('ar-EG', { day: 'numeric' })}
            </div>
          </div>
          {event.sportDisciplines?.[0]?.icon && (
            <div className="bg-white rounded-full p-2 w-12 h-12">
              <Image
                src={urlForImage(event.sportDisciplines[0].icon).url()}
                alt={event.sportDisciplines[0].title}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
        <Image
          src={event.mainImage ? urlForImage(event.mainImage).url() : "/placeholder.svg?height=200&width=300"}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">{event.title}</h3>
        {showLocation && event.location && (
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="h-4 w-4 ml-1" />
            <span className="truncate">{event.location}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/events/${event.slug.current}`} className="w-full">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            {event.isRegistrationOpen ? "اشترك الآن" : "عرض التفاصيل"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
