import BannerUp from "@/components/BannerUp";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <BannerUp text="We Are Ready To Assist You In 24x7" />
      <section className="flex flex-row min-[320px]: flex-wrap p-8 justify-center">
        <ContactForm />
      </section>
    </>
  );
}
