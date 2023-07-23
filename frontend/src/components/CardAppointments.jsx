"use client";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function CardAppointments() {
  return (
    <Card
      className="grid w-90 m-4
    md:flex flex-row lg:h-80 lg:p-3"
    >
      <CardHeader shadow={false} floated={false} className="w-full m-0 rounded-r-none">
        <img
          src="https://acortar.link/ktZC37"
          alt="image"
          className="w-full h-full object-contain
         md:w-full md:p-4 shrink-0 m-0 rounded-r-none
        lg:h-full lg:m-3 lg:w-90 "
        />
      </CardHeader>
      <div
        className="flex flex-col m-0
      md:w-full"
      >
        <CardBody className="md:mt-0">
          <div
            className="flex justify-end space-x-14 md:mb-8
          md:space-x-32 lg:text-2xl"
          >
            <span className="flex">(date)</span>
            <span>(hour)</span>
          </div>
          <div className="lg:grid">
            <Typography variant="h6" color="blue" className="uppercase mt-4 lg:text-2xl lg:mb-2">
              (Service)
            </Typography>
            <div className="flex mb-7 md:space-x-8 space-x-6 md:text-xl">
              <span className="">(state)</span>
              <div>
                <span>Appointment id:</span>
                <span className="">(Number)</span>
              </div>
            </div>
            <div className="m-0 p-0">
              <Typography variant="h5" color="blue-gray" className="mb-1">
                (Name)
              </Typography>
              <Typography color="gray" className="font-normal md:text-lg">
                (Email)
              </Typography>
            </div>
          </div>
          <div
            className="flex justify-end space-x-16
          md:space-x-32"
          >
            <span className="font-bold lg:text-2xl">Total:</span>
            <span className="lg:text-2xl">$(total)</span>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
