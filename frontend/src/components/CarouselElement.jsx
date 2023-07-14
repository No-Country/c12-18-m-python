import { Typography } from "@/clientComponents/TailwindComponents";
import PinkButton from "@/clientComponents/PinkButton";
import Image from "next/image";

export default function CarouselElement({ carouselElement }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={carouselElement.src}
        width={1000}
        height={500}
        alt={carouselElement.alt}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center">
        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
          <Typography variant="lead" color="white" className="mb-12 opacity-80 font-manrope font-bold">
            {carouselElement.preText}
          </Typography>
          <Typography variant="h1" color="white" className=" font-playfair mb-4 text-3xl md:text-4xl lg:text-5xl">
            {carouselElement.title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 font-manrope opacity-80">
            {carouselElement.body}
          </Typography>
          <div className="flex gap-2">
            <PinkButton text={carouselElement.textButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
