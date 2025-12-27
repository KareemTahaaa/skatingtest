import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a localized format
 * @param dateString - ISO date string
 * @param format - Optional format type (full, month, day)
 * @returns Formatted date string in Arabic locale
 */
export function formatDate(dateString: string | undefined | null, format: "full" | "month" | "day" = "full"): string {
  if (!dateString) return ""

  try {
    const date = new Date(dateString)

    // Check if the date is valid
    if (isNaN(date.getTime())) return ""

    // Format based on requested format
    if (format === "month") {
      return date.toLocaleDateString("ar-EG", { month: "long" })
    }

    if (format === "day") {
      return date.getDate().toString()
    }

    // Default full format
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  } catch (error) {
    console.error("Error formatting date:", error)
    return ""
  }
}
