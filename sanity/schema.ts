import type { SchemaTypeDefinition } from "sanity"
import blockContent from "./schema/blockContent"

import news from "./schema/news"
import event from "./schema/event"
import sportDiscipline from "./schema/sportDiscipline"
import quote from "./schema/quote"
import siteSettings from "./schema/siteSettings"
import about from "./schema/about"
import contact from "./schema/contact"
import newsPage from "./schema/newsPage"
import homePage from "./schema/homePage"
import heroSlide from "./schema/heroSlide"
import regulations from "./schema/regulations"
import result from "./schema/result"
import socialMediaLinks from "./schema/socialMediaLinks"
import author from "./schema/author"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
    event,
    sportDiscipline,
    blockContent,
    quote,
    siteSettings,
    about,
    contact,
    newsPage,
    homePage,
    heroSlide,
    regulations,
    result,
    socialMediaLinks,
    author,
  ],
}

export const schemaTypes = schema.types

