import { FC, ReactNode } from "react";

interface IProperties {
  children: ReactNode;
  title: string;
  btn?: ReactNode;
}
const SettingsCard: FC<IProperties> = ({ children, title, btn }) => {
  return (
    <div className="rounded-[12px] border bg-white md:rounded-[16px]">
      <div
        className={`flex items-center rounded-tl-[16px] rounded-tr-[16px] bg-primary-10 p-5 ${btn ? "justify-between" : "justify-start"}`}
      >
        <h2 className="text-xl font-semibold capitalize text-secondary-120">
          {title}
        </h2>
        {btn && btn}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default SettingsCard;
