"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/button.jsx';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../../components/ui/navigation-menu.jsx';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

function Header() {

    const { user } = useUser();
    const path = usePathname();

    return (
        <div className="p-4 pl-8 pr-6 fixed z-20 top-4 w-[70%] flex justify-between items-center shadow-lg border border-white rounded-full bg-black text-gray-100">

            {/* Logo */}
            <Link href={'/'}>
                <h1 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-white to-gray-900">
                    StudioAI
                </h1>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu className='hidden md:block'>
                <NavigationMenuList className="flex space-x-3 lg:space-x-6 text-sm font-semibold text-gray-200">
                    <NavigationMenuItem>
                        <Link href={"/"}>
                            <Button className={`${path=='/'?'bg-black text-white ring-1 ring-white':'bg-gray-800 text-gray-200'} hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md`}>
                                Home
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/dashboard"}>
                            <Button className={`${path=='/dashboard'?'bg-black text-white ring-1 ring-white':'bg-gray-800 text-gray-200'} hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md`}>
                                Explore
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/about"}>
                            <Button className={`${path=='/about'?'bg-black text-white ring-1 ring-white':'bg-gray-800 text-gray-200'} hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md`}>
                                About Us
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/contact"}>
                            <Button className={`${path=='/contact'?'bg-black text-white ring-1 ring-white':'bg-gray-800 text-gray-200'} hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md`}>
                                Contact
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* User Profile / Sign In */}
            {user ? <UserButton /> : <Link href={'/sign-in'}>
                <Button className="bg-gray-800 text-gray-200 hover:text-white text-base font-light hover:bg-black hover:ring-1 hover:ring-white transition-colors rounded-full px-4 py-2 shadow-md">
                    Sign In
                </Button>
            </Link>}
        </div>
    )
}

export default Header
