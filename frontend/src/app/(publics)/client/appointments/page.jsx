'use client'
import AccountMax640 from "@/components/AccountMax640";
import CardAppointments from "@/components/CardAppointments";
import CardClient from "@/components/CardClient";


export default function Appoinments() {
    return (
      <>
       <div className="flex flex-row col-2 ">
      <div className="">
        <AccountMax640 />
      </div>
      <div className=" bg-white m-4 w-full justify-center">
        <CardClient/>
        <CardClient/>
        <CardClient/>
        <CardClient/>
      </div>
    </div>
       
      </>
    );
  }
  