"use client"
import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { MenuItem } from "@/constant/types"
import { Menu, X } from "lucide-react" // Icons for mobile menu toggle

export default function NavigationMenuDemo() {
  const [menuData, setMenuData] = useState<MenuItem[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Fetch menu data from JSON file
  useEffect(() => {
    fetch("/menuData.json")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="block lg:hidden p-3"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {menuData.map((menuItem, index) => (
            <NavigationMenuItem key={index}>
              {/* Regular Links */}
              {!menuItem.subLinks ? (
                <Link href={menuItem?.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menuItem.title}
                  </NavigationMenuLink>
                </Link>
              ) : (
                /* Dropdown Menu */
                <>
                  <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex min-w-[300px] relative">
                    {/* Titles List */}
                    <ul className="min-w-40 border-r p-4">
                      {menuItem.subLinks.map((category, catIndex) => (
                        <li
                          key={catIndex}
                          onMouseEnter={() => setActiveIndex(catIndex)}
                          className={cn(
                            "cursor-pointer p-2 text-sm font-medium hover:bg-gray-200 rounded-md",
                            activeIndex === catIndex && "bg-gray-300"
                          )}
                        >
                          {category.title}
                        </li>
                      ))}
                    </ul>

                    {/* SubLinks List */}
                    <ul key={activeIndex} className="min-w-40 p-4">
                      {menuItem.subLinks[activeIndex]?.subLinks.map((subLink, subIndex) => (
                        <ListItem key={subIndex} href={subLink.href} title={subLink.title} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Accordion Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-4 shadow-md absolute w-full left-0 top-14 z-50">
          {menuData.map((menuItem, index) => (
            <div key={index} className="border-b p-2">
              {/* If no subLinks, show as simple link */}
              {!menuItem.subLinks ? (
                <Link href={menuItem.href} className="block text-lg font-medium p-2">
                  {menuItem.title}
                </Link>
              ) : (
                <MobileAccordion menuItem={menuItem} />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

// ✅ Mobile Accordion Component
const MobileAccordion = ({ menuItem }: { menuItem: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="w-full text-left text-lg font-medium flex justify-between p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {menuItem.title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="pl-4">
          {menuItem.subLinks.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="text-sm font-semibold p-2">{category.title}</div>
              <ul>
                {category.subLinks.map((subLink, subIndex) => (
                  <ListItem key={subIndex} href={subLink.href} title={subLink.title} isMobile={true} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ✅ ListItem Component (Fixes `NavigationMenuLink` Error)
const ListItem = ({ className, title, href, isMobile = false }: { 
  className?: string; 
  title: string; 
  href: string; 
  isMobile?: boolean 
}) => {
  if (isMobile) {
    return (
      <li>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-300",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </li>
    )
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
