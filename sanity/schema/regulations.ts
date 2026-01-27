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
        defineField({
          name: "importantNotice",
          title: "ملاحظة مهمة (أسفل القسم)",
          type: "object",
          fields: [
            defineField({ name: "title", title: "عنوان الملاحظة", type: "string", initialValue: "ملاحظة مهمة" }),
            defineField({ name: "content", title: "محتوى الملاحظة", type: "text" }),
          ]
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
        defineField({ name: "title", title: "عنوان القسم", type: "string", initialValue: "لوائح مكافحة المنشطات" }),
        defineField({ name: "description", title: "وصف القسم", type: "text" }),
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
        defineField({ name: "title", title: "عنوان القسم", type: "string", initialValue: "التعديلات والتحديثات القادمة" }),
        defineField({ name: "description", title: "وصف القسم", type: "text" }),
        defineField({ name: "timelineTitle", title: "عنوان الجدول الزمني", type: "string", initialValue: "الجدول الزمني للتعديلات" }),
        defineField({ name: "notificationTitle", title: "عنوان الإشعار", type: "string", initialValue: "إشعار هام" }),
        defineField({ name: "notificationText", title: "نص الإشعار", type: "text" }),
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

    // --- Documents (Renamed to downloadsSection for object structure) ---
    defineField({
      name: "downloadsSection",
      title: "قسم التحميلات",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "title", title: "عنوان القسم", type: "string", initialValue: "تحميل المستندات" }),
        defineField({ name: "description", title: "وصف القسم", type: "text" }),
        defineField({ name: "noteTitle", title: "عنوان الملاحظة", type: "string", initialValue: "ملاحظة هامة" }),
        defineField({ name: "noteContent", title: "محتوى الملاحظة", type: "text" }),
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
                  name: "file",
                  title: "الملف (PDF)",
                  type: "file",
                  options: {
                    accept: ".pdf",
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: "title",
                },
              },
            },
          ],
        }),
      ]
    }),

    // --- Contacts (Renamed to contactsSection) ---
    defineField({
      name: "contactsSection",
      title: "قسم التواصل",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "title", title: "عنوان القسم", type: "string", initialValue: "للتواصل والاستفسارات" }),
        defineField({ name: "description", title: "وصف القسم", type: "text" }),
        defineField({
          name: "items",
          title: "جهات الاتصال",
          type: "array",
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
      ]
    }),
  ],
})
