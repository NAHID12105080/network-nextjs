'use client'
import React, { useState } from "react"
 
import {
    Sheet,
    SheetContent,
    
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"

import { MobileNavItems } from "@/lib/constants"


const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="flex flex-col gap-1.5 cursor-pointer"
            onClick={handleToggle}
          >
            {/* First Dash */}
            <div
              className={`w-6 h-1 bg-blue-500 rounded-sm transition-transform ${
                open ? "transform rotate-45 translate-y-2 origin-left" : ""
              }`}
            />
            {/* Middle Dash */}
            <div
              className={`w-6 h-1 bg-blue-500 rounded-sm transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Last Dash */}
            <div
              className={`w-6 h-1 bg-blue-500 rounded-sm transition-transform ${
                open ? "transform -rotate-45 -translate-y-2 origin-left" : ""
              }`}
            />
          </button>
        </SheetTrigger>
        <SheetContent>
        {MobileNavItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url} className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
              {item.title}
            </Link>
          </li>
        ))}
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
