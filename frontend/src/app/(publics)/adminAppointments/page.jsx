import AdminAppointments from "@/components/AdminAppointments";
import AdminNextAppointments from "@/components/AdminNextAppointments";
import CardAppointments from "@/components/CardAppointments";

export default function Appointments() {
  return (
    <div>
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
  );
}
