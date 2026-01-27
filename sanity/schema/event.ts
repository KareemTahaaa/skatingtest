import { defineField, defineType } from "sanity"

export default defineType({
  name: "event",
  title: "الفعالية",
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
      title: "الرابط البديل",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "مقتطف",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "mainImage",
      title: "الصورة الرئيسية",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "startDate",
      title: "تاريخ البدء",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "تاريخ الانتهاء",
      type: "datetime",
    }),
    defineField({
      name: "location",
      title: "الموقع",
      type: "string",
    }),
    defineField({
      name: "discipline",
      title: "التخصص الرياضي",
      type: "reference",
      to: { type: "sportDiscipline" },
    }),
    defineField({
      name: "description",
      title: "الوصف التفصيلي (لصفحة الفعالية)",
      type: "blockContent",
    }),
    defineField({
      name: "body",
      title: "المحتوى (قديم - سيتم استبداله بالوصف)",
      type: "blockContent",
      hidden: true,
    }),
    defineField({
      name: "registrationLink",
      title: "رابط التسجيل",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      date: "startDate",
    },
    prepare(selection) {
      const { title, media, date } = selection
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString("ar-EG") : "No date",
      }
    },
  },
})
