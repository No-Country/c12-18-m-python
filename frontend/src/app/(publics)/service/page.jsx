import IconsServices from "@/components/IconsServices";
import BannerUp from "@/components/BannerUp";
import CardsServices from "@/components/CardsServices";
import OneService from "@/components/OneService";

export default function Services() {
  return (
    <>
      <BannerUp text="Find a Service For You" />
      <IconsServices />
      <OneService />
      <CardsServices />
    </>
  );
}
