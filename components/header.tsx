"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface SportDiscipline {
  _id: string
  name: string
  slug: {
    current: string
  }
}

interface HeaderProps {
  disciplines: SportDiscipline[]
}

export default function Header({ disciplines }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="الاتحاد المصري للتزلج" width={60} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 space-x-reverse items-center">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              الرئيسية
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              من نحن
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              الأخبار
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              الفعاليات
            </Link>
            <Link href="/disciplines" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              الرياضات
            </Link>
            <Link href="/regulations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              اللوائح
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              اتصل بنا
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-red-600 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                من نحن
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                الأخبار
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                الفعاليات
              </Link>
              <Link
                href="/disciplines"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                الرياضات
              </Link>
              <Link
                href="/regulations"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                اللوائح
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                اتصل بنا
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
