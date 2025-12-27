import { defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "صفحة 'من نحن'",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "العنوان التعريفي (SEO)",
      type: "string",
      description: "عنوان محركات البحث لصفحة 'من نحن'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "الوصف التعريفي (SEO)",
      type: "text",
      description: "وصف محركات البحث لصفحة 'من نحن'",
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
      name: "missionTitle",
      title: "عنوان المهمة",
      type: "string",
    }),
    defineField({
      name: "missionContent",
      title: "محتوى المهمة",
      type: "blockContent",
    }),
    defineField({
      name: "historyTitle",
      title: "عنوان التاريخ",
      type: "string",
    }),
    defineField({
      name: "historyContent",
      title: "محتوى التاريخ",
      type: "blockContent",
    }),
    defineField({
      name: "stats",
      title: "قسم الإحصائيات",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "التسمية",
              type: "string",
            },
            {
              name: "value",
              title: "القيمة",
              type: "string",
            },
            {
              name: "icon",
              title: "الأيقونة",
              type: "string",
              description: "اسم الأيقونة من مكتبة Lucide",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "leadership",
      title: "قسم القيادة",
      type: "object",
      fields: [
        {
          name: "title",
          title: "العنوان",
          type: "string",
        },
        {
          name: "members",
          title: "أعضاء الفريق",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "الاسم",
                  type: "string",
                },
                {
                  name: "position",
                  title: "المنصب",
                  type: "string",
                },
                {
                  name: "bio",
                  title: "السيرة الذاتية",
                  type: "text",
                },
                {
                  name: "image",
                  title: "صورة الملف الشخصي",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "achievements",
      title: "قسم الإنجازات",
      type: "object",
      fields: [
        {
          name: "title",
          title: "العنوان",
          type: "string",
        },
        {
          name: "items",
          title: "الإنجازات",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "العنوان",
                  type: "string",
                },
                {
                  name: "description",
                  title: "الوصف",
                  type: "text",
                },
                {
                  name: "image",
                  title: "الصورة",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
