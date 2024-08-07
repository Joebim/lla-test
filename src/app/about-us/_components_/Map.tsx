import Image from "next/image";

import facebook from "../../../../public/images/aboutAsset/fb.png";
import ig from "../../../../public/images/aboutAsset/ig.png";
import linkeIn from "../../../../public/images/aboutAsset/linked.png";
import map from "../../../../public/images/aboutAsset/Map.jpg";

const Map = () => {
  return (
    <div className="hidden max-w-[597px] rounded-[16px] rounded-b-none lg:flex">
      <Image src={map} alt="map" className="h-full w-[90%] object-cover" />
      <div className="flex h-[180px] w-[52px] flex-col gap-[40px] self-end rounded-br-[24px] rounded-tr-[8px] bg-primary-100 px-[12px] py-[8px]">
        <Image src={facebook} alt="facebook" className="h-full w-full" />
        <Image src={linkeIn} alt="linkedIn" className="h-full w-full" />
        <Image src={ig} alt="ig" className="h-full w-full" />
      </div>
    </div>
  );
};
export default Map;
