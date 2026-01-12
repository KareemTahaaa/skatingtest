import { defineField, defineType } from "sanity"

export default defineType({
  name: "newsPage",
  title: "صفحة الأخبار",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "العنوان التعريفي (SEO)",
      type: "string",
      description: "عنوان محركات البحث لصفحة الأخبار",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "الوصف التعريفي (SEO)",
      type: "text",
      description: "وصف محركات البحث لصفحة الأخبار",
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
      name: "backgroundImage",
      title: "صورة الخلفية",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})
