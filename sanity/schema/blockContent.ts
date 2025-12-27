import { defineType, defineArrayMember } from "sanity"

export default defineType({
  title: "محتوى الفقرات",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "فقرة",
      type: "block",
      styles: [
        { title: "عادي", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "اقتباس", value: "blockquote" },
      ],
      lists: [
        { title: "نقطي", value: "bullet" },
        { title: "رقمي", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "عريض", value: "strong" },
          { title: "مائل", value: "em" },
        ],
        annotations: [
          {
            title: "رابط",
            name: "link",
            type: "object",
            fields: [
              {
                title: "عنوان URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
  ],
})
