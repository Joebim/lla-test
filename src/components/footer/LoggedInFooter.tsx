import Image from "next/image";

export default function LoggedInFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-[30px] bg-white px-[20px] py-[30px] font-[400] text-black sm:flex-row sm:gap-0 sm:p-0 sm:px-[80px]">
      <div className="flex flex-col items-center gap-[20px] text-white sm:flex-row">
        <Image
          src={"/navbar/Delve-black_mobile.svg"}
          width={50}
          height={48}
          alt="desktop-logo"
        />
        <p className="text-[12px] text-secondary-100">
          Your go-to language learning app.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px] text-[12px] text-secondary-120 sm:flex-row sm:gap-[28px]">
        <a href="/about-us" className="hover:text-[#000000]">
          About Us
        </a>
        <a href="/about-us" className="hover:text-[#000000]">
          Contact Us
        </a>
        <a href="/how-it-works" className="hover:text-[#000000]">
          How It Works
        </a>
        <a href="/privacy" className="hover:text-[#000000]">
          Privacy Policy
        </a>
      </div>

      <div className="flex items-center justify-center rounded-full">
        <p className="text-[12px] text-secondary-100">
          2024 © Delve. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
