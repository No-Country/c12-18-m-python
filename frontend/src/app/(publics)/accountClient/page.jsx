import AccountMax640 from "@/components/AccountMax640";
import AvatarClient from "@/components/AvatarClient";
import CardClient from "@/components/CardClient";
import FiltersClientAllServices from "@/components/FiltersClientAllServices";
import FormClient from "@/components/FormClient";

export default function Account() {
  return (
    <>
      <div className="grid w-auto md:flex">
        <div className="flex  md:grid">
          <AccountMax640 />
          <FiltersClientAllServices />
        </div>
        <div className="flex w-full">
          <FormClient />
        </div>
      </div>
    </>
  );
}

