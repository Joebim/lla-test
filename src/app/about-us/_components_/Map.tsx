import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

import map from "../../../../public/images/aboutAsset/Map.jpg";

const Map = () => {
  return (
    <div className="hidden shrink-0 rounded-[16px] rounded-b-none lg:flex lg:w-[calc(50%-40px)]">
      <Image src={map} alt="map" className="h-full w-[92%] object-cover" />
      <div className="flex h-auto max-h-[180px] w-[8%] flex-col items-center justify-center gap-[40px] self-end rounded-br-[24px] rounded-tr-[8px] bg-primary-100 px-[12px] py-[8px]">
        <Facebook size={14} color="white" />
        <Linkedin size={14} color="white" />
        <Instagram size={14} color="white" />
      </div>
    </div>
  );
};
export default Map;
