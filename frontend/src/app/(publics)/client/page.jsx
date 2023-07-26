"use client";
import AccountMax640 from "@/components/AccountMax640";
import { useAuthContext } from "@/contexts/authContext";
import FormClient from "@/components/FormClient";

export default function Client() {
  const auth = useAuthContext();
  //Datos del usuario
  const authUser = auth.authTokens;
  return (
    <div className="grid w-full lg:flex">
      <div className="w-full md:w-1/4">
        <AccountMax640 />
      </div>
      <div className="bg-white rounded-xl p-2 my-2 mr-2 md:w-full w-full">
        <FormClient user={authUser} />
      </div>
    </div>
  );
}

