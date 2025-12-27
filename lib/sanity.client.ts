import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { mockImageMap } from "./mock-data"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0ujc3v49"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"
export const token = process.env.SANITY_API_READ_TOKEN || ""

export const client = projectId
  ? createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  })
  : (null as any)

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  if (!source) {
    return { url: () => "/placeholder.svg?height=400&width=600" }
  }

  // Handle mock data with direct URLs or internal paths
  if (typeof source === "string" && (source.startsWith("/") || source.startsWith("http"))) {
    return { url: () => source }
  }

  if (source.asset?.url) {
    return { url: () => source.asset.url }
  }

  if (source.url) {
    return { url: () => source.url }
  }

  try {
    // If we have a projectId, try the builder
    if (projectId) {
      return builder.image(source)
    }
  } catch (error) {
    console.warn("Sanity image builder error:", error)
  }

  // Fallback for mock data refs or builder failure
  const ref = source.asset?._ref || source._ref
  if (ref && typeof ref === "string") {
    if (mockImageMap[ref]) {
      return { url: () => mockImageMap[ref] }
    }
    return { url: () => `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(ref)}` }
  }

  return { url: () => "/placeholder.svg?height=400&width=600" }
}

export function useMockData(): boolean {
  return !projectId || projectId === ""
}
