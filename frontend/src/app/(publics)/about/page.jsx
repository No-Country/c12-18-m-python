"use client";

import AboutUs from "@/components/AboutUs";
import ImgGalery from "@/components/ImgGalery";
import Values from "@/components/Values";
import WhatIncludes from "@/components/WhatInclues";
import Bannerup from "@/components/Bannerup";
import IconsServices from "@/components/IconsServices";

export default function About() {
  return (
    <div>
      <Bannerup page="about" />
      <Values />
      <AboutUs />
      <WhatIncludes />
      <ImgGalery />
    </div>
  );
}
