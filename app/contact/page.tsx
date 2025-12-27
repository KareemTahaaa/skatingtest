import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"
import ContactDepartments from "@/components/contact-departments"
import ContactFAQ from "@/components/contact-faq"
import { getContactPageMeta, getSiteSettings } from "@/lib/sanity.queries"

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [pageMeta, siteSettings] = await Promise.all([getContactPageMeta(), getSiteSettings()])

    return {
      title: pageMeta?.metaTitle || `اتصل بنا - ${siteSettings?.siteName || "الاتحاد المصري للتزلج"}`,
      description:
        pageMeta?.metaDescription || "تواصل مع الاتحاد المصري للتزلج - معلومات الاتصال، النموذج الإلكتروني، والعنوان",
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error)
    return {
      title: "اتصل بنا - الاتحاد المصري للتزلج",
      description: "تواصل مع الاتحاد المصري للتزلج - معلومات الاتصال، النموذج الإلكتروني، والعنوان",
    }
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <ContactHero />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 space-x-reverse">
            <a href="/" className="text-gray-500 hover:text-red-600">
              الرئيسية
            </a>
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
            <span className="text-red-600">اتصل بنا</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        <ContactDepartments />
        <ContactMap />
        <ContactFAQ />
      </div>
      <Footer />
    </main>
  )
}
