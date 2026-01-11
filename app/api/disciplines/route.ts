import { NextResponse } from "next/server"
import { getAllSportDisciplines } from "@/lib/sanity.queries"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const disciplines = await getAllSportDisciplines()

    // Format the disciplines for the frontend
    const formattedDisciplines = disciplines.map((discipline: any) => ({
      title: discipline.title,
      slug: discipline.slug.current,
      icon: discipline.icon,
    }))

    return NextResponse.json(formattedDisciplines)
  } catch (error) {
    console.error("Error fetching disciplines:", error)
    return NextResponse.json({ error: "Failed to fetch disciplines" }, { status: 500 })
  }
}
