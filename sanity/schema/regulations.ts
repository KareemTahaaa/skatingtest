import { defineField, defineType } from "sanity"

export default defineType({
  name: "regulations",
  title: "اللوائح",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "اسم المستند (للاستخدام الداخلي)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // --- Hero Section ---
    defineField({
      name: "hero",
      title: "القسم الرئيسي (Hero)",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "title", title: "العنوان الرئيسي", type: "string", initialValue: "اللوائح والقوانين" }),
        defineField({ name: "subtitle", title: "العنوان الفرعي", type: "string", initialValue: "جميع القوانين واللوائح المنظمة لأشطة الاتحاد المصري للتزلج" }),
        defineField({ name: "backgroundImage", title: "صورة الخلفية", type: "image" }),
      ],
    }),

    // --- General Regulations ---
    defineField({
      name: "generalRegulations",
      title: "اللوائح العامة",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "title", title: "عنوان القسم", type: "string", initialValue: "اللوائح العامة" }),
        defineField({ name: "description", title: "وصف القسم", type: "text" }),
        defineField({
          name: "regulations",
          title: "قائمة اللوائح",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "العنوان", type: "string", validation: (Rule) => Rule.required() }),
                defineField({
                  name: "icon",
                  title: "الأيقونة",
                  type: "string",
                  description: "اسم الأيقونة من Lucide (مثال: Users, Shield, Award, Scale)",
                  initialValue: "FileText",
                }),
                defineField({
                  name: "items",
                  title: "البنود",
                  type: "array",
                  of: [{ type: "string" }],
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "icon" },
              },
            },
          ],
        }),
      ],
    }),

    // --- Discipline Regulations ---
    defineField({
      name: "disciplineRegulations",
      title: "لوائح التخصصات",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "title", title: "عنوان القسم", type: "string", initialValue: "لوائح التخصصات" }),
        defineField({ name: "description", title: "وصف القسم", type: "text" }),
        defineField({
          name: "disciplines",
          title: "قائمة التخصصات",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "id", title: "معرف فريد (ID)", type: "string", validation: (Rule) => Rule.required() }),
                defineField({ name: "title", title: "اسم التخصص", type: "string", validation: (Rule) => Rule.required() }),
                defineField({ name: "icon", title: "الأيقونة (Emoji)", type: "string", initialValue: "🏅" }),
                defineField({ name: "color", title: "فئة لون النص (Tailwind)", type: "string", initialValue: "text-red-600" }),
                defineField({ name: "bgColor", title: "فئة لون الخلفية (Tailwind)", type: "string", initialValue: "bg-red-50" }),
                defineField({ name: "borderColor", title: "فئة لون الحدود (Tailwind)", type: "string", initialValue: "border-red-200" }),
                defineField({
                  name: "regulations",
                  title: "فئات القواعد",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({ name: "category", title: "اسم الفئة (مثل: قواعد الأداء)", type: "string" }),
                        defineField({ name: "items", title: "القواعد", type: "array", of: [{ type: "string" }] }),
                      ],
                    },
                  ],
                }),
              ],
              preview: {
                select: { title: "title" },
              },
            },
          ],
        }),
      ],
    }),

    // --- Anti-Doping ---
    defineField({
      name: "antiDopingRegulations",
      title: "مكافحة المنشطات",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "sections",
          title: "الأقسام",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "العنوان", type: "string" }),
                defineField({ name: "icon", title: "الأيقونة (Shield, AlertTriangle, etc)", type: "string" }),
                defineField({ name: "content", title: "النقاط", type: "array", of: [{ type: "string" }] }),
                defineField({ name: "color", title: "لون النص", type: "string", initialValue: "text-gray-600" }),
                defineField({ name: "bgColor", title: "لون الخلفية", type: "string", initialValue: "bg-gray-50" }),
              ],
            },
          ],
        }),
        defineField({
          name: "importantNotice",
          title: "إشعار هام",
          type: "object",
          fields: [
            defineField({ name: "title", title: "العنوان", type: "string", initialValue: "تحذير هام" }),
            defineField({ name: "content", title: "المحتوى", type: "text" }),
            defineField({ name: "contactPhone", title: "الهاتف", type: "string" }),
            defineField({ name: "contactEmail", title: "البريد الإلكتروني", type: "string" }),
          ],
        }),
      ],
    }),

    // --- Upcoming Amendments ---
    defineField({
      name: "upcomingAmendments",
      title: "التعديلات القادمة",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "amendments",
          title: "قائمة التعديلات",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "العنوان", type: "string" }),
                defineField({ name: "description", title: "الوصف", type: "text" }),
                defineField({ name: "expectedDate", title: "التاريخ المتوقع", type: "date" }),
                defineField({ name: "status", title: "الحالة (مثل: قيد المراجعة)", type: "string" }),
                defineField({ name: "priority", title: "الأولوية (مثل: عالية)", type: "string" }),
                defineField({ name: "icon", title: "الأيقونة (Emoji)", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),

    // --- Documents ---
    defineField({
      name: "documents",
      title: "ملفات التحميل",
      type: "array",
      of: [
        {
          type: "object",
          title: "ملف",
          fields: [
            defineField({
              name: "title",
              title: "العنوان",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "الوصف",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "icon",
              title: "الأيقونة",
              type: "string",
              description: "رمز تعبيري (مثل: 📋, 🚫, ⛸️)",
              initialValue: "📄",
            }),
            defineField({
              name: "file",
              title: "الملف (PDF)",
              type: "file",
              options: {
                accept: ".pdf",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "size",
              title: "الحجم",
              type: "string",
              description: "مثال: 2.5 MB",
            }),
            defineField({
              name: "pages",
              title: "عدد الصفحات",
              type: "string",
              description: "مثال: 45 صفحة",
            }),
            defineField({
              name: "language",
              title: "اللغة",
              type: "string",
              options: {
                list: [
                  { title: "العربية", value: "العربية" },
                  { title: "English", value: "English" },
                  { title: "العربية / English", value: "العربية / English" },
                ],
              },
              initialValue: "العربية",
            }),
            defineField({
              name: "lastUpdated",
              title: "تاريخ التحديث",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),

    // --- Contacts ---
    defineField({
      name: "contacts",
      title: "بيانات التواصل",
      type: "array",
      options: { collapsible: true, collapsed: true },
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "العنوان", type: "string" }),
            defineField({ name: "description", title: "الوصف", type: "string" }),
            defineField({ name: "email", title: "البريد الإلكتروني", type: "string" }),
            defineField({ name: "phone", title: "الهاتف", type: "string" }),
            defineField({ name: "icon", title: "الأيقونة (من Lucide)", type: "string" }),
            defineField({ name: "color", title: "لون النص", type: "string", initialValue: "text-blue-600" }),
            defineField({ name: "bgColor", title: "لون الخلفية", type: "string", initialValue: "bg-blue-50" }),
          ],
        },
      ],
    }),
  ],
})
