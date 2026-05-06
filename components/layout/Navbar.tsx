"use client";

import Link from "next/link";
import { Briefcase, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="text-yellow-500" size={22} />
          <span className="font-bold text-lg md:text-xl text-gray-800">
            Job<span className="text-yellow-500">li</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-yellow-500 transition">
            Find Jobs
          </Link>
          <Link href="#" className="hover:text-yellow-500 transition">
            Companies
          </Link>
          <Link href="#" className="hover:text-yellow-500 transition">
            About
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-gray-100">
                <Menu size={22} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm p-6 bg-white"
            >
              {/* accessibility */}
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              {/* mini header inside drawer */}
              <div className="mb-8 flex items-center gap-2">
                <Briefcase className="text-yellow-500" size={20} />
                <span className="font-bold text-lg text-gray-800">
                  Job<span className="text-yellow-500">li</span>
                </span>
              </div>

              {/* nav links */}
              <div className="flex flex-col gap-5 text-base font-medium text-gray-700">
                <Link href="#" className="hover:text-yellow-500 transition">
                  Find Jobs
                </Link>
                <Link href="#" className="hover:text-yellow-500 transition">
                  Companies
                </Link>
                <Link href="#" className="hover:text-yellow-500 transition">
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}