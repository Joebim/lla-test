import { ReactElement } from "react";

interface ComponentProperties {
  icon: ReactElement;
  text: string;
}

const MinBadgeCounter = ({ icon, text }: ComponentProperties) => {
  return (
    <>
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent-black-5">
          {icon}
        </div>

        <div
          className="mt-1 text-base text-secondary-110"
          style={{ fontFamily: "Axiforma" }}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default MinBadgeCounter;
