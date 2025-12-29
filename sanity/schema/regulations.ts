import { defineField, defineType } from "sanity"

export default defineType({
  name: "regulations",
  title: "اللوائح",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "اسم المستند (للاستخدام الداخلي)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hero",
      title: "القسم الرئيسي (Hero)",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "title", title: "العنوان الرئيسي", type: "string", initialValue: "اللوائح والقوانين" }),
        defineField({ name: "subtitle", title: "العنوان الفرعي", type: "string", initialValue: "جميع القوانين واللوائح المنظمة لأنشطة الاتحاد المصري للتزلج" }),
        defineField({ name: "backgroundImage", title: "صورة الخلفية", type: "image" }),
      ],
    }),

    // --- Documents ---
    defineField({
      name: "documents",
      title: "ملفات التحميل",
      type: "array",
      of: [
        {
          type: "object",
          title: "ملف",
          fields: [
            defineField({
              name: "title",
              title: "العنوان",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "file",
              title: "الملف (PDF)",
              type: "file",
              options: {
                accept: ".pdf",
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    }),

    // --- Contacts ---
    defineField({
      name: "contacts",
      title: "بيانات التواصل",
      type: "array",
      options: { collapsible: true, collapsed: true },
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "العنوان", type: "string" }),
            defineField({ name: "description", title: "الوصف", type: "string" }),
            defineField({ name: "email", title: "البريد الإلكتروني", type: "string" }),
            defineField({ name: "phone", title: "الهاتف", type: "string" }),
            defineField({ name: "icon", title: "الأيقونة (من Lucide)", type: "string" }),
            defineField({ name: "color", title: "لون النص", type: "string", initialValue: "text-blue-600" }),
            defineField({ name: "bgColor", title: "لون الخلفية", type: "string", initialValue: "bg-blue-50" }),
          ],
        },
      ],
    }),
  ],
})
