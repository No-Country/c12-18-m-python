"use client";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import SingleCard from "./SigleCard";
import { GetService, fetchservices } from "@/stateComponents/ProbarServicios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PushSpinner } from "react-spinners-kit";


export default function CardsServices({ page }) {
  // prop que dice en que pagina esta para renderizado condicional = "services"
  //Cuandoe esta en la pagina principal se renderizan 8 cards slice(0, 8) y el link ALL SERVICES
  // Cuando esta en la pagina services se renderizan todos los servicios y se desaparece ALL SERVICES
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetService();
      setServices(data);
    };

    fetchData();
  }, []);

  return (  
    <div>      
       {services ?        
        <div>
          <div className="flex flexflex-row p-3 min-[320px]: flex-wrap">
        {page == "services"
          ? services.map((service, index) => {
              return (
                //Se renderizan todos los servicios
                <SingleCard key={index} service={service} />
              );
            })
          : services.slice(0, 8).map((service, index) => {
              return (
                //Se renderizan 8
                <SingleCard key={index} service={service} />
              );
            })}

      </div>
      {/* Renderizado condicional para agregar o quitar la palabra ALL SERVICES */}
      {page == "services" ? (
        <div></div>
      ) : (
        <div className="flex flexflex-row p-8 justify-center">
          <Link href="/services">
            <Typography className=" font-manrope text-pink font-bold  hover:text-black">ALL SERVICES</Typography>
          </Link>
        </div>
      )}
        </div>
        : 

        <PushSpinner size={30} color="#686769" loading={loading} />
      }

      
    </div>
  );
}
