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

export default function NavigationMenuDemo() {
  const [menuData, setMenuData] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  // Fetch menu data from JSON file
  useEffect(() => {
    fetch("/menuData.json")
      .then((response) => response.json())
      .then((data) => {setMenuData(data) ,console.log(data,"menu data")}).catch((err) => console.log(err))
  }, [])

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuData.map((menuItem:MenuItem, index) => (
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
                    {menuItem.subLinks[activeIndex]?.subLinks.map((subLink, subIndex) => {

                      return <ListItem key={subIndex} href={subLink.href} title={subLink.title} />
})}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({ className, title,href, ...props }: any) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            // ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            // {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }


// ListItem.displayName = "ListItem"
