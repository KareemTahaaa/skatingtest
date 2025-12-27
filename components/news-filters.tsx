"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Filter } from "lucide-react"

interface NewsFiltersProps {
  sportDisciplines: any[] | null | undefined
}

export default function NewsFilters({ sportDisciplines }: NewsFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Ensure sportDisciplines is always an array
  const disciplines = Array.isArray(sportDisciplines) ? sportDisciplines : []

  const [sortOpen, setSortOpen] = useState(false)
  const [dateOpen, setDateOpen] = useState(false)
  const [disciplineOpen, setDisciplineOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const currentSort = searchParams.get("sort") || "newest"
  const currentDate = searchParams.get("date") || "all"
  const currentDiscipline = searchParams.get("discipline") || "all"

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    router.push(`/news?${params.toString()}`)
  }

  // Get the current discipline title
  let currentDisciplineTitle = "الكل"
  if (currentDiscipline !== "all") {
    const foundDiscipline = disciplines.find((d) => d.slug?.current === currentDiscipline)
    if (foundDiscipline && foundDiscipline.title) {
      currentDisciplineTitle = foundDiscipline.title
    }
  }

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:flex flex-col md:flex-row justify-between mb-6 md:mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Button
              variant="outline"
              className="w-full md:w-auto justify-between mb-2 md:mb-0"
              onClick={() => {
                setSortOpen(!sortOpen)
                setDateOpen(false)
                setDisciplineOpen(false)
              }}
            >
              <span>
                ترتيب حسب: {currentSort === "newest" ? "الأحدث" : currentSort === "oldest" ? "الأقدم" : "الأكثر مشاهدة"}
              </span>
              <ChevronDown className="h-4 w-4 mr-2" />
            </Button>
            {sortOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentSort === "newest" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("sort", "newest")
                      setSortOpen(false)
                    }}
                  >
                    الأحدث
                  </button>
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentSort === "oldest" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("sort", "oldest")
                      setSortOpen(false)
                    }}
                  >
                    الأقدم
                  </button>
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentSort === "popular" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("sort", "popular")
                      setSortOpen(false)
                    }}
                  >
                    الأكثر مشاهدة
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <Button
              variant="outline"
              className="w-full md:w-auto justify-between"
              onClick={() => {
                setDateOpen(!dateOpen)
                setSortOpen(false)
                setDisciplineOpen(false)
              }}
            >
              <span>
                التاريخ:{" "}
                {currentDate === "all"
                  ? "الكل"
                  : currentDate === "week"
                    ? "هذا الأسبوع"
                    : currentDate === "month"
                      ? "هذا الشهر"
                      : "هذا العام"}
              </span>
              <ChevronDown className="h-4 w-4 mr-2" />
            </Button>
            {dateOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentDate === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("date", "all")
                      setDateOpen(false)
                    }}
                  >
                    الكل
                  </button>
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentDate === "week" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("date", "week")
                      setDateOpen(false)
                    }}
                  >
                    هذا الأسبوع
                  </button>
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentDate === "month" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("date", "month")
                      setDateOpen(false)
                    }}
                  >
                    هذا الشهر
                  </button>
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentDate === "year" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("date", "year")
                      setDateOpen(false)
                    }}
                  >
                    هذا العام
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <Button
              variant="outline"
              className="w-full md:w-auto justify-between"
              onClick={() => {
                setDisciplineOpen(!disciplineOpen)
                setSortOpen(false)
                setDateOpen(false)
              }}
            >
              <span>التخصص: {currentDisciplineTitle}</span>
              <ChevronDown className="h-4 w-4 mr-2" />
            </Button>
            {disciplineOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className={`block w-full text-right px-4 py-2 text-sm ${
                      currentDiscipline === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      updateFilters("discipline", "all")
                      setDisciplineOpen(false)
                    }}
                  >
                    الكل
                  </button>
                  {disciplines.map((discipline) => (
                    <button
                      key={discipline._id}
                      className={`block w-full text-right px-4 py-2 text-sm ${
                        currentDiscipline === discipline.slug?.current
                          ? "bg-red-50 text-red-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        updateFilters("discipline", discipline.slug?.current)
                        setDisciplineOpen(false)
                      }}
                    >
                      {discipline.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          <Filter className="h-4 w-4 ml-2" />
          <span>تصفية النتائج</span>
        </Button>

        {mobileFiltersOpen && (
          <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="mb-4">
              <h3 className="font-medium mb-2">ترتيب حسب</h3>
              <div className="space-y-2">
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentSort === "newest" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("sort", "newest")}
                >
                  الأحدث
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentSort === "oldest" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("sort", "oldest")}
                >
                  الأقدم
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentSort === "popular" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("sort", "popular")}
                >
                  الأكثر مشاهدة
                </button>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">التاريخ</h3>
              <div className="space-y-2">
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentDate === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("date", "all")}
                >
                  الكل
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentDate === "week" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("date", "week")}
                >
                  هذا الأسبوع
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentDate === "month" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("date", "month")}
                >
                  هذا الشهر
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentDate === "year" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("date", "year")}
                >
                  هذا العام
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">التخصص</h3>
              <div className="space-y-2">
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                    currentDiscipline === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateFilters("discipline", "all")}
                >
                  الكل
                </button>
                {disciplines.map((discipline) => (
                  <button
                    key={discipline._id}
                    className={`block w-full text-right px-3 py-2 text-sm rounded-md ${
                      currentDiscipline === discipline.slug?.current
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => updateFilters("discipline", discipline.slug?.current)}
                  >
                    {discipline.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
