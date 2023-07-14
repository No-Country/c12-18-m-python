import PrincipalCarousel from "@/components/PrincipalCarousel";
import IconsServices from "@/components/IconsServices";
import CardsServices from "@/components/CardsServices";
import ImgGalery from "@/components/ImgGalery";

export default function Home() {
  return (
    <main className="">
      <PrincipalCarousel />
      <IconsServices />
      <CardsServices />
      <ImgGalery />
    </main>
  );
}
