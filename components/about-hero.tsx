import Image from "next/image"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Image
        src="/placeholder.svg?height=500&width=1200&text=الاتحاد+المصري+للتزلج"
        alt="الاتحاد المصري للتزلج"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-start z-20 p-8 md:p-12">
        <div className="text-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">من نحن</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            الاتحاد المصري للتزلج - رائدون في تطوير رياضة التزلج في مصر والمنطقة العربية
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex items-center space-x-2 space-x-reverse text-white/80">
          <Link href="/" className="hover:text-white">
            الرئيسية
          </Link>
          <span>
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
              className="rotate-180"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
          <span className="text-white">من نحن</span>
        </div>
      </div>
    </section>
  )
}
