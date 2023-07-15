"use client";
import { Input, Button } from "@/clientComponents/TailwindComponents";
import { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Complete user login
    const formData = new FormData(event.target);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Email" name="email" value={user.email} onChange={handleChange} />
        <Input type="password" size="lg" label="Password" name="password" value={user.password} onChange={handleChange} />
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
  );
}
