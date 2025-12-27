"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NewsCard from "@/components/ui/news-card"

interface NewsGridProps {
  news: any[] | null | undefined
}

export default function NewsGrid({ news }: NewsGridProps) {
  const newsItems = Array.isArray(news) ? news : []

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = newsItems.slice(startIndex, startIndex + itemsPerPage)

  if (newsItems.length === 0) {
    return (
      <div className="bg-white rounded-lg p-6 sm:p-8 text-center">
        <p className="text-base sm:text-lg text-gray-600">لا توجد أخبار متاحة حالياً</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {currentItems.map((item) => (
          <NewsCard
            key={item._id}
            news={item}
            imageHeight="h-48 sm:h-56 md:h-64"
            showDisciplineIcon={true}
            showDisciplineTitle={true}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-1 sm:space-x-2 space-x-reverse">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-1 sm:p-2 border rounded-md disabled:opacity-50"
            aria-label="Previous page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-2 h-2 rounded-full ${currentPage === index + 1 ? "bg-red-600" : "bg-gray-300"}`}
              aria-label={`Page ${index + 1}`}
            />
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1 sm:p-2 border rounded-md disabled:opacity-50"
            aria-label="Next page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
