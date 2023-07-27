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
      let oneService= data.find(ser=> ser.id == id);  
      setService(oneService);
    };

    fetchData();
  }, []);
  return (
    <>
      <Bannerup />
      <IconsServices />
      <OneService service={service}/>      
      <CardsServices/>
    </>
  );
}
