"use client";
import Login from "@/components/Login";
import Bannerup from "@/components/Bannerup";
import Register from "@/components/Register";

export default function Signin() {
  return (
    <div className="justify-center ">
      <Bannerup page="login" />
      <Login />
      <Register />
    </div>
  );
}
