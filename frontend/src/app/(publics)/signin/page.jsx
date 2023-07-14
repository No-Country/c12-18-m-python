"use client";
import Login from "@/components/Login";
import BannerUp from "@/components/BannerUp";

export default function Signin() {
  return (
    <div className="justify-center ">
      <BannerUp text="Login / Signup" />
      <Login />
    </div>
  );
}
