import { defineField, defineType } from "sanity"

export default defineType({
  name: "homePage",
  title: "الصفحة الرئيسية",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "العنوان التعريفي (SEO)",
      type: "string",
      description: "عنوان محركات البحث للصفحة الرئيسية",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "الوصف التعريفي (SEO)",
      type: "text",
      description: "وصف محركات البحث للصفحة الرئيسية",
    }),
  ],
})
