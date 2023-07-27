"use client";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import SingleCard from "./SigleCard";
import { GetService, fetchservices } from "@/stateComponents/ProbarServicios";
import { useState, useEffect } from "react";
import Image from "next/image";

//info temporal de los servicios
const serv = [
  {
    name: "Haircut",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/3_btnysw.png",
    price: 200,
  },
  {
    name: "Body Massage",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/8_dha6se.jpg",
    price: 300,
  },
  {
    name: "Hairstyle",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/2_ilflki.png",
    price: 300,
  },
  {
    name: "Night Makeup",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/1_ukjqww.png",
    price: 100,
  },
  {
    name: "Body Wax",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/7_xq2cof.webp",
    price: 700,
  },
  {
    name: "Manicure",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689039610/manicure-spa-pedicure-salon-florestilista_1_qyhw51.png",
    price: 100,
  },
  {
    name: "Foot Therapy",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/5_xrp59b.jpg",
    price: 100,
  },
  {
    name: "Microblandin",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/4_ktb8yv.webp",
    price: 100,
  },
  {
    name: "Microblandin",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/4_ktb8yv.webp",
    price: 100,
  },
  {
    name: "Microblandin",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/4_ktb8yv.webp",
    price: 100,
  },
  {
    name: "Haircut",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/3_btnysw.png",
    price: 200,
  },
  {
    name: "Body Massage",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/8_dha6se.jpg",
    price: 300,
  },
  {
    name: "Hairstyle",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/2_ilflki.png",
    price: 300,
  },
  {
    name: "Haircut",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/3_btnysw.png",
    price: 200,
  },
  {
    name: "Body Massage",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/8_dha6se.jpg",
    price: 300,
  },
  {
    name: "Hairstyle",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/2_ilflki.png",
    price: 300,
  },
  {
    name: "Haircut",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/3_btnysw.png",
    price: 200,
  },
  {
    name: "Body Massage",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/8_dha6se.jpg",
    price: 300,
  },
  {
    name: "Hairstyle",
    href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081780/2_ilflki.png",
    price: 300,
  },
];

export default function CardsServices({ page }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetService();
      setServices(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-96 mx-auto sm:w-full"> {/* Paso 1: Agregamos el contenedor principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Paso 2: Distribución de las cards */}
        {/* Renderizar las cards aquí */}
        {page == "services"
          ? services.map((service, index) => {
              return (
                <SingleCard key={index} service={service} />
              );
            })
          : services.slice(0, 8).map((service, index) => {
              return (
                <SingleCard key={index} service={service} />
              );
            })}
      </div>

      {/* Renderizado condicional para agregar o quitar la palabra ALL SERVICES */}
      {page == "services" ? (
        <div></div>
      ) : (
        <div className="text-center py-2"> {/* Paso 3: Estilo para el botón */}
          <Link href="/services">
            <Typography className="font-manrope text-pink font-bold hover:text-black">ALL SERVICES</Typography>
          </Link>
        </div>
      )}
    </div>
  );
}



