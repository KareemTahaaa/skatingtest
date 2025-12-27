import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { getNewsBySlug, getAllNews } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { formatDate } from "@/lib/utils"
import { PortableText } from "@portabletext/react"
import { portableTextComponents } from "@/components/portable-text-components"
import TableOfContents from "@/components/table-of-contents"

export const revalidate = 60

const sections = [
  { id: "article-header", title: "العنوان الرئيسي" },
  { id: "article-content", title: "المحتوى" },
  { id: "article-related", title: "مقالات ذات صلة" },
]

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug)

  if (!news) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">الخبر غير موجود</h1>
          <Link href="/news" className="text-red-600 hover:underline">
            العودة إلى الأخبار
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const allNews = await getAllNews()
  const filteredRelatedNews = allNews.filter((item) => item._id !== news._id).slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div id="article-header" className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={urlForImage(news.mainImage).url() || "/placeholder.svg"}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 right-0 left-0 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto">
          <div className="flex items-center text-white mb-2">
            <CalendarIcon className="h-4 w-4 ml-2" />
            <span className="text-sm">{formatDate(news.publishedAt)}</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{news.title}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-600">
            الرئيسية
          </Link>
          <span className="mx-2">›</span>
          <Link href="/news" className="hover:text-red-600">
            الأخبار
          </Link>
          <span className="mx-2">›</span>
          {news.sportDisciplines && news.sportDisciplines[0] && (
            <>
              <Link href={`/disciplines/${news.sportDisciplines[0].slug?.current}`} className="hover:text-red-600">
                {news.sportDisciplines[0].title}
              </Link>
              <span className="mx-2">›</span>
            </>
          )}
          <span className="text-red-600 truncate">{news.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div id="article-content" className="lg:col-span-2">
            <div className="mb-8">
              {news.excerpt && <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">{news.excerpt}</h2>}

              <div className="prose prose-lg max-w-none">
                {news.body && <PortableText value={news.body} components={portableTextComponents} />}
              </div>
            </div>

            {news.images && news.images[0] && (
              <div className="my-8">
                <Image
                  src={urlForImage(news.images[0]).url() || "/placeholder.svg"}
                  alt={news.title}
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <TableOfContents sections={sections} />
          </div>
        </div>
      </div>

      <div id="article-related" className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">أخبار تهمك</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredRelatedNews.map((item) => (
              <Link
                href={`/news/${item.slug?.current}`}
                key={item._id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={item.mainImage ? urlForImage(item.mainImage).url() : "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-xs">أخبار</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarIcon className="h-4 w-4 ml-1" />
                    <span>{formatDate(item.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
