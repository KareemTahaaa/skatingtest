import type { SchemaTypeDefinition } from "sanity"
import blockContent from "./schema/blockContent"
import blockContent from "./schema/blockContent"
import author from "./schema/author"
import news from "./schema/news"
import event from "./schema/event"
import sportDiscipline from "./schema/sportDiscipline"
import quote from "./schema/quote"
import siteSettings from "./schema/siteSettings"
import about from "./schema/about"
import contact from "./schema/contact"
import newsPage from "./schema/newsPage"
import eventsPage from "./schema/eventsPage"
import homePage from "./schema/homePage"
import heroSlide from "./schema/heroSlide"
import regulations from "./schema/regulations"
import regulationsPage from "./schema/regulationsPage"
import result from "./schema/result"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
    event,
    sportDiscipline,
    author,
    blockContent,
    quote,
    siteSettings,
    about,
    contact,
    newsPage,
    eventsPage,
    homePage,
    heroSlide,
    regulations,
    regulationsPage,
    result,
  ],
}

export const schemaTypes = schema.types

