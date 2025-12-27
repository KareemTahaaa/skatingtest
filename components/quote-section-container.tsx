import { getActiveQuote } from "@/lib/sanity.queries"
import QuoteSection from "./quote-section"

export default async function QuoteSectionContainer() {
  const quote = await getActiveQuote()
  return <QuoteSection quote={quote} />
}
