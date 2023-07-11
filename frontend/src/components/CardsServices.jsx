import { Typography } from "@material-tailwind/react";
import SingleCard from "./SigleCard";

//info temporal de los servicios
const services = [
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
];

export default function CardsServices() {
  return (
    <div>
      <div className="flex flexflex-row p-3 min-[320px]: flex-wrap">
        {/* Corta los primero 8 servicios que vengan del endpoint */}
        {services.slice(0, 8).map((service) => {
          return (
            //container dividido en 8 servicios
            <SingleCard name={service.name} img={service.href} price={service.price} />
          );
        })}
      </div>
      <div className="flex flexflex-row p-8 justify-center">
        <Typography className=" font-manrope text-pink font-bold  hover:text-black">
          {/* link a la pagina Servicios */}
          <a href="">ALL SERVICES </a>
        </Typography>
      </div>
    </div>
  );
}
