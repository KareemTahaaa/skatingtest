import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/lib/sanity.client"
import type { PortableTextComponents } from "@portabletext/react"

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) {
        return null
      }
      return (
        <div className="relative w-full my-8">
          <Image
            src={urlForImage(value).url() || "/placeholder.svg"}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && <div className="text-center text-gray-500 mt-2">{value.caption}</div>}
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <Link href={value.href} rel={rel} className="text-red-600 hover:underline">
          {children}
        </Link>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-red-600">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-r-4 border-red-600 pr-4 italic my-6">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-gray-800">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-gray-800">{children}</li>,
    number: ({ children }: any) => <li className="text-gray-800">{children}</li>,
  },
}
