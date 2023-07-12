"use client";
import IconsServices from "../../../components/IconsServices";
import CardsServices from "@/components/CardsServices";
import ImgGalery from "@/components/ImgGalery";
import Bannerup from "@/components/Bannerup";

export default function Services() {
  return (
    <>
    <Bannerup page="services"/>
      <IconsServices />
      <CardsServices />
      <ImgGalery />
    </>
  );
}
