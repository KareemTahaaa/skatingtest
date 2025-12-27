"use client"

import { Facebook, Twitter, Linkedin, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface EventShareLinksProps {
  eventTitle: string
  eventUrl: string
}

export default function EventShareLinks({ eventTitle, eventUrl }: EventShareLinksProps) {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventTitle)}&url=${encodeURIComponent(eventUrl)}`,
      "_blank",
    )
  }

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`, "_blank")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(eventUrl).then(
      () => {
        toast({
          title: "تم نسخ الرابط",
          description: "تم نسخ رابط الفعالية إلى الحافظة",
        })
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" onClick={shareOnFacebook}>
        <Facebook className="h-4 w-4 ml-2" />
        <span>فيسبوك</span>
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnTwitter}>
        <Twitter className="h-4 w-4 ml-2" />
        <span>تويتر</span>
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnLinkedin}>
        <Linkedin className="h-4 w-4 ml-2" />
        <span>لينكد إن</span>
      </Button>
      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        <Link className="h-4 w-4 ml-2" />
        <span>نسخ الرابط</span>
      </Button>
    </div>
  )
}
