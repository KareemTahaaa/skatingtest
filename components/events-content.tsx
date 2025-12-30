"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import EventsGrid from "@/components/events-grid"
import EventsList from "@/components/events-list"
import EventsFilters from "@/components/events-filters"
import { useSearchParams } from "next/navigation"

interface EventsContentProps {
  initialEvents: any[] | null | undefined
  sportDisciplines: any[] | null | undefined
}

export default function EventsContent({ initialEvents, sportDisciplines }: EventsContentProps) {
  // Ensure arrays are always defined
  const eventsData = Array.isArray(initialEvents) ? initialEvents : []
  const disciplines = Array.isArray(sportDisciplines) ? sportDisciplines : []

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentMonth, setCurrentMonth] = useState("ديسمبر 2025")
  const [filteredEvents, setFilteredEvents] = useState(eventsData)
  const [displayedEvents, setDisplayedEvents] = useState(eventsData)

  const searchParams = useSearchParams()
  const isInitialRender = useRef(true)
  const prevSearchParams = useRef(searchParams)

  // Filter events by month without causing re-renders
  const filterEventsByMonth = useCallback((events: any[], month: string) => {
    // This is just a simulation - in a real app you would filter by date
    if (month === "يناير 2026") {
      return events.slice(0, Math.max(1, Math.floor(events.length / 2)))
    } else if (month === "نوفمبر 2025") {
      return events.slice(Math.floor(events.length / 2))
    } else {
      return events
    }
  }, [])

  // Apply filtering based on URL params
  useEffect(() => {
    // Skip effect on initial render to prevent double-filtering
    if (isInitialRender.current) {
      isInitialRender.current = false

      // Initialize displayed events
      const initialDisplayed = filterEventsByMonth(eventsData, currentMonth)
      setDisplayedEvents(initialDisplayed)
      return
    }

    // Check if searchParams actually changed to avoid unnecessary updates
    const currentSearchParamsString = searchParams.toString()
    const prevSearchParamsString = prevSearchParams.current.toString()

    if (currentSearchParamsString === prevSearchParamsString) {
      return
    }

    prevSearchParams.current = searchParams

    const currentLocation = searchParams.get("location") || "all"
    const currentDiscipline = searchParams.get("discipline") || "all"
    const currentSort = searchParams.get("sort") || "date"

    let newFilteredEvents = [...eventsData]

    // Filter by discipline
    if (currentDiscipline !== "all") {
      newFilteredEvents = newFilteredEvents.filter((event) =>
        event.discipline?.slug?.current === currentDiscipline
      )
    }

    // Filter by location
    if (currentLocation !== "all") {
      newFilteredEvents = newFilteredEvents.filter((event) => event.location?.includes(currentLocation))
    }

    // Sort events
    if (currentSort === "date") {
      newFilteredEvents.sort((a, b) => new Date(a.startDate || 0).getTime() - new Date(b.startDate || 0).getTime())
    } else if (currentSort === "title") {
      newFilteredEvents.sort((a, b) => (a.title || "").localeCompare(b.title || ""))
    }

    setFilteredEvents(newFilteredEvents)

    // Update displayed events based on month filter
    const newDisplayedEvents = filterEventsByMonth(newFilteredEvents, currentMonth)
    setDisplayedEvents(newDisplayedEvents)
  }, [searchParams, eventsData, currentMonth, filterEventsByMonth])

  // Effect to update displayed events when month changes
  useEffect(() => {
    const newDisplayedEvents = filterEventsByMonth(filteredEvents, currentMonth)
    setDisplayedEvents(newDisplayedEvents)
  }, [currentMonth, filterEventsByMonth, filteredEvents])

  const nextMonth = useCallback(() => {
    setCurrentMonth("يناير 2026")
  }, [])

  const prevMonth = useCallback(() => {
    setCurrentMonth("نوفمبر 2025")
  }, [])

  // This function is now simplified to avoid unnecessary re-renders
  const handleFilterChange = useCallback((newFilteredEvents: any[]) => {
    setFilteredEvents(newFilteredEvents)
  }, [])

  return (
    <div>
      {/* View toggle and filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
        <div className="flex space-x-2 space-x-reverse mb-4 md:mb-0">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-red-600 hover:bg-red-700" : ""}
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
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-red-600 hover:bg-red-700" : ""}
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
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </Button>
        </div>

        <div className="flex items-center space-x-4 space-x-reverse">
          <button onClick={prevMonth} className="text-gray-600 hover:text-red-600">
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold text-red-600">{currentMonth}</h2>
          <button onClick={nextMonth} className="text-gray-600 hover:text-red-600">
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      <EventsFilters sportDisciplines={disciplines} initialEvents={eventsData} onFilterChange={handleFilterChange} />

      {/* Events content based on view mode */}
      {viewMode === "grid" ? <EventsGrid events={displayedEvents} /> : <EventsList events={displayedEvents} />}
    </div>
  )
}
