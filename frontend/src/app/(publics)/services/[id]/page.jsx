"use client";
import IconsServices from "../../../../components/IconsServices";
import ImgGalery from "@/components/ImgGalery";
import Bannerup from "@/components/Bannerup";
import CardsServices from "@/components/CardsServices";
import OneService from "@/components/OneService";
import { Typography } from "@material-tailwind/react";
import { GetService, fetchservices } from "@/stateComponents/ProbarServicios";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

export default function Service() {
  const {id} = useParams();
  const [service, setService] = useState([]); 


  useEffect(() => {
    const fetchData = async () => {
      const data = await GetService();
      console.log(data, " data")    
      let oneService= data.find(ser=> ser.id == id);  
      setService(oneService);
    };

    fetchData();
  }, []);

  console.log(service, id, "soy services")

  return (
    <>
      <Bannerup />
      <IconsServices />
      <OneService service={service}/>      
      <CardsServices/>
    </>
  );
}
