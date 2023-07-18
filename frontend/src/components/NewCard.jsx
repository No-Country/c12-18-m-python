"use client";
import { Button, Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function Example() {
  return (
    <Card
      className="w-65 h-29 m-7 my-8 mb-2 
      sm:w-70 sm:h-50 sm:m-12 sm:mb-7
      lg:w-1/4 lg:h-30 lg:m-10 "
    >
      <CardHeader floated={false} className="h-[calc(30vh-2rem)]">
        <img src="/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="">
        <div className="flex justify-between">
          <Typography variant="h6" className="mb-2 flex">
            <div className="text-pink">Date:</div>
            <div className="text-pink mx-2">(Fecha)</div>
          </Typography>
          <Typography variant="h6" className="mb-2">
            <div className="text-black ">(hora)</div>
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 sm:text-5xl lg:text-xl">
          HairCut
        </Typography>
        <Typography className="" textGradient>
          <div className="font-medium text-black text-xs sm:text-4xl lg:text-2xl" >
          Total= 20000.00
          </div>
          
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center w-full gap-7 pt-2">
        <Button className="text-md w-full sm:text-3xl lg:text-base">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
