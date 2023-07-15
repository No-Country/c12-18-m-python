import { Carousel } from "@/clientComponents/TailwindComponents";
import CarouselElement from "@/components/CarouselElement";
import IconsServices from "@/components/IconsServices";
import CardsServices from "@/components/CardsServices";
import ImgGalery from "@/components/ImgGalery";

const carouselArray = [
  {
    src: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689088670/Group_35279_2_drg3jo.png",
    alt: "Imagen 1",
    preText: "Hair Salon, wax , Beauty Salon",
    title: "Find a service for you",
    body: "There are many variation of passages are Ipsum available, majority have suffered alteration in some form.",
    textButton: "Book Now",
  },
  {
    src: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689088117/carrusel_f7ip1e.png",
    alt: "Imagen 2",
    preText: "",
    title: "Exclusive servises for you",
    body:
      "We offer a complete range of beauty services to fit your needs. From hair styling, " +
      "to facial skin care, to body massage, manicures, pedicures and more, we are your all-in-one " +
      "resource for a beautiful new you come and experience it today!",
    textButton: "Book Now",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <Carousel autoplay loop>
        {carouselArray.map((carouselElement) => {
          return <CarouselElement key={carouselElement.alt} carouselElement={carouselElement} />;
        })}
      </Carousel>
      <IconsServices />
      <CardsServices />
      <ImgGalery />
    </main>
  );
}
