

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';


export function Nav() {
  return (
    <div className="flex p-10 justify-between align-middle">
    <img src={logo}/>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/stash">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Stash
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink to="/map">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Map
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
