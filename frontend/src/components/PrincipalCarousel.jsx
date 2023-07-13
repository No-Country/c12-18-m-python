import { Carousel, Typography, Button } from "@/clientComponents/TailwindComponents";
import Image from "next/image";

export default function PrincipalCarousel() {
  return (
    <div className="p-5">
      <Carousel autoplay loop className="rounded-xl">
        <div className="relative h-full w-full">
          <Image
            src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689088670/Group_35279_2_drg3jo.png"
            width={1000}
            height={500}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography variant="lead" color="white" className="mb-12 opacity-80 font-manrope font-bold">
                Hair Salon, wax , Beauty Salon
              </Typography>
              <Typography variant="h1" color="white" className=" font-playfair mb-4 text-3xl md:text-4xl lg:text-5xl">
                Find a service for you
              </Typography>
              <Typography variant="lead" color="white" className="mb-12 font-manrope opacity-80">
                There are many variation of passages are Ipsum available, majority have suffered alteration in some form.
              </Typography>
              <div className="flex gap-2">
                <Button
                  className=" shadow-none hover:shadow-non bg-pink text-white hover:scale-105 focus:shadow-none
                   focus:scale-105 active:scale-100 "
                  color="gray"
                  variant="outlined"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689088117/carrusel_f7ip1e.png"
            width={1000}
            height={500}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography variant="h1" color="white" className="mb-4 text-3xl font-playfair md:text-4xl lg:text-5xl">
                Exclusive servises for you
              </Typography>
              <Typography variant="lead" color="white" className="mb-12 opacity-80 font-manrope">
                We offer a complete range of beauty services to fit your needs. From hair styling, to facial skin care, to body
                massage, manicures, pedicures and more, we are your all-in-one resource for a beautiful new you come and
                experience it today!
              </Typography>
              <div className="flex gap-2">
                <Button
                  className=" shadow-none hover:shadow-non bg-pink text-white hover:scale-105 focus:shadow-none
                   focus:scale-105 active:scale-100 "
                  color="gray"
                  variant="outlined"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
