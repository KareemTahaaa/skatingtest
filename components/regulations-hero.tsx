interface RegulationsHeroProps {
  data?: {
    title: string
    subtitle?: string
    backgroundImage?: {
      asset: {
        url: string
      }
    }
  }
}

export default function RegulationsHero({ data }: RegulationsHeroProps) {
  const title = data?.title || "اللوائح والقوانين"
  const subtitle = data?.subtitle || "جميع القوانين واللوائح المنظمة لأنشطة الاتحاد المصري للتزلج"
  const backgroundImage = data?.backgroundImage?.asset?.url || "/placeholder.svg?height=400&width=1200"

  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-black/70"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{subtitle}</p>
      </div>
    </div>
  )
}
