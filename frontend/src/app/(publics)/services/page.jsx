import IconsServices from "../../../components/IconsServices";
import BannerUp from "@/components/BannerUp";
import AllServicesFilter from "@/components/AllServicesFilter";

export default function Services() {
  return (
    <>
      <BannerUp text="Find a Service For You" />
      <IconsServices />
      <AllServicesFilter />
    </>
  );
}
