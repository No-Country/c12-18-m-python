import Image from "next/image";

export default function ServiceIcon({ service }) {
  return (
    <div className=" basis-1/6 flex flex-col hover:scale-105">
      <div className="flex justify-center md:max-w-2xl">
        <Image width={70} height={58} alt={service.name} src={service.href} />
      </div>
      <div className="flex justify-center p-8 font-manrope font-bold content-center text-sm/[18px] text-purple">
        {service.name}
      </div>
    </div>
  );
}
