import Image from "next/image";

import { TransitionLink } from "../miscellaneous/transition-link";

const LogoFooter = () => {
  return (
    <>
      <TransitionLink
        href="/"
        className="hidden no-underline outline-none md:block p-0"
      >
        <Image
          src="/navbar/delve-darknav_logo.svg"
          width={100}
          height={32}
          alt="desktop-logo"
        />
      </TransitionLink>

      <TransitionLink
        href="/"
        className="block no-underline outline-none md:hidden px-0 "
      >
        <Image
          src="/navbar/delve-darknav_logo.svg"
          width={100}
          height={32}
          alt="mobile-logo"
        />
      </TransitionLink>
    </>
  );
};

export default LogoFooter;
