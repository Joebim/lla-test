import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="hidden no-underline outline-none md:block">
        <Image
          src="/navbar/delve-black__desktop.svg"
          // src="/navbar/admin-logo.svg"
          width={156}
          height={48}
          alt="desktop-logo"
        />
      </Link>

      <Link href="/" className="block no-underline outline-none md:hidden">
        <Image
          src="/navbar/Delve-black_mobile.svg"
          width={100}
          height={32}
          alt="mobile-logo"
        />
      </Link>
    </>
  );
};

export default Logo;
