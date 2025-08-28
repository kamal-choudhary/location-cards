import Image from "next/image";
import UploadIcon from "@/components/UploadIcon";
import { Location } from "@/types";

export interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div
      key={location.id}
      className="flex w-[390px] flex-col gap-4 overflow-hidden rounded-2xl bg-white shadow-[0px_4px_4px_0px_#00000014]"
    >
      <Image
        src={location.image}
        alt={location.imageAlt}
        width={390}
        height={200}
      />
      <div className="flex flex-1 flex-col justify-between px-4 pt-4 pb-9">
        <div className="flex items-center justify-between">
          <h3 className="text-[2rem] font-bold text-[#404040]">
            {location.name}
          </h3>
          <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#C2C2C2]">
            <UploadIcon />
          </div>
        </div>
        <address className="border-t border-[#D7D7D7] pt-2 text-sm not-italic">
          <p>{location.addressLine1}</p>
          <p>{location.addressLine2}</p>
          <p>{location.addressLine3}</p>
        </address>
        <p className="pt-3 text-xs text-black/40">
          Head Groomer: {location.groomerName}
        </p>
      </div>
    </div>
  );
}
