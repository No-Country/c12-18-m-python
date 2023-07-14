import { Typography } from "@/clientComponents/TailwindComponents";

export default function BannerUp({ text }) {
  return (
    <header className="h-full w-full flex justify-center bg-[#422A3C] text-white p-20 ">
      <Typography variant="h2" className="font-playfair text-center ">
        {text}
      </Typography>
    </header>
  );
}
