import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Skating',

  projectId: '0ujc3v49',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton Documents
            S.listItem()
              .title('إعدادات الموقع')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

            S.divider(),

            S.listItem()
              .title('الصفحة الرئيسية')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),

            S.listItem()
              .title('صفحة من نحن')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),

            S.listItem()
              .title('صفحة اتصل بنا')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),

            S.listItem()
              .title('صفحة الفعاليات')
              .id('eventsPageSingleton')
              .child(S.document().schemaType('eventsPageSingleton').documentId('eventsPageSingleton')),

            S.listItem()
              .title('صفحة الأخبار')
              .id('newsPage')
              .child(S.document().schemaType('newsPage').documentId('newsPage')),

            S.listItem()
              .title('صفحة اللوائح')
              .id('regulationsPage')
              .child(S.document().schemaType('regulationsPage').documentId('regulationsPage')),

            S.listItem()
              .title('محتوى اللوائح')
              .id('regulations')
              .child(S.document().schemaType('regulations').documentId('regulations')),

            S.divider(),

            // Regular Document Types
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'siteSettings',
                  'homePage',
                  'about',
                  'contact',
                  'eventsPageSingleton',
                  'newsPage',
                  'regulationsPage',
                  'regulations',
                ].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
