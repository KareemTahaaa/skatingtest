import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar } from "lucide-react"

interface Document {
  title: string
  description?: string
  size?: string
  pages?: string
  lastUpdated?: string
  language?: string
  icon?: string
  file?: {
    asset: {
      url: string
      size?: number
    }
  }
}

interface RegulationsDownloadProps {
  documents?: Document[]
}

const defaultDocuments = [
  {
    title: "اللوائح العامة الكاملة",
    description: "نسخة PDF من جميع اللوائح العامة للاتحاد",
    size: "2.5 MB",
    pages: "45 صفحة",
    lastUpdated: "2024-01-15",
    language: "العربية",
    icon: "📋",
  },
  {
    title: "لوائح مكافحة المنشطات",
    description: "القوانين الخاصة بالمواد المحظورة والفحوصات",
    size: "1.8 MB",
    pages: "32 صفحة",
    lastUpdated: "2024-01-10",
    language: "العربية / English",
    icon: "🚫",
  },
  {
    title: "لوائح التزلج الفني",
    description: "القواعد والتقييم للتزلج الفني",
    size: "3.2 MB",
    pages: "58 صفحة",
    lastUpdated: "2023-12-20",
    language: "العربية",
    icon: "⛸️",
  },
]

export default function RegulationsDownload({ documents }: RegulationsDownloadProps) {
  // Use empty array if no documents provided (no mock data fallback)
  const docs = documents || []

  // If no documents, hide the section entirely
  if (docs.length === 0) {
    return null
  }

  // Format bytes to MB
  const formatSize = (sizeBytes: number) => {
    if (!sizeBytes) return ""
    return `${(sizeBytes / (1024 * 1024)).toFixed(2)} MB`
  }

  return (
    <section id="downloads" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">تحميل المستندات</h2>
        <p className="text-lg text-gray-600">النسخ الكاملة من اللوائح والقوانين بصيغة PDF</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-start text-lg">
                <span className="text-3xl ml-3">{doc.icon || "📄"}</span>
                <span>{doc.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {doc.description && <p className="text-gray-600 mb-4 text-sm">{doc.description}</p>}

              <div className="space-y-2 mb-4 text-sm text-gray-500">
                {/* Dynamically fetched size from asset, fallback to manual size if available */}
                {(doc.file?.asset?.size || doc.size) && (
                  <div className="flex items-center justify-between">
                    <span>الحجم:</span>
                    <span className="font-medium">
                      {doc.file?.asset?.size
                        ? formatSize(doc.file.asset.size)
                        : doc.size}
                    </span>
                  </div>
                )}

                {doc.pages && (
                  <div className="flex items-center justify-between">
                    <span>الصفحات:</span>
                    <span className="font-medium">{doc.pages}</span>
                  </div>
                )}

                {doc.language && (
                  <div className="flex items-center justify-between">
                    <span>اللغة:</span>
                    <span className="font-medium">{doc.language}</span>
                  </div>
                )}

                {doc.lastUpdated && (
                  <div className="flex items-center justify-between">
                    <Calendar className="h-4 w-4 ml-1 inline" />
                    <span>آخر تحديث:</span>
                    <span className="font-medium">{new Date(doc.lastUpdated).toLocaleDateString("ar-EG")}</span>
                  </div>
                )}
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                <a href={doc.file?.asset?.url || "#"} download>
                  <Download className="h-4 w-4 ml-2" />
                  تحميل PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start">
            <FileText className="h-6 w-6 text-blue-600 ml-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-blue-800 mb-2">ملاحظة هامة</h3>
              <p className="text-blue-700 leading-relaxed">
                جميع المستندات المتوفرة للتحميل هي النسخ الرسمية المعتمدة من الاتحاد المصري للتزلج.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
