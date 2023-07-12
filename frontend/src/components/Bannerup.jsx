"use client";
import { Typography } from "@material-tailwind/react";

export default function Bannerup({ page }) {
  var textComponent;

  function kindOfBanner() {
    if (page == "services" || page == "service") {
      textComponent = "Find a Service For You";
    }
    if (page == "about") {
      textComponent = "The big story behind, our beautyness center";
    }
    if (page == "contact") {
      textComponent = "We Are Ready To Assist You In 24x7";
    }
    if (page == "login") {
      textComponent = "Login / Signup";
    }
    return textComponent;
  }
  textComponent = kindOfBanner(page);

  return (
    <header className="h-full w-full flex justify-center bg-[#422A3C] text-white p-20 ">
      <Typography variant="h2" className="font-playfair text-center ">
        {textComponent}
      </Typography>
    </header>
  );
}
