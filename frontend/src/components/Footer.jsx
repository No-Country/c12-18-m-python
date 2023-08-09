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
    <footer className="bg-[#422A3C] text-white">
      <div className="px-4 py-8 lg:px-72"> {/* Paso 1: Reducir el padding */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image className="h-8 w-8" src="/LogoVanity2.svg" alt="Logo" width={100} height={24} priority />
            <span className="font-bold text-xl p-4"> Vanity Reserve</span>
          </div>
          <div className="flex mb-4 md:mb-0">
            <ul className="flex space-x-4"> {/* Paso 3: Aumentar el tamaño de los íconos */}
              <li>
                <FaFacebookSquare size={24} />
              </li>
              <li>
                <FaTwitter size={24} />
              </li>
              <li>
                <FaLinkedinIn size={24} />
              </li>
              <li>
                <FaInstagram size={24} />
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 my-4 " /> {/* Paso 2: Ocultar el hr en pantallas grandes */}
        <div className="container   ">
          <div className="mb-4 w-80 md:w-full mx-auto md:grid grid-cols-2 "> {/* Paso 2: Cambiar la distribución en pantallas grandes */}
            <div className="mb-4 w-80 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-center">Explore</h4>
              <div className="">
                <ul className="flex justify-between md:flex-col mb-8">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link className="hover:text-lg hover:text-orange-500" href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>          

            <div className=" w-80 md:w-full">
              <h4 className="text-xl font-bold mb-8 text-center">Keep in Touch</h4>
              <ul className="my-2">
                <li>Address:</li>
                <li>Mail:</li>
                <li>Phone:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 mx-auto flex justify-center bg-[#160813] text-white p-4">
        <p className="text-center">© 2023 Vanity reserve. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}