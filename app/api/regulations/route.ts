import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const regulations = await client.fetch(
      groq`*[_type == "regulations"][0] {
        hero,
        generalRegulations,
        disciplineRegulations,
        antiDopingRegulations {
          sections[] {
            icon,
            title,
            content,
            color,
            bgColor
          },
          importantNotice {
            title,
            content,
            contactPhone,
            contactEmail
          }
        },
        upcomingAmendments {
          amendments[] {
            title,
            description,
            expectedDate,
            status,
            priority,
            icon
          },
          timelineSummary {
            quarters[] {
              label,
              title
            }
          },
          notificationText
        },
        documents,
        contacts,
        tableOfContents
      }`
    )

    return NextResponse.json(regulations)
  } catch (error) {
    console.error("Error fetching regulations:", error)
    return NextResponse.json({ error: "Failed to fetch regulations" }, { status: 500 })
  }
}
