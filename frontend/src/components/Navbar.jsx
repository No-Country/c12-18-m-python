
"use client";
import { Avatar, Typography } from "@material-tailwind/react";
import { useAuthContext } from "@/contexts/authContext";


import Image from "next/image";
import Link from "next/link";

const NavLinks = [
  { text: "Home", href: "/" },
  { text: "About us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Services", href: "/services" },  
];

export default function Navbar() {
  const auth = useAuthContext();
  //Datos del usuario
  const authUser= auth.authTokens   
  var path;

  
  function pathUser(){
    if(auth.isLoggedIn === true){
    if (authUser.admin == true ){
      path="/admin"
    }else{
      path="/client"
    }
    return path;
  }
  }
  path= pathUser(authUser)

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
          <div className="hidden md:block">
            {auth.isLoggedIn === true ? (
              //si esta logueado es visible el boton del cliente
              
              <Link href={path} >
              <div className="flex items-center gap-4 px-5">
                <Avatar className="m-1" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="avatar" />
                <div>
                  <Typography variant="h6" color="black" className="mr-1">
                    {authUser.first_name}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    {authUser.admin === true ? "Admin" : "Client"}
                  </Typography>
                </div>
                
                {/* boton cerrar sesión  */}
                <Link href="/" >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
               text-gray-300 bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2
               focus:ring-offset-gray-800 focus:ring-white"
               onClick={(e) => auth.logout()}
                >
                  Sign Out
                </button>
                </Link>
                
              </div>
              </Link>
            ) : (
              //boton iniciar sesion
              <Link href="/signin" >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
               text-gray-300 bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2
               focus:ring-offset-gray-800 focus:ring-white"
                >
                  Sign In
                </button>
              </Link>
            )}

            {/*  */}
          </div>
        </div>
      </div>
    </nav>
  );
}
