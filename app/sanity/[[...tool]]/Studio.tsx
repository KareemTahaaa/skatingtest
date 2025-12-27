'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export function Studio({ children }: { children: React.ReactNode }) {
  return (
    <NextStudio config={config}>
      {children}
    </NextStudio>
  )
}
