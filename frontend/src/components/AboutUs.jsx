import Image from "next/image";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export default function AboutUs() {
  return (
    <Card className="flex-row w-full mb-10  flex justify-center">
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <Image
          width={488}
          height={732}
          alt={"about"}
          src={"https://res.cloudinary.com/disxqnr9u/image/upload/v1689203452/Photoabout2_owod62.png"}
        />
      </CardHeader>
      <CardBody className=" mb-25 p-10">
        <Typography variant="h6" className=" uppercase mb-8 text-[#BA7894]">
          About Us
        </Typography>
        <Typography variant="h1" className=" mb-4 mt-10 text-[#422A3C]">
          It’s the bridge between service companies and consumers.
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-4 p-4">
          ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and
          improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled
          environment.
        </Typography>
      </CardBody>
    </Card>
  );
}
