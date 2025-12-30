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
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "title", title: "العنوان الرئيسي", type: "string", initialValue: "اللوائح والقوانين" }),
        defineField({ name: "subtitle", title: "العنوان الفرعي", type: "string", initialValue: "جميع القوانين واللوائح المنظمة لأشطة الاتحاد المصري للتزلج" }),
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
  ],
})
