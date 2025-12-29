import { defineField, defineType } from "sanity"

export default defineType({
  name: "regulations",
  title: "اللوائح",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "العنوان",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "الرابط",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "الفئة",
      type: "string",
      options: {
        list: [
          { title: "عامة", value: "general" },
          { title: "تخصصات", value: "discipline" },
          { title: "مكافحة المنشطات", value: "anti-doping" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "المحتوى",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "آخر تحديث",
      type: "datetime",
    }),
    defineField({
      name: "pdfFile",
      title: "ملف PDF",
      type: "file",
    }),
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
              name: "description",
              title: "الوصف",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "icon",
              title: "الأيقونة",
              type: "string",
              description: "رمز تعبيري (مثل: 📋, 🚫, ⛸️)",
              initialValue: "📄",
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
            defineField({
              name: "size",
              title: "الحجم",
              type: "string",
              description: "مثال: 2.5 MB",
            }),
            defineField({
              name: "pages",
              title: "عدد الصفحات",
              type: "string",
              description: "مثال: 45 صفحة",
            }),
            defineField({
              name: "language",
              title: "اللغة",
              type: "string",
              options: {
                list: [
                  { title: "العربية", value: "العربية" },
                  { title: "English", value: "English" },
                  { title: "العربية / English", value: "العربية / English" },
                ],
              },
              initialValue: "العربية",
            }),
            defineField({
              name: "lastUpdated",
              title: "تاريخ التحديث",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),
  ],
})
