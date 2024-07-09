import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
        {/* Left */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-blue-700">
                NEXTSOCIAL
            </Link>
        </div>
        {/* Center */}
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
            {/* Links */}
            <div className="flex gap-6 text-gray-600">
                <Link 
                    href="/" 
                    className="flex items-center gap-2"
                >
                    <Image 
                        src="/home.png" 
                        alt="Homepage" 
                        width={20} 
                        height={20}
                        className="w-4 h-4"
                    />
                    <span>Homepage</span>
                </Link>
                <Link 
                    href="/" 
                    className="flex items-center gap-2"
                >
                    <Image 
                        src="/friends.png" 
                        alt="Homepage" 
                        width={20} 
                        height={20}
                        className="w-4 h-4"
                    />
                    <span>Friends</span>
                </Link>
                <Link 
                    href="/" 
                    className="flex items-center gap-2"
                >
                    <Image 
                        src="/stories.png" 
                        alt="Homepage" 
                        width={20} 
                        height={20}
                        className="w-4 h-4"
                    />
                    <span>Stories</span>
                </Link>
            </div>
            {/* Search bar */}
            <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
                <Image
                    src="/search.png"
                    alt="Search"
                    width={14}
                    height={14}
                />
            </div>
        </div>
        {/* Right */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
                <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                >
                </div>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className="cursor-pointer">
                        <Image 
                            src="/people.png"
                            alt="People"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="cursor-pointer">
                        <Image 
                            src="/messages.png"
                            alt="People"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className="cursor-pointer">
                        <Image 
                            src="/notifications.png"
                            alt="People"
                            width={20}
                            height={20}
                        />
                    </div>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className="flex items-center gap-2 text-sm cursor-pointer">
                        <Image
                            src="/login.png"
                            alt="Login"
                            width={20}
                            height={20}
                            className="w-4 h-4"
                        />
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
  );
};

export default Navbar;