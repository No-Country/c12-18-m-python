import { useState, useEffect } from "react";

import fetchAppointmentClient from "@/stateComponents/GetAppointment";
import { useAuthContext } from "@/contexts/authContext";
import CardClient from "./CardClient";
export default function Appointment() {
  const [appointment, setAppointment] = useState([]);
  const auth = useAuthContext();

  const id = auth.authTokens.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAppointmentClient(id);

      setAppointment(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {appointment.map((appoint, index) => {
        return <CardClient key={index} appointment={appoint} />;
      })}
    </div>
  );
}
