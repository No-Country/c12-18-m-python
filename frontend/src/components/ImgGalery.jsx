import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function ImgGalery({ name, price, img }) {
  return (
    <div className="p-12">
      <Typography variant="h2" className="font-playfair text-center p-5 ">
        We are Experienced in making you <br />
        very Beautiful
      </Typography>
      <p className="font-monrope text-center ">Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>
      <div className="mt-6 max-w-2xl lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8 ">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689093551/gallery1_dstefl.png"
            alt=""
            width={800}
            height={200}
            className="h-full w-full object-cover hover:scale-105 object-center "
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689093550/gallery4_dtvsto.png"
              alt=""
              width={600}
              height={200}
              className="h-full w-full object-cover hover:scale-105 object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689093549/gallery3_gy2fy0.png"
              alt=""
              width={600}
              height={200}
              className="h-full w-full object-cover hover:scale-105 object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <Image
            src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689081781/6_d7lu0x.jpg"
            alt=""
            width={600}
            height={200}
            className="h-full w-full object-cover hover:scale-105 object-center"
          />
        </div>
      </div>
    </div>
  );
}
