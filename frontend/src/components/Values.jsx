import Image from "next/image";
import { Card, CardBody, Typography } from "@/clientComponents/TailwindComponents";

const values = [
  {
    name: "Beauty Experts",
    href: "https://res.cloudinary.com/disxqnr9u/image/upload/v1689204050/Icon_xbrnx7.png",
    description:
      "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.",
  },
  {
    name: "Great Services",
    href: "https://res.cloudinary.com/disxqnr9u/image/upload/v1689203248/value2_rq3y8j.png",
    description:
      "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages..",
  },
  {
    name: "100% Genuine",
    href: "https://res.cloudinary.com/disxqnr9u/image/upload/v1689203226/value3_ee8ufu.png",
    description:
      "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.",
  },
];

export default function Values() {
  return (
    <Card className="flex-row w-full mb-10">
      <CardBody className="p-8 flex flex-col justify-between">
        <Typography variant="h1" className=" flex justify-center text-[#000000]">
          The work values we thrive for
        </Typography>
        <Typography className=" flex flexflex-row p-8 justify-center uppercase mb-4 text-[#BA7894]">Ours values</Typography>
        {values.map((value) => {
          return (
            <Typography key={value.name} className=" flex flex-wrap m-2 p-2">
              <Image width={49} height={72} alt={value.name} src={value.href} />
              <div>
                <Typography className="font-bold text-[#000000] ">{value.name}</Typography>
                <Typography className="whitespace-wrap">{value.description}</Typography>
              </div>
            </Typography>
          );
        })}
      </CardBody>
    </Card>
  );
}
