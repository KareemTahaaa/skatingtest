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
            initialValue: "اللوائح والقوانين",
        }),
        defineField({
            name: "heroSubtitle",
            title: "العنوان الفرعي للقسم الرئيسي",
            type: "string",
            initialValue: "جميع القوانين واللوائح المنظمة لأنشطة الاتحاد المصري للتزلج",
        }),
        defineField({
            name: "heroImage",
            title: "صورة الخلفية الرئيسية",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})
