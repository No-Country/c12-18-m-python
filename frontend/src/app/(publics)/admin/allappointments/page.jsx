"use client";
import CardAppointments from "@/components/CardAppointments";
import AdminAccount from "@/components/AdminAccount";
import { useState, useEffect } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://35.92.64.36:8000/appointment/list/",

          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          throw new Error("Error en la solicitud", response.error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row col-2 ">
      <div className="">
        <AdminAccount />
      </div>

      <div className=" bg-white m-4 w-full">
        <div className="sm:w-1/3">
          <h2 className="text-black text-lg mt-4 font-bold sm:flex justify-center">Appointments</h2>
        </div>

        <div>
          {appointments.map((appointment) => (
            <CardAppointments appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
}
