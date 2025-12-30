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

const defaultDisciplines = [
  {
    id: "artistic",
    title: "التزلج الفني",

    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    regulations: [
      {
        category: "قواعد الأداء",
        items: [
          "مدة الأداء: 2-4 دقائق حسب الفئة العمرية",
          "الموسيقى: يجب أن تكون مناسبة وخالية من الكلمات البذيئة",
          "الزي: يجب أن يكون محتشماً ومناسباً للرياضة",
          "العناصر الإجبارية: حسب مستوى المتسابق",
        ],
      },
      {
        category: "نظام التحكيم",
        items: [
          "لجنة تحكيم مكونة من 5-9 حكام",
          "تقييم العناصر الفنية والأداء الفني",
          "خصم نقاط للأخطاء والسقطات",
          "إعلان النتائج فور انتهاء المسابقة",
        ],
      },
    ],
  },
  {
    id: "speed",
    title: "سباقات السرعة",

    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    regulations: [
      {
        category: "قواعد السباق",
        items: [
          "المسافات: 100م، 300م، 500م، 1000م، 1500م",
          "البداية: بداية واقفة أو من الحركة",
          "المسارات: تحديد المسارات بالقرعة",
          "التجاوز: قواعد محددة للتجاوز الآمن",
        ],
      },
      {
        category: "المعدات المطلوبة",
        items: ["أحذية تزلج سرعة معتمدة", "خوذة حماية إجبارية", "ملابس انسيابية مناسبة", "واقيات الركبة والكوع"],
      },
    ],
  },
  {
    id: "hockey",
    title: "هوكي التزلج",

    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    regulations: [
      {
        category: "قواعد اللعب",
        items: [
          "مدة المباراة: 3 أشواط × 15 دقيقة",
          "عدد اللاعبين: 6 لاعبين لكل فريق",
          "التبديلات: مسموحة أثناء اللعب",
          "الحكام: حكم رئيسي وحكم مساعد",
        ],
      },
      {
        category: "المخالفات والعقوبات",
        items: ["اللعب الخشن: إنذار أو طرد", "استخدام العصا بطريقة خطيرة", "عرقلة اللاعبين", "عدم احترام الحكام"],
      },
    ],
  },
  {
    id: "freestyle",
    title: "التزلج الحر",

    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    regulations: [
      {
        category: "فئات المسابقات",
        items: ["الفريستايل الكلاسيكي", "الباتل (المعارك)", "السلالوم الحر", "القفز والحركات الهوائية"],
      },
      {
        category: "معايير التقييم",
        items: ["الإبداع والأصالة: 30%", "الصعوبة الفنية: 25%", "التنفيذ والدقة: 25%", "التفاعل مع الموسيقى: 20%"],
      },
    ],
  },
  {
    id: "skateboard",
    title: "التزلج على اللوح",

    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    regulations: [
      {
        category: "أنواع المسابقات",
        items: [
          "الشارع (Street): استخدام العوائق الحضرية",
          "الحديقة (Park): في المنحدرات والأوعية",
          "الفيرت (Vert): على المنحدرات العمودية",
          "الفريستايل: حركات حرة ومبتكرة",
        ],
      },
      {
        category: "معدات الأمان",
        items: ["خوذة حماية معتمدة", "واقيات الركبة والكوع", "واقيات المعصم", "أحذية مناسبة للتزلج"],
      },
    ],
  },
]

export default function DisciplineRegulations({ data }: DisciplineRegulationsProps) {
  const [openDiscipline, setOpenDiscipline] = useState<string | null>("artistic")
  const disciplines = data?.disciplines || defaultDisciplines

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
