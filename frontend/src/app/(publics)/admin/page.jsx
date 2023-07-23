"use client";
import AdminAccount from "@/components/AdminAccount";
import FormClient from "@/components/FormClient";
import { useAuthContext } from "@/contexts/authContext";

export default function Admin() {
  const auth = useAuthContext();
  //Datos del usuario
  const authUser = auth.authTokens;
  return (
    <div className="flex flex-row col-2 ">
      <div className="">
        <AdminAccount />
      </div>
      <div className=" bg-white m-4 w-full justify-center">
        <FormClient user={authUser} />
      </div>
    </div>
  );
}
