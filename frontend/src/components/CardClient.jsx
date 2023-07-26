"use client";
import { Button, Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function CardClient(appoint) {
  return (
    <div className="flex justify-center lg:flex flex-wrap m-3">
      <Card className="w-full h-[calc(53vh-2rem)] max-w-sm sm:w-80 sm:max-w-md lg:w-96">
        <CardHeader floated={false} className="h-52 sm:h-56 lg:h-full">
          <Image
            src={appoint.appointment.service.image}
            alt={appoint.appointment.service.image}
            width={900}
            height={200}
            className=" object-cover"
          />
        </CardHeader>
        <CardBody className="mb-0">
          <div className="flex justify-between mb-0">
            <Typography variant="h6">
              <span className="text-pink">Date </span>
              <span className="text-pink">{appoint.appointment.day}</span>
            </Typography>
            <Typography variant="h6">
              <span className="text-black">{appoint.appointment.time.slice(0, 6)}hrs</span>
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-lg sm:text-xl lg:text-2xl">
            {appoint.appointment.service.name}
          </Typography>
          <div className="flex mb-0">
            <Typography variant="h6">
              <span className="text-gray font-thin">Total:$</span>
            </Typography>
            <Typography variant="h6">
              <span className="text-gray normal-nums font-thin">{appoint.appointment.service.price}</span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center">
          <Button className="w-full">Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
