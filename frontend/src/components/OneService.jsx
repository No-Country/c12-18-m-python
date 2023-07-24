"use client";
import { Form } from "@/clientComponents/TailwindComponents";
import { Card, CardHeader, CardBody, Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

{
  /* Infomación del servicio, se renderiza abajo*/
}
const service = {
  name: "Manicura",
  img: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689039610/manicure-spa-pedicure-salon-florestilista_1_qyhw51.png",
  description:
    "A gel moisturizer packed with glow-boosting Cherry Blossom Extracts, visibly brightening niacinamide, and hydrating betaine from sugar beets. Advanced with glycerin and Cherry Blossom flavanoids with visibly soothing and moisturizing benefits for skin that’s ready for makeup! Dermatologist tested.",
  price: 200,
};

const times = ["9:30", "10:30", "12:30", "2:00"];

export default function OneService() {
  const [book, setBook] = useState("false");
  console.log(book, "soy book");

  const [date, setDate] = useState(new Date().toDateString());
  const [hour, setHour] = useState("");

  const onChange = (date) => {
    setDate(date.toDateString());
  };

  const handleClick = (e) => {
    console.log(e.target.value, "soy value ");
    e.preventDefault();
    setHour(e.target.value);
  };
  console.log(date, hour, "soydate");

  return (
    <Card className="flex flex-row h-full ">
      <CardHeader shadow={false} floated={false} className="w-3/6 scale-75 shrink-0 m-0 rounded-r-none">
        {/* Link de imagen del servicio*/}
        <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody className="flex flex-col place-content-center">
        {/* Nombre del servicio*/}
        <Typography variant="h4" className=" font-playfair mb-1">
          {service.name}
        </Typography>

        {/* Precio del servicio */}
        <Typography className="font-poppins">$ {service.price}</Typography>
        <p color="gray" className=" font-manrope mb-4">
          {/* Descripcion del servicio */}
          {service.description}
        </p>

        {book == "true" ? (
          <div className="flex flex-row flex-wrap">
            <div className="p-4">
              <Typography variant="h3" className="font-playfair ">
                Select Day / Hour
              </Typography>
              <Calendar onChange={onChange} value={date} />
              <div className="p-4 ">
                <Typography variant="h5" className="font-playfair ">
                  Appointment  :
                </Typography>
                <Typography className="font-manrope font-bold py-4 text-[#944c82]">
                  Day: {date} / Hour: {hour}
                </Typography>
              </div>
              </div>
              <div>
              <div className="py-8 flex flex-row flex-wrap ">
                <Typography className="font-playfair">Select Hour :</Typography>
                {times.map((time, index) => {
                  return (
                    //Se renderizan todas las horas
                    <div className="p-1">
                    <Button
                      key={index}
                      className=" shadow-none hover:shadow-none hover:bg-pink hover:text-white p-2 focus:shadow-none focus:scale-105 active:scale-100 "
                      color="gray"
                      variant="outlined"
                      value={time}
                      name="hour"
                      onClick={handleClick}
                    >
                      {time}
                    </Button>
                    </div>
                  );
                })}
              </div>
              {/* insertar el metodo de pago */}
              <Card color="transparent" shadow={false} className="">
                <div className="mb-2   ">
                  <Typography className="font-playfair">Card Data</Typography>
                  <div className="mb-4 flex flex-col w-full gap-6 justify-center">
                    <Input label="Name" />
                    <Input label="Card number" />
                    <Input type="password" label="Secret number" />
                  </div>
                </div>
              </Card>

              <Button
                className=" shadow-none hover:shadow-none hover:bg-pink hover:text-white  focus:shadow-none focus:scale-105 active:scale-100 "
                fullWidth
                color="gray"
                variant="outlined"
                onClick={() => {
                  alert("Appoinment Confirmed"), setBook("false"), setDate(new Date().toDateString(), setHour(""));
                }}
              >BOOK NOW</Button>
              </div>
            
          </div>
        ) : (
          <div>
            <Button
              className=" shadow-none hover:shadow-none hover:bg-pink hover:text-white  focus:shadow-none focus:scale-105 active:scale-100 "
              fullWidth
              color="gray"
              variant="outlined"
              onClick={() => setBook("true")}
            >
              Book Now
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
