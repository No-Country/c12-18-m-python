"use client";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

{
  /* Infomación del servicio, se renderiza abajo*/
}
const service = {
  name: "Manicura",
  img: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689039610/manicure-spa-pedicure-salon-florestilista_1_qyhw51.png",
  description:
    "A gel moisturizer packed with glow-boosting Cherry Blossom Extracts, visibly brightening niacinamide, and hydrating betaine from sugar beets. Advanced with glycerin and Cherry Blossom flavanoids with visibly soothing and moisturizing benefits for skin that’s ready for makeup! Dermatologist tested.",
  price: 200,
};
export default function OneService() {
  return (
    <Card className="flex-row  ">
      <CardHeader shadow={false} floated={false} className="w-3/6 scale-75 shrink-0 m-0 rounded-r-none">
        {/* Link de imagen del servicio*/}
        <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody className="flex flex-col place-content-center">
        {/* Nombre del servicio*/}
        <Typography variant="h4" className=" font-playfair mb-2">
          {service.name}
        </Typography>

        {/* Precio del servicio */}
        <Typography className="font-poppins">$ {service.price}</Typography>
        <Typography color="gray" className=" font-manrope mb-8">
          {/* Descripcion del servicio */}
          {service.description}
        </Typography>
        <a href="#buttons-with-link">
          <Button
            className=" shadow-none hover:shadow-none hover:bg-pink hover:text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
          >
            Book Now
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
