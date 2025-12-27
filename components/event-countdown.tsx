"use client"

import { useState, useEffect } from "react"

interface EventCountdownProps {
  targetDate: string // Format: "YYYY-MM-DD"
}

export default function EventCountdown({ targetDate }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return timeLeft
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clean up
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        باقي {timeLeft.days} {timeLeft.days === 1 ? "يوم" : "أيام"}
      </h3>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <div className="bg-gray-100 rounded-lg p-2">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs text-gray-600">أيام</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-2">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs text-gray-600">ساعات</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-2">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-600">دقائق</div>
        </div>
        <div className="bg-gray-100 rounded-lg p-2">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-600">ثواني</div>
        </div>
      </div>
    </div>
  )
}
