'use client'

interface TableOfContentsProps {
  sections: {
    id: string
    title: string
  }[]
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100 // Offset for fixed header if you have one
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8 sticky top-24">
      <h3 className="text-xl font-bold mb-4">محتويات المقال</h3>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-right w-full text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
