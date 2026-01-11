import { defineField, defineType } from "sanity"

export default defineType({
    name: "socialMediaLinks",
    title: "روابط التواصل الاجتماعي",
    type: "document",
    fields: [
        defineField({
            name: "facebook",
            title: "فيسبوك",
            type: "url",
        }),
        defineField({
            name: "instagram",
            title: "إنستغرام",
            type: "url",
        }),
        defineField({
            name: "twitter",
            title: "تويتر / X",
            type: "url",
        }),
        defineField({
            name: "linkedin",
            title: "لينكد إن",
            type: "url",
        }),
    ],
})
