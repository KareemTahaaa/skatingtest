import { client, useMockData } from "./sanity.client"
import { mockDisciplines, mockEvents, mockNews, mockHeroSlides, mockSiteSettings, mockQuote, mockRegulations } from "./mock-data"
import type { PortableTextBlock } from "@portabletext/types"

// Helper function to convert Portable Text to plain string
function portableTextToPlainText(blocks: PortableTextBlock[] | string | undefined): string {
  if (!blocks) return ""
  if (typeof blocks === "string") return blocks
  if (!Array.isArray(blocks)) return ""

  return blocks
    .map((block: any) => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map((child: any) => child.text).join("")
    })
    .join("\n\n")
}

// Arabic name mapping for disciplines (fallback when Sanity name is null)
const disciplineArabicNames: Record<string, string> = {
  "rink_hockey": "هوكي التزلج",
  "skateboarding": "التزلج على الألواح",
  "artistic": "التزلج الفني",
  "inline_freestyle": "انلاين فريستايل",
  "sbaqat-alsrah": "سباقات السرعة",
  "figure-skating": "التزلج الفني",
  "ice-hockey": "هوكي الجليد",
  "speed-racing": "سباقات السرعة",
}

// Sport Disciplines
export async function getAllSportDisciplines() {
  if (useMockData()) {
    return mockDisciplines
  }

  try {
    const disciplines = await client.fetch(
      `*[_type == "sportDiscipline"] | order(order asc) {
        _id,
        name,
        slug,
        icon,
        description,
        image,
        order
      }`,
    )

    console.log("Raw disciplines from Sanity:", JSON.stringify(disciplines, null, 2))

    const processedDisciplines = (disciplines || []).map((discipline: any) => {
      // Priority: 1) Sanity name, 2) Arabic mapping, 3) Slug
      const slugKey = discipline.slug?.current || ""
      const name = discipline.name || disciplineArabicNames[slugKey] || slugKey || "Unnamed Discipline"

      if (!discipline.name && disciplineArabicNames[slugKey]) {
        console.info(`Using Arabic mapping for discipline: ${slugKey} → ${disciplineArabicNames[slugKey]}`)
      } else if (!discipline.name) {
        console.warn(`Discipline ${discipline._id} (${slugKey}) is missing a 'name' field in Sanity and has no Arabic mapping. Using slug as fallback.`)
      }

      return {
        ...discipline,
        name, // Override with Arabic name or fallback
        description:
          typeof discipline.description === "string"
            ? discipline.description
            : portableTextToPlainText(discipline.description),
      }
    })

    return processedDisciplines
  } catch (error) {
    console.error("Error fetching disciplines:", error)
    return mockDisciplines
  }
}

export async function getSportDisciplineBySlug(slug: string) {
  if (useMockData()) {
    return mockDisciplines.find((d) => d.slug.current === slug)
  }

  try {
    const discipline = await client.fetch(
      `*[_type == "sportDiscipline" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        icon,
        description,
        image,
        order
      }`,
      { slug },
    )

    if (!discipline) return null

    return {
      ...discipline,
      description:
        typeof discipline.description === "string"
          ? discipline.description
          : portableTextToPlainText(discipline.description),
    }
  } catch (error) {
    console.error("Error fetching discipline:", error)
    return mockDisciplines.find((d) => d.slug.current === slug)
  }
}

// News
export async function getAllNews() {
  if (useMockData()) {
    return mockNews
  }

  try {
    const news = await client.fetch(
      `*[_type == "news"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        categories[]->{
          _id,
          title,
          slug
        },
        author->{
          _id,
          name,
          image
        },
        publishedAt,
        body
      }`,
    )

    return (news || []).map((article: any) => ({
      ...article,
      excerpt: typeof article.excerpt === "string" ? article.excerpt : portableTextToPlainText(article.excerpt),
    }))
  } catch (error) {
    console.error("Error fetching news:", error)
    return mockNews
  }
}

export async function getNewsBySlug(slug: string) {
  if (useMockData()) {
    return mockNews.find((n) => n.slug.current === slug)
  }

  try {
    return await client.fetch(
      `*[_type == "news" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        categories[]->{
          _id,
          title,
          slug
        },
        author->{
          _id,
          name,
          image {
            asset->{
              _id,
              url
            }
          }
        },
        publishedAt,
        body
      }`,
      { slug },
    )
  } catch (error) {
    console.error("Error fetching news by slug:", error)
    return mockNews.find((n) => n.slug.current === slug)
  }
}

