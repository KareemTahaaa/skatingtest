import { Target, Eye, Heart } from "lucide-react"

interface SectionData {
  title?: string
  content?: string
}

interface MissionSectionProps {
  title?: string
  subtitle?: string
  mission?: SectionData
  vision?: SectionData
  values?: SectionData
}

export default function MissionSection({ title, subtitle, mission, vision, values }: MissionSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title || "رسالتنا ورؤيتنا"}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle || "نسعى لتطوير رياضة التزلج في مصر وإعداد جيل من الأبطال القادرين على المنافسة عالمياً"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center group">
            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors duration-300">
              <Target className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{mission?.title || "رسالتنا"}</h3>
            <p className="text-gray-600 leading-relaxed">
              {mission?.content || "تطوير وتنمية رياضة التزلج في مصر من خلال برامج تدريبية متقدمة وتنظيم بطولات محلية ودولية، مع الالتزام بأعلى معايير الجودة والأمان."}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center group">
            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors duration-300">
              <Eye className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{vision?.title || "رؤيتنا"}</h3>
            <p className="text-gray-600 leading-relaxed">
              {vision?.content || "أن نكون الاتحاد الرائد في المنطقة العربية لرياضة التزلج، وأن نحقق مراكز متقدمة في البطولات الدولية، مع نشر ثقافة التزلج في جميع أنحاء مصر."}
            </p>
          </div>

          {/* Values */}
          <div className="text-center group">
            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors duration-300">
              <Heart className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{values?.title || "قيمنا"}</h3>
            <p className="text-gray-600 leading-relaxed">
              {values?.content || "التميز، الشفافية، العدالة، والعمل الجماعي. نؤمن بأهمية تطوير المواهب الشابة ودعم الرياضيين في جميع مراحل مسيرتهم الرياضية."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
