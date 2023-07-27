"use client";
import AccountMax640 from "@/components/AccountMax640";
import { useAuthContext } from "@/contexts/authContext";
import FormClient from "@/components/FormClient";

export default function Client() {
  const auth = useAuthContext();

  //Datos del usuario
  const authUser = auth.authTokens;

  return (
    <div className="flex flex-row col-2 ">
      <div className="">
        <AccountMax640 />
      </div>
    </div>
  );
}
