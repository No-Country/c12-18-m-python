import AdminFooterServices from "@/components/AdminFooterServices";
import AdminServices from "@/components/AdminServices";
import CardAdminServices from "@/components/CardAdminServices";
import AdminAccount from "@/components/AdminAccount";

export default function Allservices() {
  return (
    <div className="flex flex-row col-2 ">
      <div className="">
        <AdminAccount />
      </div>
      <div className=" bg-white m-4 w-full justify-center">
        <div>
          <div>
            <AdminServices />
          </div>
          <div className="mb-0">
            <CardAdminServices />
            <CardAdminServices />
            <CardAdminServices />
            <CardAdminServices />
            <CardAdminServices />
            <CardAdminServices />
          </div>
          <div>
            <AdminFooterServices />
          </div>
        </div>
      </div>
    </div>
  );
}
