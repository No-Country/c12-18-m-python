"use client";
// Importaciones necesarias de material tailwind
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

// Componente CardHistorySales
// Este es el componente principal que muestra la tarjeta de ventas del historial.
export default function CardAppointments({ appointment }) {
  return (
    <Card className="grid m-4 mx-6 sm:flex flex-row md:h-56 sm:m-2 lg:p-2 sm:h-full">
      {/* Encabezado de la tarjeta */}
      <CardHeader shadow={false} floated={false} className="m-0 rounded-r-none sm:w-96 sm:h-full sm:mb-0">
        {/* Imagen del encabezado */}
        <Image
          width={200}
          height={0}
          src={appointment.service.image}
          alt="image"
          className="w-auto border-2 border-indigo-950 h-full object-contain sm:p-3 rounded-md"
        />
      </CardHeader>
      <div className="flex flex-col m-0 sm:w-full sm:h-full sm:mb-0">
        {/* Cuerpo de la tarjeta */}
        <CardBody className="sm:mt-0 sm:h-1/2">
          {/* Sección con fecha y hora */}
          <div className="grid grid-cols-3 sm:justify-end w-full md:w-full h-8 md:mr-4">
            <div className="">
              <span className="uppercase text-blue-500 font-bold">{appointment.service.name}</span>
            </div>
            <div className="">
              <span className="text-black text-base sm:flex w-40">Date: {appointment.day}</span>
            </div>
            <div className="">
              <span className="text-black text-base sm:flex w-60">Hour: {appointment.time}</span>
            </div>
          </div>
          {/* Sección con detalles del usuario */}
          <div className="lg:grid sm:-mb-4">
            <div className="m-0 p-0 mb-2">
              {/* Nombre del usuario */}
              <Typography className="mb-0">
                <span className="font-bold">User: {appointment.user.first_name}</span>
              </Typography>
              {/* Correo electrónico del usuario */}
              <Typography className="font-normal sm:text-base">Email: {appointment.user.email}</Typography>
            </div>
            <div className="flex justify-between w-72 mb-2 sm:w-80 md:space-x-8 space-x-6 md:text-xl">
              {/* Estado del pedido */}
              <span className="w-full">Status: {appointment.status}</span>
              {/* ID de usuario */}
            </div>
            {/* Sección con el total de ventas */}
            <div className="flex justify-between mb-0 p-0 sm:justify-end w-full md:w-full h-8 md:mr-4">
              <span className="text-black text-base font-bold flex justify-end w-full">Total: ${appointment.service.price}</span>
            </div>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
