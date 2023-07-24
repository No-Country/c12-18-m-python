import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState, useSEffect } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('', user) 
    }
    catch {

    }
  }

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
            <Input size="lg" label="Name" name="username" value={user.username} onChange={handleChange} />
            <Input size="lg" label="email" name="email" value={user.email} onChange={handleChange} />
            <Input type="password" size="lg" label="Password" name="password" value={user.password} onChange={handleChange} />
            <Input size="lg" label="First Name" name="first_name" value={user.first_name} onChange={handleChange} />
            <Input size="lg" label="Last Name" name="last_name" value={user.last_name} onChange={handleChange} />
          </div>

          <Button
            className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
            fullWidth
            color="gray"
            variant="outlined"
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
