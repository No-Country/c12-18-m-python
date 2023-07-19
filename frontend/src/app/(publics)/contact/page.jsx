import Image from "next/image";
import Bannerup from "@/components/Bannerup";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <Bannerup page="contact" />
      <section className="flex flex-row min-[320px]: flex-wrap p-8 justify-center">
        <ContactForm />
      </section>
    </>
  );
}
