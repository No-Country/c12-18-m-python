"use client";
import IconsServices from "../../../components/IconsServices";
import ImgGalery from "@/components/ImgGalery";
import Bannerup from "@/components/Bannerup";
import CardsServices from "@/components/CardsServices";
import OneService from "@/components/OneService";
import { Typography } from "@material-tailwind/react";

export default function Services() {
  return (
    <>
      <Bannerup />
      <IconsServices />
      <OneService/>      
      <CardsServices/>
    </>
  );
}
