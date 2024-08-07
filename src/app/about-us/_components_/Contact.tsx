import Image from "next/image";

type ContactProperties = {
  image: string;
  type: string;
  contactInfo: string;
};
const Contact: React.FC<ContactProperties> = ({ image, type, contactInfo }) => {
  return (
    <div className="flex items-center gap-[4px] md:gap-[15px]">
      <Image src={image} alt={type} />
      <div className="font-axiformaSemiBold text-[10px] font-semibold leading-[16px] md:text-[14px] md:leading-[20px]">
        <h4 className="truncate uppercase text-secondary-120">{type}</h4>
        <p className="truncate text-primary-110">{contactInfo}</p>
      </div>
    </div>
  );
};
export default Contact;
