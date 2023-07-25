import { useState } from "react";
import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";
import Image from "next/image";

const FormAddServices = () => {
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [description, setdescription] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  function onChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ description, name, image, price }));
    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
    try {
      const response = await fetch("http://localhost:8000/services/createservice/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, name, image, price }),
      });

      if (response.ok) {
        alert("El servicio se creó exitosamente");
      } else {
        console.log("algo no estubo bien", error);
      }
    } catch (error) {
      console.error(error);
      // Maneja el error en caso de que ocurra un error en la solicitud
    }

    // Reiniciar los campos del formulario
    setimage("");
    setname("");
    setPrice("");
    setdescription("");
  };

  return (
    <div className=" justify-center flex flex-row flex-wrap divide-x divide-gray-400">
      <Card color="transparent" shadow={false} className="p-8 items-center">
        <Typography variant="h4" color="blue-gray" className="font-playfair">
          Add services
        </Typography>
        <Image
          width={700}
          height={250}
          alt={"masaje"}
          src={"https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/8_dha6se.jpg"}
        />
        <form onSubmit={handleSubmit} className="m-4  w-full ">
          <div className="mb-4 flex flex-col w-full ">
            <label htmlFor="image">Service Image</label>
            <Input type="url" id="image" value={image} onChange={(e) => setimage(e.target.value)} />
            <div className="flex">
              <div className="  w-1/2 mr-5">
                <label htmlFor="name" className="  w-1/2">
                  Service Name
                </label>
                <Input id="name" value={name} onChange={(e) => setname(e.target.value)} />
              </div>
              <div className="  w-1/2 ">
                <label htmlFor="name">Price</label>
                <Input id="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>

            <label htmlFor="description">Service Description</label>
            <Textarea id="description" value={description} onChange={(e) => setdescription(e.target.value)} />
          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
            type="submit"
          >
            Add Service
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default FormAddServices;
