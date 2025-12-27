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
  ],
})
