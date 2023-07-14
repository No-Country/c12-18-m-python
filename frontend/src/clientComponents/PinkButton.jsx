"use client";
import { Button } from "@material-tailwind/react";

export default function PinkButton({ text }) {
  return (
    <Button
      className=" shadow-none hover:shadow-non bg-pink text-white hover:scale-105 focus:shadow-none
                   focus:scale-105 active:scale-100 "
      color="gray"
      variant="outlined"
    >
      {text}
    </Button>
  );
}
