import Link from "next/link";

import { FaLinkedinIn, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#422A3C] text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          {/* <img class="h-8 w-8 mr-2" src="logo.png" alt="Logo de la empresa"> */}
          <span class="font-bold">Vanity Reserve</span>
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
      <hr className="border-gray-600 my-4" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="text-xl font-bold mb-2">Explore</h4>
          <ul>
            <li>
              <Link href="/about">{"Home"}</Link>
            </li>
            <li>
              <Link href="/about">{"About us"}</Link>
            </li>
            <li>
              <Link href="/services">{"Services"}</Link>
            </li>
            <li>
              <Link href="/services">{"Blog"}</Link>
            </li>
            <li>
              <Link href="/contact">{"Contact us"}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Utiliy page</h4>
          <ul>
            <li>Private policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Keep in Touch</h4>
          <ul>
            <li>Adress: </li>
            <li>Mail</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
      <div className="container m-0 w-screen mx-auto flex justify-center bg-[#160813] text-white p-4">
        <p className="text-center">© 2023 Vanity reserve. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
