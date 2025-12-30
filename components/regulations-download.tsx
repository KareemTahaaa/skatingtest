import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar } from "lucide-react"

interface Document {
  title: string
  file?: {
    asset: {
      url: string
      size: number
    }
  }
}

interface RegulationsDownloadProps {
  documents?: Document[]
}

const defaultDocuments: Document[] = []

export default function RegulationsDownload({ documents }: RegulationsDownloadProps) {
  const docs = documents || defaultDocuments

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
                <span className="text-3xl ml-3">📄</span>
                <span>{doc.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-sm text-gray-500">
                {doc.file?.asset?.size && (
                  <div className="flex items-center justify-between">
                    <span>الحجم:</span>
                    <span className="font-medium">{(doc.file.asset.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                )}
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                <a href={doc.file?.asset?.url || "#"} download target="_blank" rel="noopener noreferrer">
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
                جميع المستندات المتوفرة للتحميل هي النسخ الرسمية المعتمدة من الاتحاد المصري للتزلج. في حالة وجود أي
                تعارض بين النسخة الإلكترونية والنسخة المطبوعة، تُعتبر النسخة المطبوعة المودعة لدى الاتحاد هي المرجع.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section >
  )
}
