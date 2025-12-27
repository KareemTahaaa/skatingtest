import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DisciplineNewsProps {
  news: any[]
  disciplineName: string
}

export default function DisciplineNews({ news, disciplineName }: DisciplineNewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>آخر أخبار {disciplineName}</CardTitle>
      </CardHeader>
      <CardContent>
        {news.length === 0 ? (
          <p className="text-gray-500 text-center py-8">لا توجد أخبار متاحة حالياً</p>
        ) : (
          <div className="space-y-4">
            {news.map((article) => {
              const imageUrl = article.mainImage?.asset?.url || "/placeholder.svg?height=200&width=300"
              const articleExcerpt = typeof article.excerpt === "string" ? article.excerpt : ""

              return (
                <Link
                  key={article._id}
                  href={`/news/${article.slug.current}`}
                  className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover rounded"
                      unoptimized={imageUrl.includes("placeholder")}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 line-clamp-2">{article.title}</h3>
                    {articleExcerpt && <p className="text-sm text-gray-600 line-clamp-2">{articleExcerpt}</p>}
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(article.publishedAt).toLocaleDateString("ar-EG")}
                    </p>
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
