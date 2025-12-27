import EventCard from "@/components/ui/event-card"

interface EventsGridProps {
  events: any[] | null | undefined
}

export default function EventsGrid({ events }: EventsGridProps) {
  // Ensure events is always an array
  const eventsData = Array.isArray(events) ? events : []

  if (eventsData.length === 0) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <p className="text-lg text-gray-600">لا توجد فعاليات متاحة حالياً</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventsData.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  )
}
