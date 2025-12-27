import { defineField, defineType } from "sanity"

export default defineType({
  name: "quote",
  title: "اقتباس",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "نص الاقتباس",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "القائل",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "المنصب/اللقب",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "مميز",
      type: "boolean",
      description: "عرض هذا الاقتباس في الصفحة الرئيسية",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "text",
    },
  },
})
