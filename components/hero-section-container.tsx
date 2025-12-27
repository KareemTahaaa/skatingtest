import { getHeroSlides } from "@/lib/sanity.queries"
import HeroSection from "./hero-section"

export default async function HeroSectionContainer() {
  const slides = await getHeroSlides()

  return <HeroSection slides={slides} />
}
