'use client'

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { navbarConfig } from "@/config/navbar";
import { authLinksConfig } from "@/config/auth";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav>
                <div className="h-[64px] px-10 flex w-full justify-between items-center fixed top-0 left-0 bg-backgound/80 backdrop-blur-xl z-[999] border-b">
                    <Link href='/'>
                        <Icons.logo className="h-[25px] w-[25px]" />
                    </Link>
                    <ul className="gap-10 md:flex text-sm hidden items-center">
                        {
                            navbarConfig.map((item, key) => <li key={key} className="hover:opacity-50 transition-all"><Link href={item.href}>{item.name}</Link></li>)
                        }
                        <li>
                            <Button size='sm' asChild>
                                <Link href={authLinksConfig.signUp.href} className="group flex gap-1">Get Started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" /></Link>
                            </Button>
                        </li>
                    </ul>

                    <button className="relative group md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-opacity-30 duration-200">
                            <div className="flex flex-col justify-between w-[26px] h-[17px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div className={cn(menuOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left")}></div>
                                <div className={cn(menuOpen && "translate-x-10", "bg-foreground h-[2px] w-8 rounded transform transition-all duration-300 delay-75")}></div>
                                <div className={cn(menuOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left delay-150")}></div>

                                <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-1/2 -translate-x-10 flex w-0", menuOpen && "translate-x-0 w-12")}>
                                    <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300", menuOpen && "rotate-45")}></div>
                                    <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300", menuOpen && "-rotate-45")}></div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <ul className={cn("md:hidden transition-all duration-1000 ease-in-out h-[100dvh] w-full fixed justify-end pb-20 pl-10 text-3xl font-black flex flex-col gap-10 top-0 left-0 bg-background/80 z-[99] backdrop-blur-xl", menuOpen ? "translate-y-0" : "-translate-y-full")}>
                    {
                        navbarConfig.map((item, key) => <li key={key} className="hover:opacity-50 transition-all"><Link href={item.href}>{item.name}</Link></li>)
                    }
                    <li>
                        <Button size='lg' asChild>
                            <Link href={authLinksConfig.signUp.href} className="group flex gap-2">Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-all" /></Link>
                        </Button>
                    </li>
                </ul>
            </nav>
        </>
    )
}