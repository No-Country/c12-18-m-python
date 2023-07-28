
const ip= "35.92.64.36" 
async function fetchservices() {
  try {
    const response = await fetch(
      `http://${ip}:8000/services/getservice/`, 

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error("Error en la solicitud", response.error);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function GetService() {
  const services = await fetchservices();
  return services;
}
