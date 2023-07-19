"use client";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
  { text: "Home", href: "/" },
  { text: "About us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Services", href: "/services" },
];
import { Avatar, Typography } from "@material-tailwind/react";

export default function Example() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center text-white hover:text-gray-300">
                <Image className="h-8 w-8" src="/LogoVanity.svg" alt="Logo" width={100} height={24} priority />
                <span className="ml-2 font-semibold text-[#BA7894] text-xl">Vanity Reserve</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NavLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block border-3">
            {/*Avatar*/}
            <div className="flex items-center gap-4 border-solid border-black border-2 px-5">
              <Avatar className="m-1" src="/img/face-2.jpg" alt="avatar" />
              <div>
                <Typography variant="h6" color="black" className="mr-1">
                  Tania Andrew
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Client
                </Typography>
              </div>
              {/*Avatar*/}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
