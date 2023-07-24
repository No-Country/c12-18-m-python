"use client";
import Image from "next/image";
import Bannerup from "@/components/Bannerup";
import ContactForm from "./components/ContactForm";
import { Typography } from "@material-tailwind/react";

export default function Contact() {
  return (
    <>
      <Bannerup page="contact" />

      <div className="flex flex-row min-[320px]: flex-wrap justify-center">
        <section className="flex flex-wrap w-full columns-2  justify-center p-8">
          <div className=" p-4">
            <Image
              alt="est"
              width={400}
              height={250}
              src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689707858/Group_35289_vi7jmx.png"
            ></Image>
          </div>
          <div>
            <Typography variant="h6" className="font-manrope">
              GET IN TOUCH
            </Typography>
            <Typography variant="h2" className="font-playfair">
              We are here <br /> to help you always...
              <br />{" "}
            </Typography>
            <p className="font-manrope py-3 text-justify">
              There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in
              some form, buying to
              <br /> many desktop publishing packages.
            </p>

            <div className="font-manrope">
              <span className="flex flex-wrap items-center ">
                {" "}
                <Image
                  width={50}
                  height={58}
                  alt="home"
                  className="py-2 "
                  src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689707857/Icon_um4mra.png"
                />
                <Typography className="font-bold p-2">Visit Us:</Typography> <br />
                <Typography> Mariendalsvej 50D 2 2000 Frederiksberg.</Typography>{" "}
              </span>

              <span className="flex flex-wrap items-center">
                {" "}
                <Image
                  width={50}
                  height={58}
                  alt="email"
                  className="py-2 "
                  src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689709735/Group_35290_ua5bu7.png"
                />
                <Typography className="font-bold p-2">Drop Us:</Typography> <br />
                <Typography> support@beautyness.com </Typography>{" "}
              </span>

              <span className="flex flex-wrap items-center">
                <Image
                  width={50}
                  height={58}
                  alt="call"
                  className="py-2 "
                  src="https://res.cloudinary.com/dbmqhlv4o/image/upload/v1689707857/Icon_1_iaoi02.png"
                />
                <Typography className="font-bold p-2">Call Us:</Typography>
                <Typography> 1-800-123-9999 </Typography>{" "}
              </span>
            </div>
          </div>
        </section>
        <section className="col-2 w-full h-full flex justify-center flex-wrap bg-[#FFFBF2] p-8">
          <div className="justify-center p-8">
            <Typography className="font-manrope font-bold">SCHEDULE YOUR PRESENCE</Typography>
            <Typography variant="h3" className="font-playfair">
              Get in touch
            </Typography>
            <p className="font-manrope py-3 ">
              There are many variations of passages of Lorem Ipsum available, <br />
              but the majority have suffered alteration in some form.
            </p>
            <ContactForm />
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d252936.62766519334!2d-72.496047!3d7.880961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66451d0a01d78b%3A0x8f6b6bbe19f5701f!2sGold%20beauty!5e0!3m2!1ses-419!2smx!4v1689723285800!5m2!1ses-419!2smx"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
