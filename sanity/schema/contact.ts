import { defineField, defineType } from "sanity"

export default defineType({
  name: "contact",
  title: "صفحة 'اتصل بنا'",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "العنوان التعريفي (SEO)",
      type: "string",
      description: "عنوان محركات البحث لصفحة 'اتصل بنا'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "الوصف التعريفي (SEO)",
      type: "text",
      description: "وصف محركات البحث لصفحة 'اتصل بنا'",
    }),
    defineField({
      name: "heroTitle",
      title: "عنوان القسم الرئيسي",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "وصف القسم الرئيسي",
      type: "text",
    }),
    defineField({
      name: "phone",
      title: "رقم الهاتف",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "البريد الإلكتروني",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "العنوان",
      type: "text",
    }),
    defineField({
      name: "whatsapp",
      title: "رقم واتساب",
      type: "string",
    }),
    defineField({
      name: "hero",
      title: "قسم الصورة الرئيسية",
      type: "object",
      fields: [
        {
          name: "title",
          title: "العنوان",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "العنوان الفرعي",
          type: "text",
          rows: 2,
        },
        {
          name: "backgroundImage",
          title: "صورة الخلفية",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "contactInfo",
      title: "معلومات التواصل",
      type: "object",
      fields: [
        {
          name: "title",
          title: "عنوان القسم",
          type: "string",
        },
        {
          name: "description",
          title: "وصف القسم",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "map",
      title: "معلومات الخريطة",
      type: "object",
      fields: [
        {
          name: "latitude",
          title: "خط العرض",
          type: "number",
        },
        {
          name: "longitude",
          title: "خط الطول",
          type: "number",
        },
        {
          name: "zoom",
          title: "مستوى التكبير",
          type: "number",
          initialValue: 15,
        },
      ],
    }),
    defineField({
      name: "form",
      title: "إعدادات نموذج التواصل",
      type: "object",
      fields: [
        {
          name: "title",
          title: "عنوان النموذج",
          type: "string",
        },
        {
          name: "description",
          title: "وصف النموذج",
          type: "text",
        },
        {
          name: "submitButtonText",
          title: "نص زر الإرسال",
          type: "string",
        },
        {
          name: "successMessage",
          title: "رسالة النجاح",
          type: "text",
        },
        {
          name: "errorMessage",
          title: "رسالة الخطأ",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "قسم الأسئلة الشائعة",
      type: "object",
      fields: [
        {
          name: "title",
          title: "عنوان القسم",
          type: "string",
        },
        {
          name: "description",
          title: "وصف القسم",
          type: "text",
        },
        {
          name: "questions",
          title: "الأسئلة",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "question",
                  title: "السؤال",
                  type: "string",
                },
                {
                  name: "answer",
                  title: "الإجابة",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
