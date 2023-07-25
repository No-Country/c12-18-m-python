import AdminAppointments from "@/components/AdminAppointments";
import AdminNextAppointments from "@/components/AdminNextAppointments";
import CardAppointments from "@/components/CardAppointments";
import AdminAccount from "@/components/AdminAccount";

export default function Appointments() {
  return (
    <div className="flex flex-row col-2 ">
      <div className="">
        <AdminAccount />
      </div>
      <div className=" bg-white m-4 w-full justify-center">
        <AdminAppointments />
        <div>
          <div>
            <CardAppointments />
            <CardAppointments />
            <CardAppointments />
          </div>
          <AdminNextAppointments />
          <div>
            <CardAppointments />
            <CardAppointments />
            <CardAppointments />
          </div>
        </div>
      </div>
    </div>
  );
}
