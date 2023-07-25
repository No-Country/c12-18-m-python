"use client";
import Link from "next/link";
import { Card, CardHeader, CardBody, Typography, Button, CardFooter } from "@material-tailwind/react";

export default function SingleCard({ service}) {  
  const {image, name, price, id} = service;

   return (
    <div className="basis-1/4 p-3 ">
      <Card className="hover:scale-105">
        <CardHeader shadow={false} floated={false} className="h-55">
          <img src={image} title={name} className="w-full h-full object-cover " />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-playfair">
              {name}
            </Typography>
            <Typography color="gray" className="font-manrope">
              ${price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
        <Link href={`/services/${id}`}>
        <Button
            className=" shadow-none hover:shadow-none hover:bg-pink hover:text-white focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"   
            
          >
            more about this 
          </Button>
          </Link>
         
        </CardFooter>
      </Card>
    </div>
  );
}
