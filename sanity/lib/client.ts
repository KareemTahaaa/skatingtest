import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-14',
  useCdn: false,
})

export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-14',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

// Helper function to choose the correct client
export const getClient = (preview?: boolean) => (preview ? previewClient : client)
