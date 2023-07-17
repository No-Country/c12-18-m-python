"use client";
import Image from "next/image";

//link de imagenes, se renderizan abajo
const iconsLink = [
  { name: "Makeup", href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1688793452/Group_35275_oymqok.png" },
  { name: "Wellnesscenter", href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1688793452/Group_35276_ufbmqg.png" },
  { name: "Massage", href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1688793452/Group_35277_yop1wx.png" },
  { name: "Barbersalon", href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1688793452/Frame_1000004335_olfcfk.png" },
  { name: "Frisersalon", href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1688793452/Frame_1000004336_oqnod2.png" },
  { name: "Footerapeut", href: "https://res.cloudinary.com/dbmqhlv4o/image/upload/v1688793453/Group_35278_avfqkb.png" },
];

export default function IconsServices() {
  return (
    //conteiner completo
    <div className="flex flexflex-row min-[320px]: flex-wrap p-8">
      {iconsLink.map((icon, index) => {
        return (
          //container dividido en 6 imagenes de 6 servicios
          <div key={index} className=" basis-1/6 flex flex-col hover:scale-105 ">
            <div className="flex justify-center md:max-w-2xl">
              <Image width={70} height={58} alt={icon.name} src={icon.href} />
            </div>
            <div className=" flex justify-center p-8 font-manrope font-bold content-center text-sm/[18px] text-purple">
              {icon.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
