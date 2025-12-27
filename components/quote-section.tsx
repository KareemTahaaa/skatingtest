"use client"

interface QuoteSectionProps {
  quote: {
    text: string
    author: string
  }
}

export default function QuoteSection({ quote }: QuoteSectionProps) {
  // Ensure text and author are strings
  const quoteText = typeof quote.text === "string" ? quote.text : ""
  const quoteAuthor = typeof quote.author === "string" ? quote.author : ""

  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6 opacity-50">"</div>
          <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">{quoteText}</blockquote>
          <p className="text-xl opacity-90">— {quoteAuthor}</p>
        </div>
      </div>
    </section>
  )
}
