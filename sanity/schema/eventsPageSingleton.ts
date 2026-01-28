import { defineField, defineType } from "sanity"

export default defineType({
    name: "eventsPageSingleton",
    title: "صفحة الفعاليات",
    type: "document",
    fields: [
        defineField({
            name: "metaTitle",
            title: "العنوان التعريفي (SEO)",
            type: "string",
            description: "عنوان محركات البحث لصفحة الفعاليات",
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
            initialValue: "الفعاليات",
        }),
        defineField({
            name: "heroDescription",
            title: "وصف القسم الرئيسي",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "backgroundImage",
            title: "صورة الخلفية الرئيسية",
            type: "image",
            description: "صورة خلفية القسم الرئيسي (Hero) في صفحة الفعاليات",
            options: {
                hotspot: true,
            },
        }),
    ],
})