export async function getNewsByDiscipline(disciplineId: string) {
  if (useMockData()) {
    return mockNews.slice(0, 3)
  }

  try {
    const news = await client.fetch(
      `*[_type == "news" && references($disciplineId)] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        publishedAt
      }`,
      { disciplineId },
    )

    return news.map((article: any) => ({
      ...article,
      excerpt: typeof article.excerpt === "string" ? article.excerpt : portableTextToPlainText(article.excerpt),
    }))
  } catch (error) {
    console.error("Error fetching news by discipline:", error)
    return mockNews.slice(0, 3)
  }
}

// Events
export async function getAllEvents() {
  if (useMockData()) {
    return mockEvents
  }

  try {
    const events = await client.fetch(
      `*[_type == "event"] | order(startDate desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        startDate,
        endDate,
        location,
        discipline->{
          _id,
          name,
          slug
        }
      }`,
    )

    return (events || []).map((event: any) => ({
      ...event,
      excerpt: typeof event.excerpt === "string" ? event.excerpt : portableTextToPlainText(event.excerpt),
    }))
  } catch (error) {
    console.error("Error fetching events:", error)
    return mockEvents
  }
}

export async function getEventBySlug(slug: string) {
  if (useMockData()) {
    return mockEvents.find((e) => e.slug.current === slug)
  }

  try {
    return await client.fetch(
      `*[_type == "event" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        startDate,
        endDate,
        location,
        discipline->{
          _id,
          name,
          slug
        },
        descriptionHeading,
        description,
        body,
        registrationLink
      }`,
      { slug },
    )
  } catch (error) {
    console.error("Error fetching event by slug:", error)
    return mockEvents.find((e) => e.slug.current === slug)
  }
}

export async function getEventsByDiscipline(disciplineId: string) {
  if (useMockData()) {
    return mockEvents.slice(0, 3)
  }

  try {
    const events = await client.fetch(
      `*[_type == "event" && discipline._ref == $disciplineId] | order(startDate desc)[0...3] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        startDate,
        endDate,
        location
      }`,
      { disciplineId },
    )

    return events.map((event: any) => ({
      ...event,
      excerpt: typeof event.excerpt === "string" ? event.excerpt : portableTextToPlainText(event.excerpt),
    }))
  } catch (error) {
    console.error("Error fetching events by discipline:", error)
    return mockEvents.slice(0, 3)
  }
}

// Hero Slides
export async function getHeroSlides() {
  // if (useMockData()) {
  //   return mockHeroSlides
  // }

  try {
    const slides = await client.fetch(
      `*[_type == "heroSlide"] | order(order asc) {
        _id,
        title,
        subtitle,
        image {
          asset->{
            _id,
            url
          }
        },
        ctaText,
        ctaLink,
        order
      }`,
    )
    return slides && slides.length > 0 ? slides : mockHeroSlides
  } catch (error) {
    console.error("Error fetching hero slides:", error)
    return mockHeroSlides
  }
}

// Quotes
export async function getActiveQuote() {
  // if (useMockData()) {
  //   return mockQuote
  // }

  try {
    const quote = await client.fetch(
      `*[_type == "quote" && featured == true][0] {
        _id,
        text,
        author,
        position
      }`,
    )
    return quote || mockQuote
  } catch (error) {
    console.error("Error fetching featured quote:", error)
    return mockQuote
  }
}

// Site Settings
export async function getSiteSettings() {
  // if (useMockData()) {
  //   return mockSiteSettings
  // }

  try {
    const settings = await client.fetch(
      `*[_type == "siteSettings"][0] {
        siteName,
        siteDescription,
        contactInfo {
          address,
          phone,
          email,
          workingHours,
          whatsapp,
          websiteInfo
        },
        logo {
          asset->{
            _id,
            url
          }
        },
        favicon {
          asset->{
            _id,
            url
          }
        }
      }`,
    )

    return (
      settings || {
        siteName: "الاتحاد المصري للتزلج",
        siteDescription: "الموقع الرسمي للاتحاد المصري للتزلج",
      }
    )
  } catch (error) {
    console.error("Error fetching site settings:", error)
    return {
      siteName: "الاتحاد المصري للتزلج",
      siteDescription: "الموقع الرسمي للاتحاد المصري للتزلج",
    }
  }
}

