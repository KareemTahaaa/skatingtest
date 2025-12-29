"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Regulation {
  category: string
  items: string[]
}

interface Discipline {
  id: string
  title: string
  icon: string
  color: string
  bgColor: string
  borderColor: string
  regulations: Regulation[]
}

interface DisciplineRegulationsProps {
  data?: {
    title: string
    description: string
    disciplines: Discipline[]
  }
}

// Removed defaultDisciplines (mock data)

export default function DisciplineRegulations({ data }: DisciplineRegulationsProps) {
  const [openDiscipline, setOpenDiscipline] = useState<string | null>(null)

  // If no data provided or empty disciplines, hide section
  if (!data || !data.disciplines || data.disciplines.length === 0) {
    return null
  }

  const disciplines = data.disciplines

  const toggleDiscipline = (disciplineId: string) => {
    setOpenDiscipline(openDiscipline === disciplineId ? null : disciplineId)
  }

  return (
    <section id="discipline-regulations" className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{data?.title || "لوائح التخصصات"}</h2>
        <p className="text-lg text-gray-600">
          {data?.description || "القوانين الخاصة بكل تخصص من تخصصات التزلج المختلفة"}
        </p>
      </div>

      <div className="space-y-4">
        {disciplines.map((discipline) => (
          <Card key={discipline.id} className={`${discipline.borderColor} border-2`}>
            <CardHeader
              className={`${discipline.bgColor} cursor-pointer`}
              onClick={() => toggleDiscipline(discipline.id)}
            >
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl ml-3">{discipline.icon}</span>
                  <span className={discipline.color}>{discipline.title}</span>
                </div>
                {openDiscipline === discipline.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </CardTitle>
            </CardHeader>
            {openDiscipline === discipline.id && (
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {discipline.regulations.map((regulation, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <div className={`w-3 h-3 rounded-full ${discipline.bgColor} mr-2`}></div>
                        {regulation.category}
                      </h4>
                      <ul className="space-y-2">
                        {regulation.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="bg-gray-300 rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
