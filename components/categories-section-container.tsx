import { getAllSportDisciplines } from "@/lib/sanity.queries"
import CategoriesSection from "./categories-section"

export default async function CategoriesSectionContainer() {
  const disciplines = await getAllSportDisciplines()
  return <CategoriesSection disciplines={disciplines} />
}
