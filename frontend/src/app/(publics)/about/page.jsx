import BannerUp from "@/components/BannerUp";
import AboutUs from "@/components/AboutUs";
import ImgGalery from "@/components/ImgGalery";
import Values from "@/components/Values";
import WhatIncludes from "@/components/WhatInclues";

export default function About() {
  return (
    <div>
      <BannerUp text="The big story behind, our beautyness center" />
      <Values />
      <AboutUs />
      <WhatIncludes />
      <ImgGalery />
    </div>
  );
}
