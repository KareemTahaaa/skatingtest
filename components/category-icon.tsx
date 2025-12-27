interface CategoryIconProps {
  category: string
}

export default function CategoryIcon({ category }: CategoryIconProps) {
  switch (category) {
    case "ice-skate":
      return (
        <div className="rounded-full bg-gray-100 p-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#E53E3E" strokeWidth="2" />
          </svg>
        </div>
      )
    case "hockey":
      return (
        <div className="rounded-full bg-gray-100 p-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#E53E3E" strokeWidth="2" />
            <path d="M8 12L16 12" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )
    case "inline":
      return (
        <div className="rounded-full bg-gray-100 p-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#E53E3E" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="#E53E3E" strokeWidth="2" />
          </svg>
        </div>
      )
    case "speed":
      return (
        <div className="rounded-full bg-gray-100 p-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#E53E3E" strokeWidth="2" />
            <circle cx="8" cy="12" r="1" fill="#E53E3E" />
            <circle cx="12" cy="12" r="1" fill="#E53E3E" />
            <circle cx="16" cy="12" r="1" fill="#E53E3E" />
          </svg>
        </div>
      )
    default:
      return (
        <div className="rounded-full bg-gray-100 p-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#E53E3E" strokeWidth="2" />
          </svg>
        </div>
      )
  }
}
