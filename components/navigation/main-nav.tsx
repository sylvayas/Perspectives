

import * as React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuList } from "@/config/menu-list";
import GridPattern from "@/components/magicui/grid-pattern";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function MainNav() {
    const pathname = usePathname();
    const menuList = getMenuList(pathname);

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="relative mr-6 flex items-center space-x-2">
                <Icons.logo_black_rogner className="w-12" />
            </Link>
            <NavigationMenu className="hidden items-center space-x-6 text-sm font-medium xl:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href={menuList[0].menus[0].href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), `${menuList[0].menus[0].active && "font-bold text-novis_orange"}`)} >
                                {menuList[0].menus[0].label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>



                                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(`${menuList[1].menus[0].active && "font-bold text-novis_orange"}`)}>
                        {menuList[1].menus[0].label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid grid-cols-1 text-center rounded-md gap-3 p-6 md:w-[250px] lg:w-[250px]">
                        {menuList[1].menus[0].submenus.slice(1).map((item) => (
                            <ListItem
                            key={item.label}
                            href={item.href}
                            title={item.label}
                            className={cn(`${item.active && "font-bold text-novis_orange"}`)}
                            />
                        ))}
                        </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>




                    <NavigationMenuItem>
                        <NavigationMenuTrigger>{menuList[2].menus[0].label}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[80px] ml-24 text-center gap-3 p-4 md:w-[50px] md:grid-cols-2 lg:w-[200px] ">
                                {menuList[2].menus[0].submenus.map((item, index: number) => (
                                    <ListItem key={index} href={item.href} title={`${index + 1}- ${item.label}`} className={cn(`${item.active && "font-bold text-novis_orange"}`)} />
                                ))}
                            </ul>
                         
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem >
                        <Link href={menuList[4].menus[0].href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), `${menuList[4].menus[0] && "font-base text-novis_orange"}`)} >
                                {menuList[4].menus[0].label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={menuList[5].menus[0].href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), `${menuList[5].menus[0] && "font-base text-novis_orange"}`)} >
                                {menuList[5].menus[0].label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                        <Link href={menuList[6].menus[0].href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), `${menuList[6].menus[0].active && "font-bold text-novis_orange"}`)} >
                                {menuList[6].menus[0].label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>  */}


                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <p className="line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

