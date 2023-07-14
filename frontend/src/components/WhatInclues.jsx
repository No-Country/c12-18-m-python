import { Card, CardBody, Typography } from "@/clientComponents/TailwindComponents";
import Image from "next/image";

const metod = [
  {
    name: "The Assessment Stage",
    href: "https://res.cloudinary.com/disxqnr9u/image/upload/v1689204261/Vector_e7az2c.png",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal letters.",
  },
  {
    name: "The Initialisation Stage",
    href: "https://res.cloudinary.com/disxqnr9u/image/upload/v1689204261/Vector_e7az2c.png",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal letters.",
  },
  {
    name: "The Treatment Stage",
    href: "https://res.cloudinary.com/disxqnr9u/image/upload/v1689204261/Vector_e7az2c.png",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal letters.",
  },
];

export default function WhatIncludes() {
  return (
    <Card className="flex-row w-full ">
      <Card className="p-4">
        <Typography variant="h6" className=" uppercase mb-4 text-[#BA7894]">
          What Includes?
        </Typography>
        <Typography variant="h2" className="mb-2 text-[#422A3C] ">
          The start of the journey
        </Typography>
        <Typography color="gray" className="font-normal mb-8">
          ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry
          in Denmark. There were thousands of small businesses offering services, but it was difficult for consumers to find them
          and know which ones to choose. They developed the idea of creating a platform that would bring all these service
          providers together in one place, making it easier for consumers to find what they need and get their issues resolved
          quickly and easily. Without having to go to many different websites, each with their own booking system.
        </Typography>
        <Typography variant="h6" color="blue-gray" className="w-4/5 flex-row w-full ">
          <Typography variant="h4">Our Methodology :</Typography>
          <div className="flex-row w-full ">
            {metod.map((met) => {
              return (
                <div key={met.name} className="flex-row w-full ">
                  <Image width={33} height={33} alt={met.name} src={met.href} />

                  <Typography variant="h6">{met.name}</Typography>
                  <Typography variant="h8">{met.description}</Typography>
                </div>
              );
            })}
          </div>
        </Typography>
      </Card>
      <CardBody shadow={false} floated={false} className="w-3/6 shrink-0 m-0 rounded-r-none">
        <Image
          width={802}
          height={720}
          alt={"about"}
          src={"https://res.cloudinary.com/disxqnr9u/image/upload/v1689204248/whatinclude_kr44y7.png"}
        />
      </CardBody>
    </Card>
  );
}
