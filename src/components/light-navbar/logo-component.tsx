import Image from "next/image";
import Link from "next/link";

import { TransitionLink } from "../miscellaneous/transition-link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="hidden no-underline outline-none md:block">
        <Image
          src="/navbar/delve-black__desktop.svg"
          width={120}
          height={38}
          alt="desktop-logo"
        />
      </Link>

      <TransitionLink
        href="/"
        className="block no-underline outline-none md:hidden"
      >
        <Image
          src="/navbar/Delve-black_mobile.svg"
          width={120}
          height={38}
          alt="mobile-logo"
        />
      </TransitionLink>
    </>
  );
};

export default Logo;
