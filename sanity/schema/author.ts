import { defineField, defineType } from "sanity"

export default defineType({
  name: "author",
  title: "المؤلف",
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
      name: "image",
      title: "الصورة",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "السيرة الذاتية",
      type: "array",
      of: [
        {
          title: "فقرة",
          type: "block",
          styles: [{ title: "عادي", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
