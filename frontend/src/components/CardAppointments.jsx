"use client";
// Importaciones necesarias de material tailwind
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

// Componente CardHistorySales
// Este es el componente principal que muestra la tarjeta de ventas del historial.
export default function CardAppointments() {
  return (
    <Card className="grid m-4 mx-6 sm:flex flex-row md:h-56 sm:m-2 lg:p-2 sm:h-full">
      {/* Encabezado de la tarjeta */}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 rounded-r-none sm:w-96 sm:h-full sm:mb-0"
      >
        {/* Imagen del encabezado */}
        <img
          src="https://acortar.link/ktZC37"
          alt="image"
          className="w-auto h-full object-contain sm:mb-0 sm:p-3 sm:rounded-r-none"
        />
      </CardHeader>
      <div className="flex flex-col m-0 sm:w-full sm:h-full sm:mb-0">
        {/* Cuerpo de la tarjeta */}
        <CardBody className="sm:mt-0 sm:h-1/2">
          {/* Sección con fecha y hora */}
          <div className="flex justify-between sm:justify-end w-full md:w-full h-8 md:mr-4">
            <div>
              <span className="text-black text-base sm:flex justify-end w-20">(Date)</span>
            </div>
            <div>
              <span className="text-black text-base sm:flex justify-end sm:w-32">(Hour)</span>
            </div>
          </div>
          <div>
            <span className="uppercase text-blue-500 font-bold">(service)</span>
          </div>
          {/* Sección con detalles del usuario */}
          <div className="lg:grid sm:-mb-4">
            <div className="m-0 p-0 mb-2">
              {/* Nombre del usuario */}
              <Typography className="mb-0">
                <span className="font-bold">(Name)</span>
              </Typography>
              {/* Correo electrónico del usuario */}
              <Typography className="font-normal sm:text-base">
                (Email)
              </Typography>
            </div>
            <div className="flex justify-between w-72 mb-2 sm:w-80 md:space-x-8 space-x-6 md:text-xl">
              {/* Estado del pedido */}
              <span className="w-28">(cancelled)</span>
              {/* ID de usuario */}
              <div className="w-72 mb-2">
                <span>User id:</span>
                <span className="">(Number)</span>
              </div>
            </div>
            {/* Sección con el total de ventas */}
            <div className="flex justify-between mb-0 p-0 sm:justify-end w-full md:w-full h-8 md:mr-4">
              <div>
                <span className="text-black text-base font-bold flex justify-end w-48 sm:w-20">
                  Total:$
                </span>
              </div>
              {/* Total de ventas */}
              <div>
                <span className="text-black text-base sm:flex justify-end sm:w-32">(total)</span>
              </div>
            </div>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
