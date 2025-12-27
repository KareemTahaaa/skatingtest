"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "كيف يمكنني التسجيل في الاتحاد المصري للتزلج؟",
      answer:
        "يمكنك التسجيل من خلال زيارة مقر الاتحاد أو التواصل مع قسم التسجيل والعضوية على الرقم +20 100 123 4567. ستحتاج إلى إحضار صورة من البطاقة الشخصية وشهادة طبية تثبت اللياقة البدنية.",
    },
    {
      question: "ما هي شروط المشاركة في البطولات؟",
      answer:
        "يجب أن يكون المتسابق مسجلاً في الاتحاد ولديه عضوية سارية. كما يجب تقديم شهادة طبية حديثة ودفع رسوم المشاركة قبل الموعد المحدد للبطولة.",
    },
    {
      question: "هل توجد برامج تدريبية للمبتدئين؟",
      answer:
        "نعم، يوفر الاتحاد برامج تدريبية متنوعة للمبتدئين في جميع تخصصات التزلج. يمكنك التواصل مع قسم التدريب والأكاديميات للحصول على مزيد من المعلومات.",
    },
    {
      question: "كيف يمكنني الحصول على رخصة تدريب؟",
      answer:
        "للحصول على رخصة تدريب، يجب اجتياز دورة تدريبية معتمدة من الاتحاد واجتياز الامتحان النظري والعملي. تواصل مع القسم الفني للحصول على تفاصيل الدورات القادمة.",
    },
    {
      question: "ما هي رسوم العضوية السنوية؟",
      answer:
        "تختلف رسوم العضوية حسب الفئة العمرية ونوع العضوية. للحصول على تفاصيل الرسوم الحالية، يرجى التواصل مع قسم التسجيل والعضوية.",
    },
    {
      question: "كيف يمكنني تقديم شكوى أو اقتراح؟",
      answer:
        "يمكنك تقديم الشكاوى والاقتراحات من خلال النموذج الإلكتروني في هذه الصفحة أو التواصل مباشرة مع قسم الشكاوى والاقتراحات على البريد الإلكتروني complaints@ensf.com.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
        <p className="text-lg text-gray-600">إجابات على أكثر الأسئلة شيوعاً</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="h-6 w-6 ml-2 text-red-600" />
            الأسئلة والأجوبة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-3 text-gray-600 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-red-800 mb-2">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-red-700 mb-4">لا تتردد في التواصل معنا مباشرة وسنكون سعداء لمساعدتك</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201001234567"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                اتصل بنا الآن
              </a>
              <a
                href="mailto:info@ensf.com"
                className="bg-white text-red-600 border border-red-600 px-6 py-2 rounded-md hover:bg-red-50 transition-colors duration-200"
              >
                أرسل بريد إلكتروني
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
