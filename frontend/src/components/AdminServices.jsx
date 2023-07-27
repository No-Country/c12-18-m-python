"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function AdminServices() {
  return (
    <div className="bg-white m-1 sm:m-2 p-2 mb-1 sm:mb-2">
      <div className="flex justify-between">
        <div className="sm:w-1/3">
          <span className="text-black text-lg font-bold sm:flex justify-center">Services</span>
        </div>
        <div className="sm:w-1/3 lg:w-1/4">
          <div className="sm:flex justify-center">
            <Link href="/admin/allservices/addservice">
              <Button className="bg-[#558E60]">
                <span className="font-bold font-sans">Add Service</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="sm:w-7/12 md:w-96 lg:w-2/6">
          <span className="text-black text-base sm:flex justify-end">Service Name</span>
        </div>
      </div>
    </div>
  );
}
