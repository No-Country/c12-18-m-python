"use client";
// Importaciones necesarias de material tailwind
import { Button, Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const Swal = require("sweetalert2");

// Componente CardUsers
export default function CardUsers({ service, setDeleteService }) {
  const deleteService = async () => {
    try {
      const url = `http://127.0.0.1:8000/services/delete/?id=${service.id}`; // URL de la API
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        Swal.fire("Deleted!", "Your service has been deleted.", "success");
        setDeleteService(true)
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteService();
      }
    });
  };

  return (
    // Contenedor principal de la tarjeta
    <Card className="m-2 mx-6 sm:flex flex-row sm:h-48 md:h-52 sm:m-1 lg:p-1">
      
      {/* Encabezado de la tarjeta */}
      <CardHeader shadow={false} floated={false} className="m-0 rounded-r-none sm:w-96 sm:h-full sm:mb-0">
        
        {/* Contenedor de la imagen */}
        <div className="sm:block hidden">
          {/* Ocultar imagen en pantallas menores a 640px */}
          <img
            src={service.image}
            alt="image"
            className="w-auto border-2 border-indigo-950 h-full object-contain sm:p-3 rounded-md"
          />
        </div>
        
      </CardHeader>
      
      {/* Contenido de la tarjeta */}
      <div className="flex flex-col w-full m-0 sm:w-full sm:h-full sm:mb-0">
        <CardBody className="sm:mt-0 sm:h-1/2">
          <div className="flex justify-between">
            {/* Información del servicio */}
            <div className="order-first lg:grid sm:-mb-4">
              <Typography className="mb-0">
                <span className="text-base font-bold text-blue-700">{service.name}</span>
              </Typography>

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
