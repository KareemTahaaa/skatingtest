import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Download, FileText, Eye } from "lucide-react"
import { getResults } from "@/lib/sanity.queries"

export const revalidate = 60

export const metadata: Metadata = {
    title: "النتائج - الاتحاد المصري للتزلج",
    description: "تحميل نتائج البطولات والفعاليات",
}

interface ResultFile {
    _id: string
    title: string
    description?: string
    file: {
        asset: {
            url: string
            originalFilename?: string
            size?: number
        }
    }
    publishedAt: string
    category?: string
}

export default async function ResultsPage() {
    let results: ResultFile[] = []

    try {
        results = await getResults()
    } catch (error) {
        console.error("Error fetching results:", error)
    }

    // Format file size
    const formatFileSize = (bytes?: number) => {
        if (!bytes) return ""
        const mb = bytes / (1024 * 1024)
        return `${mb.toFixed(2)} MB`
    }

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date)
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">النتائج</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        تحميل نتائج البطولات والفعاليات الرياضية
                    </p>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {results && results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {results.map((result) => (
                                <div
                                    key={result._id}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                                >
                                    <div className="flex items-start mb-4">
                                        <div className="bg-red-100 p-3 rounded-lg ml-4">
                                            <FileText className="h-8 w-8 text-red-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                                {result.title}
                                            </h3>
                                            {result.category && (
                                                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mb-2">
                                                    {result.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {result.description && (
                                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                            {result.description}
                                        </p>
                                    )}

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{formatDate(result.publishedAt)}</span>
                                        {result.file?.asset?.size && (
                                            <span>{formatFileSize(result.file.asset.size)}</span>
                                        )}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={result.file.asset.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            <Eye className="h-5 w-5 ml-2" />
                                            عرض
                                        </a>
                                        <a
                                            href={`${result.file.asset.url}?dl=${result.file.asset.originalFilename || "result.pdf"}`}
                                            download
                                            className="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            <Download className="h-5 w-5 ml-2" />
                                            تحميل
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg">لا توجد نتائج متاحة حالياً</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