// Social Media Links
export async function getSocialMediaLinks() {
  try {
    const links = await client.fetch(
      `*[_type == "socialMediaLinks"][0] {
        facebook,
        instagram,
        twitter,
        linkedin,
        youtube
      }`,
    )
    return links || {}
  } catch (error) {
    console.error("Error fetching social media links:", error)
    return {}
  }
}

// Page Metadata
export async function getHomePageMeta() {
  if (useMockData()) {
    return null
  }

  try {
    return await client.fetch(
      `*[_type == "homePage"][0] {
        metaTitle,
        metaDescription
      }`,
    )
  } catch (error) {
    console.error("Error fetching home page metadata:", error)
    return null
  }
}

export async function getAboutPageData() {
  const mockAboutData = {
    metaTitle: "من نحن - الاتحاد المصري للتزلج",
    metaDescription: "تعرف على الاتحاد المصري للتزلج، رسالتنا، رؤيتنا، وإنجازاتنا",
    heroTitle: "من نحن",
    heroDescription: "الاتحاد المصري للتزلج",
    missionSectionTitle: "رسالتنا ورؤيتنا",
    missionSectionSubtitle: "نسعى لتطوير رياضة التزلج في مصر",
    missionTitle: "رسالتنا",
    missionContent: "تطوير وتعزيز رياضة التزلج في مصر",
    visionTitle: "رؤيتنا",
    visionContent: "أن نكون الاتحاد الرائد في المنطقة",
    valuesTitle: "قيمنا",
    valuesContent: "التميز، الاحترافية، والتطوير المستمر",
    statsTitle: "إحصائياتنا",
    statsSubtitle: "أرقام تعكس إنجازاتنا",
    stats: [],
    historyTitle: "تاريخنا",
    historySubtitle: "رحلة من الإنجازات",
    historyContent: "تأسس الاتحاد المصري للتزلج لتطوير الرياضة في مصر",
    milestones: [],
    leadership: {
      title: "القيادة",
      subtitle: "فريق العمل",
      members: []
    },
    achievements: {
      achievementsTitle: "إنجازاتنا",
      achievementsSubtitle: "نفخر بما حققناه",
      items: []
    }
  }

  if (useMockData()) {
    return mockAboutData
  }

  try {
    console.log("[About Page] Attempting to fetch all 'about' documents from Sanity...")
    const documents = await client.fetch(
      `*[_type == "about"] {
        _id,
        _createdAt,
        metaTitle,
        metaDescription,
        heroTitle,
        heroDescription,
        backgroundImage {
          asset->{
            url
          }
        },
        missionSectionTitle,
        missionSectionSubtitle,
        missionTitle,
        missionContent,
        visionTitle,
        visionContent,
        valuesTitle,
        valuesContent,
        historyTitle,
        historySubtitle,
        historyContent,
        historyImage {
          asset->{
            url
          }
        },
        milestones[] {
            year,
            title,
            description
        },
        statsTitle,
        statsSubtitle,
        stats[] {
            label,
            value,
            icon,
            description
        },
        leadership {
          title,
          subtitle,
          members[] {
            name,
            position,
            bio,
            email,
            phone,
            image {
              asset->{
                url
              }
            }
          }
        },
        achievements {
          achievementsTitle,
          achievementsSubtitle,
          achievementsImage {
            asset->{
              url
            }
          },
          items[] {
            title,
            description,
            year,
            type,
            image {
              asset->{
                url
              }
            }
          }
        }
      }`
    )

    console.log(`[About Page] Found ${documents?.length || 0} 'about' documents`)
    if (documents && documents.length > 0) {
      documents.forEach((doc: any, index: number) => {
        console.log(`[About Page] Doc ${index}: ID=${doc._id}, Title=${doc.heroTitle || "No Title"}, CreatedAt=${doc._createdAt}`)
      })
    }

    // Priority Selection:
    // 1. Singleton document with ID 'about' (if it has metaTitle or heroTitle)
    // 2. Any published document with content
    // 3. Drafts with content
    // 4. Any document at all
    const data = documents?.find((doc: any) => doc._id === 'about' && (doc.heroTitle || doc.metaTitle)) ||
      documents?.find((doc: any) => !doc._id.startsWith('drafts.') && (doc.heroTitle || doc.metaTitle)) ||
      documents?.find((doc: any) => doc.heroTitle || doc.metaTitle) ||
      documents?.[0]

    if (data) {
      console.log(`[About Page] ✓ Selected document ID: ${data._id}`)
    }

    return data || mockAboutData
  } catch (error) {
    console.error("[About Page] ✗ Fetch error:", error)
    return mockAboutData
  }
}

