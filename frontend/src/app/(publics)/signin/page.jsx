'use client'
import Login from "@/components/Login";
import Bannerup from "@/components/Bannerup";

export default function Signin() {
    return (
      <div className="justify-center ">
      <Bannerup page="login"/>
      <Login/>
      </div>
    );
  }