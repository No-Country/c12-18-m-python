"use client";

import AccountMax640 from "@/components/AccountMax640";
import FormClient from "@/components/FormClient";
import { useAuthContext } from "@/contexts/authContext";

export default function Appoinments() {
  const auth = useAuthContext();
  const authUser = auth.authTokens;
  return (
    <>
      <div className="flex flex-row col-2 ">
        <div className="">
          <AccountMax640 />
        </div>
        <FormClient user={authUser} />
      </div>
    </>
  );
}
