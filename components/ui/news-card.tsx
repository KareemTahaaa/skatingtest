import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface NewsCardProps {
  news: {
    _id: string
    title: string
    slug: {
      current: string
    }
    excerpt?: string
    publishedAt: string
    mainImage?: {
      asset?: {
        _id?: string
        url?: string
      }
    }
    sportDisciplines?: Array<{
      _id: string
      title: string
      slug: {
        current: string
      }
    }>
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  // Safely extract image URL
  const imageUrl = news.mainImage?.asset?.url || "/placeholder.svg?height=300&width=400"

  // Ensure excerpt is a string
  const excerpt = typeof news.excerpt === "string" ? news.excerpt : ""

  return (
    <Link href={`/news/${news.slug.current}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full group">
        <div className="relative h-48">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={imageUrl.includes("placeholder.svg")}
          />
          {news.sportDisciplines && news.sportDisciplines.length > 0 && (
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {news.sportDisciplines[0].title}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
            {news.title}
          </h3>
          {excerpt && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{excerpt}</p>}
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 ml-1" />
            <span>{formatDate(news.publishedAt)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
