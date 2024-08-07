type InputProperties = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
};

const ContactInput: React.FC<InputProperties> = ({
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <label
        htmlFor={name}
        className="font-axiformaSemiBold text-[14px] font-semibold leading-[20px] text-secondary-120 md:text-[16px] md:leading-[24px]"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        id={name}
        className="w-full rounded-[10px] border border-solid border-neutral-40 bg-neutral-20 px-[12px] py-[20px] font-axiforma text-[18px] capitalize leading-[28px] text-neutral-80 outline-none"
      />
    </div>
  );
};
export default ContactInput;
