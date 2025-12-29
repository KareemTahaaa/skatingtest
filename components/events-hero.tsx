import Image from "next/image"

interface EventsHeroProps {
  title?: string
}

export default function EventsHero({ title = "الفعاليات" }: EventsHeroProps) {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <Image src="/events-hero.png" alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 flex items-center justify-start z-20 p-12">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
    </section>
  )
}
