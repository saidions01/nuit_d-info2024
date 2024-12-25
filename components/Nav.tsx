"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Acceuil", href: "/" },
  { name: "Simulation", href: "/simulation" },
  { name: "Podcasts", href: "/podcasts" },
  { name: "Quiz", href: "/quiz" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  return (
    <motion.nav
    className={`text-white-500 sticky top-0 left-0  ${pathName == "/" ? "pt-4 backdrop-blur-sm"  :  "bg-[#1A374D]"} w-full  z-20 `}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* <nav className={`text-white-500 sticky top-0 left-0 pt-4  backdrop-blur-sm z-20`}> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white-500 flex   items-center">
                <Image
                  src="/images/logoAquaEcho.png"
                  width={65}
                  height={65}
                  alt="Aqua Echo logo"
                  className="brightness-200"
                />
                AquaEcho
              </Link>
            </div>
            <div className="hidden md:block pr-4">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=" px-3 py-2 rounded-md text-sm font-medium hover:underline">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white-500 focus:outline-none focus:ring-2 focus:ring-inset "
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" block px-3 py-2 rounded-md text-base  font-medium"
                onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
