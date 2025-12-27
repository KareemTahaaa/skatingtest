import { defineField, defineType } from "sanity"

export default defineType({
  name: "siteSettings",
  title: "إعدادات الموقع",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "اسم الموقع",
      type: "string",
      description: "اسم الموقع الافتراضي المستخدم في العنوان",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "عنوان الموقع",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "وصف الموقع",
      type: "text",
      description: "وصف الموقع الافتراضي المستخدم في محركات البحث",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "وصف إضافي",
      type: "text",
    }),
    defineField({
      name: "favicon",
      title: "أيقونة الموقع (Favicon)",
      type: "image",
      description: "أيقونة الموقع التي تظهر في تبويب المتصفح (يفضل 32x32 أو 64x64 بكسل)",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contactInfo",
      title: "معلومات التواصل",
      type: "object",
      description: "معلومات الاتصال المشتركة في جميع أنحاء الموقع",
      fields: [
        {
          name: "address",
          title: "العنوان",
          type: "object",
          fields: [
            {
              name: "street",
              title: "الشارع",
              type: "string",
            },
            {
              name: "city",
              title: "المدينة",
              type: "string",
            },
            {
              name: "country",
              title: "الدولة",
              type: "string",
            },
            {
              name: "postalCode",
              title: "الرمز البريدي",
              type: "string",
            },
          ],
        },
        {
          name: "phone",
          title: "أرقام الهاتف",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "التسمية (مثلاً: واتساب، مكتب)",
                  type: "string",
                },
                {
                  name: "number",
                  title: "الرقم",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "email",
          title: "عناوين البريد الإلكتروني",
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
                  name: "address",
                  title: "البريد الإلكتروني",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "workingHours",
          title: "ساعات العمل",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "days",
                  title: "الأيام",
                  type: "string",
                },
                {
                  name: "hours",
                  title: "الساعات",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "socialMedia",
      title: "وسائل التواصل الاجتماعي",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "فيسبوك",
          type: "url",
        },
        {
          name: "instagram",
          title: "إنستغرام",
          type: "url",
        },
        {
          name: "twitter",
          title: "تويتر / X",
          type: "url",
        },
        {
          name: "linkedin",
          title: "لينكد إن",
          type: "url",
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "روابط التواصل (إضافية)",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "فيسبوك" },
        { name: "twitter", type: "url", title: "تويتر" },
        { name: "instagram", type: "url", title: "إنستغرام" },
        { name: "youtube", type: "url", title: "يوتيوب" },
      ],
    }),
    defineField({
      name: "logo",
      title: "الشعار",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})
