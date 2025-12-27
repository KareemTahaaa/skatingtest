import { defineField, defineType } from "sanity"

export default defineType({
  name: "sportDiscipline",
  title: "التخصص الرياضي",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "الاسم",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "الرابط البديل",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "الأيقونة",
      type: "string",
      description: "أدخل رمز تعبيري (emoji) أو رمز نصي",
    }),
    defineField({
      name: "description",
      title: "الوصف",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "الصورة",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "الترتيب",
      type: "number",
      description: "ترتيب العرض",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
