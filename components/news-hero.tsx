import Image from "next/image"

interface NewsHeroProps {
  title?: string
  description?: string
  backgroundImage?: string
}

export default function NewsHero({ title = "آخر الأخبار", description, backgroundImage }: NewsHeroProps) {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <Image
        src={backgroundImage || "/hero-1.png"}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center z-20 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        {description && <p className="text-lg md:text-xl text-white/90 max-w-2xl">{description}</p>}
      </div>
    </section>
  )
}
