"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Shield, AlertTriangle, Calendar, Download, Phone } from "lucide-react"

interface Section {
  id: string
  title: string
  icon: string
}

interface RegulationsTableOfContentsProps {
  sections?: Section[]
}

const defaultSections = [
  { id: "downloads", title: "التحميلات", icon: "Download" },
]

const iconMap: { [key: string]: any } = {
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Calendar,
  Download,
  Phone,
}

export default function RegulationsTableOfContents({ sections }: RegulationsTableOfContentsProps) {
  const tocSections = sections || defaultSections

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl">جدول المحتويات</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2">
          {tocSections.map((section) => {
            const Icon = iconMap[section.icon] || FileText
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full flex items-center text-right p-3 rounded-lg hover:bg-red-50 transition-colors group"
              >
                <Icon className="h-5 w-5 text-red-600 ml-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-red-600 transition-colors">{section.title}</span>
              </button>
            )
          })}
        </nav>
      </CardContent>
    </Card>
  )
}
