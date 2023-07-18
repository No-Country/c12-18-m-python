"use client";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function NewCard() {
  return (
    <Card
      className="w-65 h-29 m-7 my-8 mb-2 
      sm:w-70 sm:h-50 sm:m-12 sm:mb-7
      lg:w-1/4 lg:h-30 lg:m-10 
      "
    >
      <CardHeader color="blue-gray" className="relative h-29">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="img-blur-shadow"
          layout="fill"
        />
      </CardHeader>
      <CardBody className="">
        <Typography variant="h5" color="blue-gray" className="mb-2 sm:text-5xl lg:text-xl">
          UI/UX Review Check
        </Typography>
        <Typography className="text-lg sm:text-4xl lg:text-2xl">$300</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="text-sm sm:text-3xl lg:text-base">Reservar</Button>
      </CardFooter>
    </Card>
  );
}
