import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useAuthContext } from "@/contexts/authContext";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { login } = useAuthContext();
  const [form, setForm] = useState({
    password: "",
    username: "",
  });

  function onChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
    try {
      const response = await fetch(`http://35.92.64.36/user/auth/?username=${form.username}&&password=${form.password}`, {
        method: "GET",
        headers: {
          "Content-Type": "form-data",
        },
      });

      if (!response.ok) {
        alert(" tu usuario o contraseña estan mal");
        return console.log("Error");
      }

      const tokens = await response.json();
      login(tokens);
      setForm({ password: "", username: "" });
      console.log(tokens);
      alert("Usuario logueado con exito");
      if (tokens.admin === true) {
        alert("Eres administrador");
        return router.push("/admin");
      }
      if (tokens.admin === false) {
        alert("Eres cliente");
        return router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" justify-center flex flex-row flex-wrap divide-x divide-gray-400">
      <Card color="transparent" shadow={false} className="p-8 items-center">
        <Typography variant="h4" color="blue-gray" className="font-playfair">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Enter your details to start
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Username" name="username" value={form.username} onChange={onChange} />
            <Input type="password" size="lg" label="Password" name="password" value={form.password} onChange={onChange} />
          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
