"use client";
// Importaciones necesarias de material tailwind
import { Card, CardHeader, CardBody, Checkbox, Typography } from "@material-tailwind/react";

// Componente CardUsers
export default function CardUsers() {
  return (
    <Card className="grid w-90 m-2 mx-4 sm:flex flex-row sm:h-48  md:h-54 sm:m-1 lg:p-1">
      <Checkbox className="border-blue-600 border-solid border-2" />
      <CardHeader shadow={false} floated={false} className="w-90 m-0 rounded-r-none sm:w-96 sm:h-full sm:mb-0 ">
        <img
          src="https://acortar.link/ktZC37"
          alt="image"
          className="w-auto h-full object-contain 
          sm:mb-0  sm:p-3 sm:rounded-r-none"
        />
      </CardHeader>
      <div className=" flex flex-col m-0 sm:w-full sm:h-full sm:mb-0">
        <CardBody className=" sm:mt-0 sm:h-1/2">
          <div className="flex justify-end space-x-14 md:mb-3 sm:mb-5 sm:space-x-32 lg:text-2xl">
            <span>(date)</span>
          </div>
          <div className="lg:grid sm:-mb-4">
            <div className="m-0 p-0 mb-2">
              <Typography variant="h5" color="blue-gray" className="mb-0">
                (Name)
              </Typography>
              <Typography color="gray" className="font-normal sm:text-lg">
                (Email)
              </Typography>
            </div>
            <div className=" flex justify-between  mb-0 md:space-x-8 space-x-6 sm:base md:text-xl">
              <div>
                <span>User id:</span>
                <span className="">(Number)</span>
              </div>
              <span className="">(state)</span>
            </div>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
