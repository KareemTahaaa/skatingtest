'use client'

import { Studio } from './Studio'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Studio>{children}</Studio>
}
