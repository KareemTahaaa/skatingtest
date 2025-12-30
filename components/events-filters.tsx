"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface EventsFiltersProps {
  sportDisciplines: any[] | null | undefined
  initialEvents: any[] | null | undefined
  onFilterChange: (filteredEvents: any[]) => void
}

export default function EventsFilters({ sportDisciplines, initialEvents, onFilterChange }: EventsFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Use a ref to track if this is the first render
  const isInitialMount = useRef(true)
  const prevSearchParams = useRef(searchParams)

  // Ensure arrays are always defined
  const disciplines = Array.isArray(sportDisciplines) ? sportDisciplines : []
  const events = Array.isArray(initialEvents) ? initialEvents : []

  const [locationOpen, setLocationOpen] = useState(false)
  const [disciplineOpen, setDisciplineOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const currentLocation = searchParams.get("location") || "all"
  const currentDiscipline = searchParams.get("discipline") || "all"
  const currentSort = searchParams.get("sort") || "date"

  useEffect(() => {
    // Skip the first render to avoid the initial filter triggering a re-render loop
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Check if searchParams actually changed to avoid unnecessary updates
    const currentSearchParamsString = searchParams.toString()
    const prevSearchParamsString = prevSearchParams.current.toString()

    if (currentSearchParamsString === prevSearchParamsString) {
      return
    }

    prevSearchParams.current = searchParams

    let filteredEvents = [...events]

    // Filter by discipline
    if (currentDiscipline !== "all") {
      filteredEvents = filteredEvents.filter((event) =>
        event.discipline?.slug?.current === currentDiscipline
      )
    }

    // Filter by location
    if (currentLocation !== "all") {
      filteredEvents = filteredEvents.filter((event) => event.location?.includes(currentLocation))
    }

    // Sort events
    if (currentSort === "date") {
      filteredEvents.sort((a, b) => new Date(a.startDate || 0).getTime() - new Date(b.startDate || 0).getTime())
    } else if (currentSort === "title") {
      filteredEvents.sort((a, b) => (a.title || "").localeCompare(b.title || ""))
    }

    onFilterChange(filteredEvents)
  }, [searchParams, events, onFilterChange, currentDiscipline, currentLocation, currentSort])

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    router.push(`/events?${params.toString()}`)
  }

  // Extract unique locations from events with null checks
  const locations = Array.from(
    new Set(
      events
        .filter((event) => event.location) // Filter out events without location
        .map((event) => event.location),
    ),
  )

  // Get the current discipline name
  let currentDisciplineTitle = "الكل"
  if (currentDiscipline !== "all") {
    const foundDiscipline = disciplines.find((d) => d.slug?.current === currentDiscipline)
    if (foundDiscipline && foundDiscipline.name) {
      currentDisciplineTitle = foundDiscipline.name
    }
  }

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:flex flex-wrap gap-4 mb-6 md:mb-8">
        <div className="relative">
          <Button
            variant="outline"
            className="w-full md:w-auto justify-between"
            onClick={() => {
              setLocationOpen(!locationOpen)
              setDisciplineOpen(false)
              setSortOpen(false)
            }}
          >
            <span>المكان: {currentLocation === "all" ? "الكل" : currentLocation}</span>
            <ChevronDown className="h-4 w-4 mr-2" />
          </Button>
          {locationOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button
                  className={`block w-full text-right px-4 py-2 text-sm ${currentLocation === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => {
                    updateFilters("location", "all")
                    setLocationOpen(false)
                  }}
                >
                  الكل
                </button>
                {locations.map((location, index) => (
                  <button
                    key={index}
                    className={`block w-full text-right px-4 py-2 text-sm ${currentLocation === location ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={() => {
                      updateFilters("location", location)
                      setLocationOpen(false)
                    }}
                  >
                    {location}
                  </button>
                ))}
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
              setLocationOpen(false)
              setSortOpen(false)
            }}
          >
            <span>التخصص: {currentDisciplineTitle}</span>
            <ChevronDown className="h-4 w-4 mr-2" />
          </Button>
          {disciplineOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button
                  className={`block w-full text-right px-4 py-2 text-sm ${currentDiscipline === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
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
                    className={`block w-full text-right px-4 py-2 text-sm ${currentDiscipline === discipline.slug?.current
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={() => {
                      updateFilters("discipline", discipline.slug?.current)
                      setDisciplineOpen(false)
                    }}
                  >
                    {discipline.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <Button
            variant="outline"
            className="w-full md:w-auto justify-between"
            onClick={() => {
              setSortOpen(!sortOpen)
              setLocationOpen(false)
              setDisciplineOpen(false)
            }}
          >
            <span>
              الترتيب: {currentSort === "date" ? "التاريخ" : currentSort === "title" ? "العنوان" : "الأكثر مشاهدة"}
            </span>
            <ChevronDown className="h-4 w-4 mr-2" />
          </Button>
          {sortOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button
                  className={`block w-full text-right px-4 py-2 text-sm ${currentSort === "date" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => {
                    updateFilters("sort", "date")
                    setSortOpen(false)
                  }}
                >
                  التاريخ
                </button>
                <button
                  className={`block w-full text-right px-4 py-2 text-sm ${currentSort === "title" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => {
                    updateFilters("sort", "title")
                    setSortOpen(false)
                  }}
                >
                  العنوان
                </button>
                <button
                  className={`block w-full text-right px-4 py-2 text-sm ${currentSort === "popular" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
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
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <span>تصفية النتائج</span>
        </Button>

        {mobileFiltersOpen && (
          <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="mb-4">
              <h3 className="font-medium mb-2">المكان</h3>
              <div className="space-y-2">
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentLocation === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => updateFilters("location", "all")}
                >
                  الكل
                </button>
                {locations.map((location, index) => (
                  <button
                    key={index}
                    className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentLocation === location ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={() => updateFilters("location", location)}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">التخصص</h3>
              <div className="space-y-2">
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentDiscipline === "all" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => updateFilters("discipline", "all")}
                >
                  الكل
                </button>
                {disciplines.map((discipline) => (
                  <button
                    key={discipline._id}
                    className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentDiscipline === discipline.slug?.current
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={() => updateFilters("discipline", discipline.slug?.current)}
                  >
                    {discipline.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">الترتيب</h3>
              <div className="space-y-2">
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentSort === "date" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => updateFilters("sort", "date")}
                >
                  التاريخ
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentSort === "title" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => updateFilters("sort", "title")}
                >
                  العنوان
                </button>
                <button
                  className={`block w-full text-right px-3 py-2 text-sm rounded-md ${currentSort === "popular" ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => updateFilters("sort", "popular")}
                >
                  الأكثر مشاهدة
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
