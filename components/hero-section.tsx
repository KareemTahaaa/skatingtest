"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { urlForImage } from "@/lib/sanity.client"

interface HeroSlide {
  _id: string
  title: string
  image?: any
  date?: string
  category?: string
  link?: string
}

interface HeroSectionProps {
  slides: HeroSlide[]
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (slides.length === 0) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (!slides || slides.length === 0) {
    return (
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700">
          <Image src="/hero-1.png" alt="الاتحاد المصري للتزلج" fill className="object-cover opacity-40" priority />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">الاتحاد المصري للتزلج</h1>
              <p className="text-xl md:text-2xl mb-8">نطور رياضة التزلج في مصر ونصنع أبطال المستقبل</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/events">الفعاليات القادمة</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
                >
                  <Link href="/disciplines">رياضاتنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentSlideData = slides[currentSlide]
  const imageUrl = currentSlideData.image ? urlForImage(currentSlideData.image).url() : "/hero-1.png"

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={currentSlideData.title || "Hero Image"}
          fill
          className="object-cover"
          priority
          unoptimized={imageUrl.includes("placeholder.svg")}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            {currentSlideData.category && (
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {currentSlideData.category}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{currentSlideData.title}</h1>
            {currentSlideData.date && (
              <div className="flex items-center gap-2 text-lg mb-8">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(currentSlideData.date).toLocaleDateString("ar-EG", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
            {currentSlideData.link && (
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href={currentSlideData.link}>اقرأ المزيد</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            onClick={prevSlide}
            aria-label="الشريحة السابقة"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            onClick={nextSlide}
            aria-label="الشريحة التالية"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`الانتقال إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
