"use client";
import { Input, Button } from "@/clientComponents/TailwindComponents";
import { useState } from "react";

export default function RegisterForm() {
  const [newUser, setNewUser] = useState({ username: "", email: "", password: "", first_name: "", last_name: "" });

  const handleChange = (e) => {
    setNewUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Complete user register
    const formData = new FormData(event.target);
    console.log(formData.get("username"));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Name" name="username" value={newUser.username} onChange={handleChange} />
        <Input size="lg" label="Email" name="email" value={newUser.email} onChange={handleChange} />
        <Input type="password" size="lg" label="Password" name="password" value={newUser.password} onChange={handleChange} />
        <Input size="lg" label="First Name" name="first_name" value={newUser.first_name} onChange={handleChange} />
        <Input size="lg" label="Last Name" name="last_name" value={newUser.last_name} onChange={handleChange} />
      </div>

      <Button
        className=" bg-pink shadow-none hover:shadow-none text-white  focus:shadow-none focus:scale-105 active:scale-100 "
        fullWidth
        color="gray"
        type="submit"
        variant="outlined"
      >
        Register
      </Button>
    </form>
  );
}
