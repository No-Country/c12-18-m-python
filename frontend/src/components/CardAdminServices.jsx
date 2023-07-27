"use client";
// Importaciones necesarias de material tailwind
import { Button, Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

// Componente CardUsers
export default function CardUsers() {
  return (
    // Contenedor principal de la tarjeta
    <Card className="m-2 mx-6 sm:flex flex-row sm:h-48 md:h-52 sm:m-1 lg:p-1">
      
      {/* Encabezado de la tarjeta */}
      <CardHeader shadow={false} floated={false} className="m-0 rounded-r-none sm:w-96 sm:h-full sm:mb-0">
        
        {/* Contenedor de la imagen */}
        <div className="sm:block hidden"> {/* Ocultar imagen en pantallas menores a 640px */}
          <img
            src="https://acortar.link/ktZC37"
            alt="image"
            className="w-auto h-full object-contain sm:p-3 sm:rounded-r-none"
          />
        </div>
        
      </CardHeader>
      
      {/* Contenido de la tarjeta */}
      <div className="flex flex-col w-full m-0 sm:w-full sm:h-full sm:mb-0">
        <CardBody className="sm:mt-0 sm:h-1/2">
          
          {/* Botones de acción */}
          <div className="flex justify-end space-x-9 mb-0 md:mb-3 sm:mb-2 sm:space-x-10 md:space-x-20 lg:space-x-28">
            <Button variant="text" className="text-light-green-700 m-0 p-0 w-20 sm:text-base md:text-lg">EDIT</Button>
            <Button variant="text" className="text-red-600 m-0 p-0 sm:text-base md:text-lg">DELETE</Button>
          </div>
          
          {/* Información del servicio */}
          <div className="lg:grid sm:-mb-4">
            <div className="m-0 p-0 mb-2">
              <Typography className="mb-0">
                <span className="text-base font-bold text-blue-700">(Service)</span>
              </Typography>
              <Typography color="gray" className="font-normal scroll-smooth hover:scroll-auto">
                <span className="text-sm">(Descripción service)</span>
              </Typography>
            </div>
            
            {/* Detalles del usuario */}
            <div className="flex justify-between  mb-0 md:space-x-8 space-x-6">
              <div>
                <span className="text-sm sm:text-sm md:text-base">User id:</span>
                <span className="text-sm sm:text-sm md:text-base">(Number)</span>
              </div>              
            </div>
            
            {/* Total */}
            <div className="flex justify-end space-x-16 md:space-x-32">
              <span className="font-bold text-xs lg:text-lg">Total:</span>
              <span className="text-xs lg:text-lg">$(total)</span>
            </div>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}
