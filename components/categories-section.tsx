"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { urlForImage } from "@/lib/sanity.client"

interface CategoriesSectionProps {
  disciplines: any[]
}

export default function CategoriesSection({ disciplines }: CategoriesSectionProps) {
  if (!disciplines || disciplines.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">التخصصات الرياضية</h2>
          <p className="text-center text-gray-600">لا توجد تخصصات متاحة حالياً</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">التخصصات الرياضية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {disciplines.slice(0, 5).map((discipline) => {
            const imageUrl =
              discipline.image?.asset?.url ||
              urlForImage(discipline.image).url() ||
              "/placeholder.svg?height=200&width=300"
            const iconUrl =
              discipline.icon?.asset?.url || urlForImage(discipline.icon).url() || "/placeholder.svg?height=80&width=80"

            // Ensure description is a string
            const description =
              typeof discipline.description === "string"
                ? discipline.description
                : "تخصص رياضي من الاتحاد المصري للتزلج"

            return (
              <Link key={discipline._id} href={`/disciplines/${discipline.slug.current}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-40">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={discipline.title}
                      fill
                      className="object-cover"
                      unoptimized={imageUrl.includes("placeholder.svg")}
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-red-50 rounded-full flex items-center justify-center">
                      <Image
                        src={iconUrl || "/placeholder.svg"}
                        alt={`${discipline.title} icon`}
                        width={40}
                        height={40}
                        className="object-contain"
                        unoptimized={iconUrl.includes("placeholder.svg")}
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{discipline.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
