"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/lib/sanity.client"

export interface DisciplineCardProps {
  discipline: {
    _id: string
    name: string
    description?: string
    slug: { current: string }
    image: any
    icon?: any
  }
  showDescription?: boolean
  imageHeight?: string
  className?: string
  iconSize?: {
    containerSize: string
    padding: string
    imageSize: number
  }
}

export default function DisciplineCard({
  discipline,
  showDescription = true,
  imageHeight = "h-64",
  className = "",
  iconSize = {
    containerSize: "w-16 h-16",
    padding: "p-3",
    imageSize: 40,
  },
}: DisciplineCardProps) {
  // Safely extract image URL
  const imageUrl =
    discipline.image?.asset?.url || urlForImage(discipline.image).url() || "/placeholder.svg?height=300&width=500"

  // Safely extract icon URL
  const iconUrl = discipline.icon?.asset?.url || urlForImage(discipline.icon).url() || null

  // Ensure description is a string
  const description = typeof discipline.description === "string" ? discipline.description : ""

  return (
    <Link
      href={`/disciplines/${discipline.slug.current}`}
      className={`group relative overflow-hidden rounded-lg ${imageHeight} ${className}`}
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={discipline.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        unoptimized={imageUrl.includes("placeholder.svg")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      {iconUrl && (
        <div className={`absolute top-4 right-4 bg-white rounded-full ${iconSize.padding} ${iconSize.containerSize}`}>
          <Image
            src={iconUrl || "/placeholder.svg"}
            alt={`${discipline.name} icon`}
            width={iconSize.imageSize}
            height={iconSize.imageSize}
            className="w-full h-full object-contain"
            unoptimized={iconUrl.includes("placeholder.svg")}
          />
        </div>
      )}
      <div className="absolute bottom-0 right-0 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{discipline.name}</h2>
        {showDescription && description && <p className="text-sm opacity-80 line-clamp-2">{description}</p>}
      </div>
    </Link>
  )
}
