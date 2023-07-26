'use client'
import AccountMax640 from "@/components/AccountMax640";
import CardClient from "@/components/CardClient";


export default function Appoinments() {
    return (
      <>
       <div className="grid lg:flex">
      <div className="">
        <AccountMax640 />
      </div>
      <div className=" m-2 w-full justify-center sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <CardClient/>
        <CardClient/>
        <CardClient/>
        <CardClient/>
        <CardClient/>
      </div>
    </div>
       
      </>
    );
  }
  