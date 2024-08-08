import { cn } from "~/lib/utils";

export const GroupIcon = () => {
  return (
    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#EB7B9C]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M16.5 21V19C16.5 17.9391 16.0786 16.9217 15.3284 16.1716C14.5783 15.4214 13.5609 15 12.5 15H6.5C5.43913 15 4.42172 15.4214 3.67157 16.1716C2.92143 16.9217 2.5 17.9391 2.5 19V21"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 21.0028V19.0028C22.4993 18.1165 22.2044 17.2556 21.6614 16.5551C21.1184 15.8547 20.3581 15.3544 19.5 15.1328"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 3.13281C17.3604 3.35311 18.123 3.85351 18.6676 4.55512C19.2122 5.25673 19.5078 6.11964 19.5078 7.00781C19.5078 7.89598 19.2122 8.75889 18.6676 9.4605C18.123 10.1621 17.3604 10.6625 16.5 10.8828"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const ElectricIcon = () => {
  return (
    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#F9F9C3]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
      >
        <path
          d="M21 10H17L14 19L8 1L5 10H1"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const PersonInactiveIcon = () => {
  return (
    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#BCEBD2]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M16.5 21V19C16.5 17.9391 16.0786 16.9217 15.3284 16.1716C14.5783 15.4214 13.5609 15 12.5 15H6.5C5.43913 15 4.42172 15.4214 3.67157 16.1716C2.92143 16.9217 2.5 17.9391 2.5 19V21"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 8L22.5 13"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 8L17.5 13"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const PersonDisabledIcon = () => {
  return (
    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#B1C2D5]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 11H16"
          stroke="#1B1B1B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const ExpandMore = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
    >
      <path
        d="M1 1.5L7 7.5L13 1.5"
        stroke="#525252"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FilterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
    >
      <path
        d="M18.3346 1H1.66797L8.33464 8.88333V14.3333L11.668 16V8.88333L18.3346 1Z"
        stroke="#525252"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
    >
      <path
        d="M5.5 11L0.5 6L5.5 1"
        stroke="#09090B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronRight = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
    >
      <path
        d="M0.5 11L5.5 6L0.5 1"
        stroke="#09090B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
