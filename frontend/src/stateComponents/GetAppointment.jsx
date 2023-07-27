export default async function fetchAppointmentClient(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/appointment/user/?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("response ok");
      const data = await response.json();

      return data;
    } else {
      throw new Error("Error en la solicitud", response.error);
    }
  } catch (error) {
    console.error(error);
  }
}
