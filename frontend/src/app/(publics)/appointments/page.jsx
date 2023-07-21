import AdminAppointments from "@/components/AdminAppointments";
import CardAppointments from "@/components/CardAppointments";

export default function Appointments() {
  return (
    <div>
      <AdminAppointments />
      <div>
        <div >
            <CardAppointments />
            <CardAppointments />
            <CardAppointments />
            <CardAppointments />
            <CardAppointments />
        </div>
      </div>
    </div>
  );
}
