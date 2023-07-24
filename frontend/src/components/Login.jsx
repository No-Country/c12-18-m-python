import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { useState } from "react";

export default function Login() {
  const [email, setemail] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  const [form, setForm] = useState({
    email: "",
    first_name: "",
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
    console.log(JSON.stringify({ username, first_name, email, password }));

    try {
      const response = await fetch("http://127.0.0.1:8000/user/createuser/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, first_name, email, password }),
      });

      if (response.ok) {
        alert("El usuario se creó exitosamente");
      } else {
        console.log("algo no estubo bien", error);
      }
    } catch (error) {
      console.error(error);
    }

    setemail("");
    setfirst_name("");
    setpassword("");
    setusername("");
  };


  return (
    <div className=" justify-center flex flex-row flex-wrap divide-x divide-gray-400">
      {/* registro */}
      <Card color="transparent" shadow={false} className="p-8 items-center">
        <Typography variant="h4" color="blue-gray" className="font-playfair">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Are you new in Vanity Reserve?
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">

            <Input size="lg" label="Name" id="first_name" value={first_name} onChange={(e) => setfirst_name(e.target.value)} />
            <Input size="lg" label="Username" id="username" value={username} onChange={(e) => setusername(e.target.value)} />
            <Input size="lg" label="Email" id="email" value={email} onChange={(e) => setemail(e.target.value)} />
            <Input
              type="password"
              size="lg"
              label="Password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Card>
      {/* iniciar sesión  */}

      <Card color="transparent" shadow={false} className="p-8 items-center">
        <Typography variant="h4" color="blue-gray" className="font-playfair">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-manrope">
          Enter your details to start
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
