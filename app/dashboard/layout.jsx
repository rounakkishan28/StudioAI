"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Header from '../_components/Header'
import VideoCreateOption from './_components/VideoCreateOption'
import { Coins, CoinsIcon, Grid2X2 } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../../components/ui/navigation-menu.jsx';
import { usePathname } from 'next/navigation'
import { UserDetailContext } from '../_context/UserDetailContext'


function DashboardLayout({ children }) {

    const path = usePathname();
    const { userDetail } = useContext(UserDetailContext);

    return (
        <div className='bg-black min-h-screen'>
            <div className='flex items-center justify-center'><Header /></div>
            <div className='flex flex-col items-center justify-center mt-24'>
                <div className="p-1 px-6 mt-4 w-fit flex justify-between items-center shadow-lg rounded-xl bg-gray-900 text-gray-100">

                    {/* Navigation Menu */}
                    <NavigationMenu className='hidden md:block'>
                        <NavigationMenuList className="flex space-x-3 lg:space-x-6 text-sm font-semibold text-gray-200">
                            <NavigationMenuItem>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className={`bg-gray-900 text-gray-200 hover:text-white hover:ring-1 hover:ring-white text-base font-light hover:bg-black transition-colors rounded-md px-2 py-2 shadow-md`}>+ Create New Video</Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-black border-0 max-w-3xl">
                                        <DialogHeader>
                                            <DialogTitle className='font-bold text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500'>Create a new video</DialogTitle>
                                            <DialogDescription className="bg-black">
                                                <VideoCreateOption />
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={"/dashboard"}>
                                    <Button className={`flex ${path == '/dashboard' ? 'bg-black text-white' : 'bg-gray-900 text-gray-200'} hover:text-white hover:ring-1 hover:ring-white text-base font-light hover:bg-black transition-colors rounded-md px-4 py-2 shadow-md`}>
                                        <Grid2X2 /> Dashboard
                                    </Button>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={"/buy-credits"}>
                                    <Button className={`flex ${path == '/buy-credits' ? 'bg-black text-white' : 'bg-gray-900 text-gray-200'} hover:text-white hover:ring-1 hover:ring-white text-base font-light hover:bg-black transition-colors rounded-md px-4 py-2 shadow-md`}>
                                        <CoinsIcon /> Buy-credits
                                    </Button>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            {children}

            {/* Credits section */}
            {/* <div className='flex items-center justify-center pb-4'>
                <h2 className='flex items-center justify-center gap-3 text-gray-100 border px-10 py-4 rounded-full'>Total Credits: {userDetail?.credits} <Coins className='w-6 h-6' /></h2>
            </div> */}
            {/* Credits section */}
<div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center pb-4'>
    <h2 className='flex items-center justify-center gap-3 text-gray-100 bg-black border px-10 py-4 rounded-full'>
        Total Credits: {userDetail?.credits} <Coins className='w-6 h-6' />
    </h2>
</div>

        </div>
    )
}

export default DashboardLayout
