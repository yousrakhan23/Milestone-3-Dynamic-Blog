import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Rubik_Vinyl } from "next/font/google";

const rubikVinyl = Rubik_Vinyl({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50  bg-[#181A2A]">
      <div className="flex items-center justify-between py-4 px-8 md:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="../images/brand_logo.svg"
            alt="logo"
            width={158}
            height={36}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <nav className={`${rubikVinyl.className} hidden md:flex space-x-8 text-xl`}>
          <Link
            href="/Blog"
            className="text-[#F2AE66]  transition"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-[#F2AE66]  transition"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-[#F2AE66]  transition"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-[#F2AE66]  transition"
          >
            Contact
          </Link>
        </nav>

        {/* Search Input */}
        <div className="hidden md:block w-[200px]">
          <Input
            type="search"
            placeholder="Search"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="white"
                className="block ml-[22rem]"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="py-[5rem] px-[2rem]">
                    <Input
                      type="search"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <nav
                    className={`${rubikVinyl.className} space-y-4 text-center text-[#F2AE66] text-xl transition`}
                  >
                    <Link href="/blog" className="block">
                      Blog
                    </Link>
                    <Link href="/home" className="block">
                      Home
                    </Link>
                    <Link href="/about" className="block">
                      About
                    </Link>
                    <Link href="/contact" className="block">
                      Contact
                    </Link>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