export async function getContactPageData() {
  if (useMockData()) {
    return null
  }

  try {
    return await client.fetch(
      `*[_type == "contact"][0] {
        metaTitle,
        metaDescription,
        phone,
        email,
        address,
        whatsapp,
        hero {
          title,
          subtitle,
          backgroundImage {
            asset-> {
              url
            }
          }
        }
      }`,
    )
  } catch (error) {
    console.error("Error fetching contact page data:", error)
    return null
  }
}

export async function getNewsPageMeta() {
  if (useMockData()) {
    return null
  }

  try {
    return await client.fetch(
      `*[_type == "newsPage"][0] {
        metaTitle,
        metaDescription,
        heroTitle,
        heroDescription,
        backgroundImage {
          asset-> {
            url
          }
        }
      }`,
    )
  } catch (error) {
    console.error("Error fetching news page metadata:", error)
    return null
  }
}

export async function getEventsPageMeta() {
  if (useMockData()) {
    return null
  }

  try {
    return await client.fetch(
      `*[_type == "eventsPage"][0] {
        metaTitle,
        metaDescription,
        heroTitle,
        heroDescription,
        backgroundImage {
          asset-> {
            url
          }
        }
      }`,
    )
  } catch (error) {
    console.error("Error fetching events page metadata:", error)
    return null
  }
}

export async function getRegulations() {
  try {
    const data = await client.fetch(
      `{
        "content": *[_type == "regulations"] | order(_updatedAt desc)[0] {
          hero,
          tableOfContents,
          generalRegulations,
          disciplineRegulations,
          antiDopingRegulations,
          upcomingAmendments,
          timelineSummary,
          downloadsSection {
            title,
            description,
            noteTitle,
            noteContent,
            documents[] {
              title,
              file {
                asset-> {
                  url,
                  size
                }
              }
            }
          },
          contactsSection {
            title,
            description,
            items[] {
              title,
              description,
              email,
              phone,
              icon,
              color,
              bgColor
            }
          }
        },
        "page": *[_type == "regulationsPage"][0] {
          heroTitle,
          heroSubtitle,
          heroImage {
            asset-> {
              url
            }
          }
        }
      }`
    )

    const content = data.content || {}
    const page = data.page || {}

    // Merge page settings into hero
    const mergedHero = {
      title: page.heroTitle || content.hero?.title,
      subtitle: page.heroSubtitle || content.hero?.subtitle,
      backgroundImage: page.heroImage || content.hero?.backgroundImage,
    }

    return {
      ...content,
      hero: mergedHero,
    } || mockRegulations
  } catch (error) {
    console.error("Error fetching regulations:", error)
    return mockRegulations
  }
}

export async function getRegulationsPageMeta() {
  try {
    return await client.fetch(
      `*[_type == "regulationsPage"][0] {
        metaTitle,
        metaDescription
      }`,
    )
  } catch (error) {
    console.error("Error fetching regulations page metadata:", error)
    return null
  }
}

// Results
export async function getResults() {
  try {
    const results = await client.fetch(
      `*[_type == "result"] | order(publishedAt desc) {
        _id,
        title,
        description,
        category,
        file {
          asset-> {
            url,
            originalFilename,
            size
          }
        },
        publishedAt
      }`,
    )
    return results || []
  } catch (error) {
    console.error("Error fetching results:", error)
    return []
  }
}

// Get results for a specific event
export async function getResultsByEvent(eventId: string) {
  try {
    const results = await client.fetch(
      `*[_type == "result" && event._ref == $eventId] | order(publishedAt desc) {
        _id,
        title,
        description,
        category,
        file {
          asset-> {
            url,
            originalFilename,
            size
          }
        },
        publishedAt
      }`,
      { eventId }
    )
    return results || []
  } catch (error) {
    console.error("Error fetching results by event:", error)
    return []
  }
}
