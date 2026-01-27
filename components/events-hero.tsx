import Image from "next/image"

interface EventsHeroProps {
  title?: string
  description?: string
  image?: string
}

export default function EventsHero({ title = "الفعاليات", description, image }: EventsHeroProps) {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <Image
        src={image || "/events-hero.png"}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center z-20 p-12">
        <h1 className="text-6xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-white/90 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  )
}
