import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Image
        src="/placeholder.svg?height=300&width=1200&text=اتصل+بنا"
        alt="اتصل بنا"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-start z-20 p-8 md:p-12">
        <div className="text-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">اتصل بنا</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في كل ما يتعلق برياضة التزلج
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-12 z-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#E53E3E"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset="100"
          />
        </svg>
      </div>
    </section>
  )
}
