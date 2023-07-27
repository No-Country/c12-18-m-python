"use client";
import { Card, CardHeader, CardBody, Typography, Button, Input, Select, Option } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/contexts/authContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Swal = require("sweetalert2");
import Image from "next/image";

export default function OneService({ service }) {
  const { image, name, price, description, id } = service;
  const auth = useAuthContext();
  const authUser= auth.authTokens

  const [book, setBook] = useState("false");

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [date, setDate] = useState(new Date().toDateString());
  const [dateFormat, setDateFormat] = useState(formattedDate);
  const [getHours, setGetHours] = useState(false);
  const [hour, setHour] = useState("");
  const [key, setKey] = useState("");
  const [allHours, setAllHours] = useState([]);

  const onChange = (date) => {
    setDate(date.toDateString());

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setDateFormat(formattedDate);
    setGetHours(true);
  };

  const handleChange = (event) => {
    console.log(typeof event);
    const index = allHours.findIndex(obj => obj === event);
    const key = (index + 1).toString();
    setHour(event);
    setKey(key);
  };

  const getTime = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/appointment/hours/?service=${id.toString()}&day=${dateFormat}`,

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data, "soy la respuesta de las horas");
        const arrayFromData = Object.values(data);
        setAllHours(arrayFromData);
      } else {
        throw new Error("Error en la solicitud", response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postAppointment = async () => {
    console.log("entre a enviar");
    try {
      const response = await fetch('http://127.0.0.1:8000/appointment/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'Confirmed',
          day: dateFormat,
          timetable: key,
          service: id.toString(),
          user: authUser.id.toString(),
         }),
      });
      if (response.ok) {
        Swal.fire("Created!", "Your apppointment has been schedule.", "success");
      } else {
        Swal.fire("Error", "Something went wrong", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  useEffect(() => {
    getTime();
    console.log(allHours, "soy todas las horas");
  }, []);

  useEffect(() => {
    getTime();
    setGetHours(false);
  }, [getHours]);

  return (
    <Card className="flex flex-row h-full ">
      <CardHeader shadow={false} floated={false} className="w-3/6 scale-75 shrink-0 m-0 rounded-r-none">
        {/* Link de imagen del servicio*/}
        <Image src={image} alt={name} width={900} height={200} className=" object-cover" />
      </CardHeader>
      <CardBody className="flex flex-col place-content-center">
        {/* Nombre del servicio*/}
        <Typography variant="h4" className=" font-playfair mb-1">
          {name}
        </Typography>

        {/* Precio del servicio */}
        <Typography className="font-poppins">$ {price}</Typography>
        <p color="gray" className=" font-manrope mb-4">
          {/* Descripcion del servicio */}
          {description}
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
                  Appointment :
                </Typography>
                <Typography className="font-manrope font-bold py-4 text-[#944c82]">
                  Day: {date} / Hour: {hour}
                </Typography>
              </div>
            </div>
            <div>
              <div className="py-8 flex">
                <Select
                  label="Select Hour"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                >
                  {allHours.map((value, key) => {
                    return (
                      <Option key={key} value={value}>
                        {value}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              {/* insertar el metodo de pago */}
              <Card color="transparent" shadow={false} className="">
                <div className="mb-2   ">
                  <Typography className="font-playfair"> Payment </Typography>
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
                onClick={postAppointment}
              >
                BOOK NOW
              </Button>
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
