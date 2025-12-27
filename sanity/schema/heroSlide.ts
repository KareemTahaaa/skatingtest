import { defineField, defineType } from "sanity"

export default defineType({
  name: "heroSlide",
  title: "شريحة العرض الرئيسية",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "العنوان",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "العنوان الفرعي",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "الصورة",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "نص زر الإجراء",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "رابط زر الإجراء",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "الترتيب",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
    },
  },
})
