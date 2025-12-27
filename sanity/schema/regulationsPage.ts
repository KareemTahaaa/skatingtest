import { defineField, defineType } from "sanity"

export default defineType({
  name: "regulationsPage",
  title: "صفحة اللوائح",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "العنوان التعريفي (SEO)",
      type: "string",
      description: "عنوان محركات البحث لصفحة اللوائح",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "الوصف التعريفي (SEO)",
      type: "text",
      description: "وصف محركات البحث لصفحة اللوائح",
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
