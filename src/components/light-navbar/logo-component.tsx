import Image from "next/image";

import { TransitionLink } from "../miscellaneous/transition-link";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link
        href="/"
        className="hidden no-underline outline-none md:block"
      >
        <Image
          src="/navbar/delve-black__desktop.svg"
          width={100}
          height={32}
          alt="desktop-logo"
        />
      </Link>

      <TransitionLink
        href="/"
        className="block no-underline outline-none md:hidden"
      >
        <Image
          src="/navbar/Delve-black_mobile.svg"
          width={100}
          height={32}
          alt="mobile-logo"
        />
      </TransitionLink>
    </>
  );
};

export default Logo;
