"use client";
import AccountMax640 from "@/components/AccountMax640";
import Appointment from "@/components/AppointmentsCliente";

export default function Appoinments() {
  return (
    <>
      <div className="flex flex-row col-2 ">
        <div className="">
          <AccountMax640 />
        </div>
        <div className=" bg-white m-4 w-full justify-center">
          <Appointment />
        </div>
      </div>
    </>
  );
}
