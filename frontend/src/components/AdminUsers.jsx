"use client";
import { Button } from "@material-tailwind/react";

export default function AdminUser() {
  return (
    <div className="bg-white m-1 p-1 mb-2">
      <div className="flex justify-between">
        <div className="sm:w-1/3">
          <span className="text-black text-lg ml-3 font-bold sm:flex justify-center">Users</span>
        </div>
        <div className="sm:w-1/3 lg:w-1/4">
          <div className="mr-3 sm:flex justify-center">
            <Button className="bg-[#BA7894]">
              <span className="font-bold font-sans">Banned User</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-1">
        <div className=" w-28 sm:w-2/4 md:w-1/2 lg:w-2/6 xl:w-1/3">
          <span className="text-black text-base flex justify-end">User Name</span>
        </div>
        <div className="flex w-40 sm:w-56 md:w-1/3 lg:w-1/4 xl:w-1/4 h-8 ">
          <div className="flex justify-center">
            <span 
            className="text-base text-black flex justify-center items-center w-40 sm:w-56 md:w-72 xl:w-80">
              Registration Date</span>
          </div>
        </div>
      </div>
    </div>
  );
}
