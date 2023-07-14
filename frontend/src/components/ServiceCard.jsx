import { Card, CardHeader, CardBody, Typography, Button, CardFooter } from "@/clientComponents/TailwindComponents";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ name, price, img }) {
  return (
    <div className="basis-1/4 p-3 ">
      <Card className="hover:scale-105">
        <CardHeader shadow={false} floated={false} className="h-55">
          <Image src={img} title={name} className="w-full h-full object-cover" alt={name} height={200} width={200} />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-playfair">
              {name}
            </Typography>
            <Typography color="gray" className="font-manrope">
              ${price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Link href="/service">
            <Button
              className=" shadow-none hover:shadow-none hover:bg-pink
               hover:text-white focus:shadow-none focus:scale-105 active:scale-100 "
              fullWidth
              color="gray"
              variant="outlined"
            >
              more about this
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
