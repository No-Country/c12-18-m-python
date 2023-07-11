'use client'
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
const links = [
  { text: "Home", href: "/" },
  { text: "About us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Services", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#422A3C] text-white ">
      
      <div className=" p-8 px-72 flex flex-col justify-between ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
          <div className="flex items-center mb-4 md:mb-0">
            <Image className="h-8 w-8" src="/LogoVanity2.svg" alt="Logo" width={100} height={24} priority />
            <span className="font-bold p-4"> Vanity Reserve</span>
          </div>
          <div className=" flex  mb-4 md:mb-0">
            <ul className=" flex flex-row  space-x-4 mb-4 md:mb-0">
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 my-4 flex" />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
          <div className="justify-between">
            <h4 className="text-xl font-bold mb-2">Explore</h4>
            <div className="hidden md:block">
              <div className="">
                <ul>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="justify-between">
            <h4 className="text-xl font-bold mb-2">Keep in Touch</h4>
            <ul>
              <li>Adress: </li>
              <li>Mail: </li>
              <li>Phone: </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" m-4 w-screen mx-auto flex justify-center bg-[#160813] text-white p-4">
        <p className="text-center">© 2023 Vanity reserve. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
