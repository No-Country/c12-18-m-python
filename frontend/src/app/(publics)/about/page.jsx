"use client";

import AboutUs from "@/components/AboutUs";
import Bannerup from "@/components/Bannerup";
import ImgGalery from "@/components/ImgGalery";
import Values from "@/components/Values";
import WhatIncludes from "@/components/WhatInclues";

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
