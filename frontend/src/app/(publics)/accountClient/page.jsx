import AccountMax640 from "@/components/AccountMax640";
import AvatarClient from "@/components/AvatarClient";
import FiltersClientAllServices from "@/components/FiltersClientAllServices";
import FormClient from "@/components/FormClient";
import NewCard from "@/components/NewCard";

export default function Account() {
  return (
    <>
      <div className="md:flex " >
        <div className="flex md:w-auto md:block">
          <AccountMax640 />
          <FiltersClientAllServices />
        </div>
        <div className="md:w-full" >
          <FormClient />
          <NewCard/>
        </div>

      </div>
    </>
  );
}
