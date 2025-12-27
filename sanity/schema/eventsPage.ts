import { defineField, defineType } from "sanity"

export default defineType({
  name: "eventsPage",
  title: "صفحة الفعاليات",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "العنوان التعريفي (SEO)",
      type: "string",
      description: "عنوان محركات البحث لصفحة الفعاليات",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "الوصف التعريفي (SEO)",
      type: "text",
      description: "وصف محركات البحث لصفحة الفعاليات",
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
  ],
})
