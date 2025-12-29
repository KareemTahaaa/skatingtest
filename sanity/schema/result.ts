import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'result',
    title: 'النتائج',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'العنوان',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'الوصف',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'category',
            title: 'الفئة',
            type: 'string',
            options: {
                list: [
                    { title: 'بطولات', value: 'championships' },
                    { title: 'فعاليات', value: 'events' },
                    { title: 'تصفيات', value: 'qualifiers' },
                    { title: 'أخرى', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'event',
            title: 'الفعالية',
            type: 'reference',
            to: [{ type: 'event' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'file',
            title: 'ملف PDF',
            type: 'file',
            options: {
                accept: '.pdf',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'تاريخ النشر',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            publishedAt: 'publishedAt',
        },
        prepare({ title, category, publishedAt }) {
            const categoryLabels: Record<string, string> = {
                championships: 'بطولات',
                events: 'فعاليات',
                qualifiers: 'تصفيات',
                other: 'أخرى',
            }
            return {
                title: title,
                subtitle: `${categoryLabels[category] || category} - ${new Date(publishedAt).toLocaleDateString('ar-EG')}`,
            }
        },
    },
    orderings: [
        {
            title: 'تاريخ النشر، الأحدث أولاً',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
})
