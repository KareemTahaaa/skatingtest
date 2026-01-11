"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useEffect, useState } from "react"
import { getSiteSettings, getSocialMediaLinks } from "@/lib/sanity.queries"

interface SiteSettings {
  contactInfo?: {
    address?: {
      street?: string
      city?: string
      country?: string
      postalCode?: string
    }
    phone?: Array<{
      label?: string
      number?: string
    }>
    email?: Array<{
      label?: string
      address?: string
    }>
    workingHours?: Array<{
      days?: string
      hours?: string
    }>
  }
  logo?: {
    light?: {
      asset?: {
        url?: string
      }
    }
    dark?: {
      asset?: {
        url?: string
      }
    }
  }
}

interface SocialMediaLinks {
  facebook?: string
  instagram?: string
  twitter?: string
  linkedin?: string
}

export default function Footer() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [socialLinks, setSocialLinks] = useState<SocialMediaLinks | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [settingsData, socialData] = await Promise.all([
          getSiteSettings(),
          getSocialMediaLinks()
        ])
        setSettings(settingsData)
        setSocialLinks(socialData)
      } catch (error) {
        console.error("Failed to fetch footer data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">الرئيسية</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-400 text-sm sm:text-base">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 text-sm sm:text-base">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/regulations" className="hover:text-red-400 text-sm sm:text-base">
                  اللوائح والقوانين
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">الإعلام</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="hover:text-red-400 text-sm sm:text-base">
                  الأخبار
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-red-400 text-sm sm:text-base">
                  الفعاليات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 text-sm sm:text-base">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">العنوان</h3>
            <address className="not-italic text-sm sm:text-base">
              {!loading && settings?.contactInfo?.address ? (
                <>
                  <p>{settings.contactInfo.address.street}</p>
                  <p>
                    {settings.contactInfo.address.city}، {settings.contactInfo.address.country}
                  </p>
                </>
              ) : (
                <>
                  <p>256A شارع الهرم</p>
                  <p>القاهرة، مصر</p>
                </>
              )}
            </address>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">اتصل بنا</h3>
            <ul className="space-y-2">
              {!loading && settings?.contactInfo?.phone && settings.contactInfo.phone.length > 0 ? (
                settings.contactInfo.phone.map((phone, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base">
                    <span className="ml-2">📞</span>
                    <span>{phone.number}</span>
                  </li>
                ))
              ) : (
                <li className="flex items-center text-sm sm:text-base">
                  <span className="ml-2">📞</span>
                  <span>+20111111111</span>
                </li>
              )}
              {!loading && settings?.contactInfo?.email && settings.contactInfo.email.length > 0 ? (
                settings.contactInfo.email.map((email, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base">
                    <span className="ml-2">📧</span>
                    <span>{email.address}</span>
                  </li>
                ))
              ) : (
                <li className="flex items-center text-sm sm:text-base">
                  <span className="ml-2">📧</span>
                  <span>info@ensf.com</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src={settings?.logo?.dark?.asset?.url || "/logo-white.png"}
              alt="الاتحاد المصري للتزلج"
              width={120}
              height={60}
              className="h-12 sm:h-16 w-auto"
            />
          </div>

          <div className="flex space-x-4 space-x-reverse">
            {socialLinks?.facebook ? (
              <Link
                href={socialLinks.facebook}
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
            ) : (
              <Link href="#" className="hover:text-red-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
            )}
            {socialLinks?.instagram ? (
              <Link
                href={socialLinks.instagram}
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستجرام</span>
              </Link>
            ) : (
              <Link href="#" className="hover:text-red-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستجرام</span>
              </Link>
            )}
            {socialLinks?.linkedin ? (
              <Link
                href={socialLinks.linkedin}
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">لينكد إن</span>
              </Link>
            ) : (
              <Link href="#" className="hover:text-red-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">لينكد إن</span>
              </Link>
            )}
            {socialLinks?.twitter ? (
              <Link
                href={socialLinks.twitter}
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
            ) : (
              <Link href="#" className="hover:text-red-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
