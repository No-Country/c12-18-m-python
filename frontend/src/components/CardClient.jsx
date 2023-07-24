"use client";
import { Button, Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function CardClient() {
  return (
    <div className="flex justify-center lg:flex flex-wrap m-3">
      <Card className="w-full h-[calc(53vh-2rem)] max-w-sm sm:w-80 sm:max-w-md lg:w-96">
        <CardHeader floated={false} className="h-52 sm:h-56 lg:h-full">
          <img src="/img/team-3.jpg" alt="profile-picture" className="object-cover w-full h-full" />
        </CardHeader>
        <CardBody className="mb-0">
          <div className="flex justify-between mb-0">
            <Typography variant="h6">
              <span className="text-pink">Date:</span> <span className="text-pink">(Fecha)</span>
            </Typography>
            <Typography variant="h6">
              <span className="text-black">(hora)</span>
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-lg sm:text-xl lg:text-2xl">
            HairCut
          </Typography>
          <div className="flex mb-0">
            <Typography variant="h6">
              <span className="text-gray font-thin">Total:$</span>
            </Typography>
            <Typography variant="h6">
              <span className="text-gray normal-nums font-thin">20000</span>
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

