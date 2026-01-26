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
      name: "backgroundImage",
      title: "صورة الخلفية",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "missionSectionTitle",
      title: "عنوان قسم الرسالة والرؤية",
      type: "string",
    }),
    defineField({
      name: "missionSectionSubtitle",
      title: "وصف قسم الرسالة والرؤية",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "missionTitle",
      title: "عنوان المهمة",
      type: "string",
    }),
    defineField({
      name: "missionContent",
      title: "محتوى المهمة",
      type: "text", // Changed to text to match UI usage
      rows: 4,
    }),
    defineField({
      name: "visionTitle",
      title: "عنوان الرؤية",
      type: "string",
    }),
    defineField({
      name: "visionContent",
      title: "محتوى الرؤية",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "valuesTitle",
      title: "عنوان القيم",
      type: "string",
    }),
    defineField({
      name: "valuesContent",
      title: "محتوى القيم",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "historyTitle",
      title: "عنوان التاريخ",
      type: "string",
    }),
    defineField({
      name: "historySubtitle",
      title: "وصف التاريخ",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "historyContent",
      title: "محتوى التاريخ (تفاصيل إضافية)",
      type: "blockContent",
    }),
    defineField({
      name: "historyImage",
      title: "صورة قسم التاريخ",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "milestones",
      title: "المحطات التاريخية (Timeline)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "year", title: "السنة", type: "string" },
            { name: "title", title: "العنوان", type: "string" },
            { name: "description", title: "الوصف", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "statsTitle",
      title: "عنوان الإحصائيات",
      type: "string",
    }),
    defineField({
      name: "statsSubtitle",
      title: "وصف الإحصائيات",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "stats",
      title: "أرقام الإحصائيات",
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
              description: "اسم الأيقونة (Users, Trophy, Calendar, MapPin)",
            },
            {
              name: "description",
              title: "الوصف",
              type: "string"
            }
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
          name: "subtitle",
          title: "الوصف",
          type: "text",
          rows: 3,
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
                  name: "email",
                  title: "البريد الإلكتروني",
                  type: "string"
                },
                {
                  name: "phone",
                  title: "رقم الهاتف",
                  type: "string"
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
          name: "subtitle",
          title: "الوصف",
          type: "text",
          rows: 3,
        },
        {
          name: "image",
          title: "صورة قسم الإنجازات",
          type: "image",
          options: {
            hotspot: true,
          },
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
                  name: "year",
                  title: "السنة",
                  type: "string"
                },
                {
                  name: "type",
                  title: "النوع (دولي/محلي)",
                  type: "string"
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
