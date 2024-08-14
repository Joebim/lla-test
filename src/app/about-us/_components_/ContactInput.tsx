type InputProperties = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ContactInput: React.FC<InputProperties> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
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
        value={value}
        onChange={onChange}
        className="w-full rounded-[10px] border border-solid border-neutral-40 bg-neutral-20 px-[12px] py-[20px] font-axiforma text-[18px] capitalize leading-[28px] text-neutral-80 outline-none"
      />
    </div>
  );
};

export default ContactInput;
