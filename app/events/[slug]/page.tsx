import Header from "@/components/header"
import SiteFooter from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getEventBySlug } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { formatDate } from "@/lib/utils"
import { PortableText } from "@portabletext/react"
import { portableTextComponents } from "@/components/portable-text-components"
import EventCountdown from "@/components/event-countdown"
import EventShareLinks from "@/components/event-share-links"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug)

  if (!event) {
    return <div>Loading...</div>
  }

  // Calculate if the event is upcoming
  const isUpcoming = event.startDate && new Date(event.startDate) > new Date()

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={event.mainImage ? urlForImage(event.mainImage).url() : "/event-hero.png"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              الرئيسية
            </Link>
            <span className="text-gray-400">
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
            <Link href="/events" className="text-gray-500 hover:text-red-600">
              الفعاليات
            </Link>
            {event.sportDisciplines && event.sportDisciplines[0] && (
              <>
                <span className="text-gray-400">
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
                <Link
                  href={`/disciplines/${event.sportDisciplines[0].slug?.current}`}
                  className="text-gray-500 hover:text-red-600"
                >
                  {event.sportDisciplines[0].title}
                </Link>
              </>
            )}
            <span className="text-gray-400">
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
            <span className="text-red-600 truncate max-w-[200px]">{event.title}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <span>المتابعة</span>
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Button>
          <EventShareLinks
            eventTitle={event.title}
            eventUrl={typeof window !== "undefined" ? window.location.href : ""}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Countdown */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                {isUpcoming ? (
                  <EventCountdown targetDate={event.startDate} />
                ) : (
                  <h3 className="text-2xl font-bold text-red-600 mb-2">تم انتهاء الفعالية</h3>
                )}
                <p className="text-gray-600 text-sm mt-4">{event.excerpt}</p>
              </div>
              <div className="p-4">
                {event.isRegistrationOpen && isUpcoming ? (
                  <Button className="w-full bg-red-600 hover:bg-red-700 mb-3">إشترك الآن</Button>
                ) : (
                  <Button className="w-full bg-gray-400 hover:bg-gray-500 mb-3" disabled>
                    التسجيل مغلق
                  </Button>
                )}
                <Link href="/results" className="block w-full">
                  <Button variant="outline" className="w-full">
                    عرض النتائج
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-black/10 rounded-full p-2 ml-3">
                    {event.sportDisciplines && event.sportDisciplines[0] && event.sportDisciplines[0].icon && (
                      <Image
                        src={urlForImage(event.sportDisciplines[0].icon).url()}
                        alt={`${event.sportDisciplines[0].title} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {event.sportDisciplines && event.sportDisciplines[0] ? event.sportDisciplines[0].title : "فعالية"}
                  </h2>
                </div>

                <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 ml-1" />
                    <span>{event.location}</span>
                  </div>
                  <div className="text-gray-600">{formatDate(event.startDate)}</div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-red-600 mb-4">استعدوا للإثارة والتشويق!</h3>
                  {event.description ? (
                    <div className="prose prose-lg max-w-none">
                      <PortableText value={event.description} components={portableTextComponents} />
                    </div>
                  ) : (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      يدعوكم الاتحاد المصري للتزلج للمشاركة في {event.title}، والتي ستقام في{" "}
                      {formatDate(event.startDate)}
                      {event.endDate && ` وحتى ${formatDate(event.endDate)}`} على المستوى المحلي. نرحب بكل المتسابقين
                      والمشجعين... ستكون بطولتكم وفرصتكم للتألق في عالم{" "}
                      {event.sportDisciplines && event.sportDisciplines[0] ? event.sportDisciplines[0].title : "التزلج"}{" "}
                      في مصر!
                    </p>
                  )}
                </div>

                {event.images && event.images.length > 0 && (
                  <div className="mb-8">
                    <Image
                      src={urlForImage(event.images[0]).url() || "/placeholder.svg"}
                      alt={event.title}
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                {event.keyDetails && event.keyDetails.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-red-600 mb-4">التفاصيل الأساسية:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                      {event.keyDetails.map((detail: string, index: number) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.whyParticipate && event.whyParticipate.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-red-600 mb-4">لماذا يجب عليك المشاركة؟</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                      {event.whyParticipate.map((reason: string, index: number) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.images && event.images.length > 1 && (
                  <div className="mb-8">
                    <Image
                      src={urlForImage(event.images[1]).url() || "/placeholder.svg"}
                      alt={event.title}
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                {event.registrationSteps && event.registrationSteps.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-red-600 mb-4">كيفية التسجيل:</h3>
                    <p className="text-gray-700 mb-4">
                      {event.isRegistrationOpen
                        ? "التسجيل مفتوح الآن. يرجى اتباع الخطوات التالية للتسجيل:"
                        : "سيتم فتح باب التسجيل قريباً. يرجى متابعة هذه الصفحة ومواقع التواصل الاجتماعي الخاصة بالاتحاد الرسمي للتزلج للحصول على:"}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                      {event.registrationSteps.map((step: string, index: number) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.additionalInfo && event.additionalInfo.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-red-600 mb-4">معلومات إضافية:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mr-4">
                      {event.additionalInfo.map((info: string, index: number) => (
                        <li key={index}>{info}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="text-center">
                  {event.isRegistrationOpen && isUpcoming ? (
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8">
                      إشترك الآن
                    </Button>
                  ) : (
                    <Button size="lg" className="bg-gray-400 hover:bg-gray-500 px-8" disabled>
                      التسجيل مغلق
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
