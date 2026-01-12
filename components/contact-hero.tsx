import Image from "next/image"

interface ContactHeroProps {
  data?: {
    title?: string
    subtitle?: string
    backgroundImage?: {
      asset?: {
        url: string
      }
    }
  }
}

export default function ContactHero({ data }: ContactHeroProps) {
  const title = data?.title || "اتصل بنا"
  const description = data?.subtitle || "نحن هنا للإجابة على استفساراتكم ومساعدتكم في كل ما يتعلق برياضة التزلج"
  const bgImage = data?.backgroundImage?.asset?.url || "/placeholder.svg?height=300&width=1200"

  return (
    <section className="relative h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-start z-20 p-8 md:p-12">
        <div className="text-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
