"use clinet";

import Image from "next/image";
import { useEffect, useState } from "react";

import MinBadgeCounter from "./MinBadgeCounter";

const FireIcon = () => {
  return (
    <Image
      src="/images/fire_svgrepo.com.svg"
      width={24}
      height={24}
      alt="svg fire icon"
    />
  );
};

const LanguageTranslaor = () => {
  return (
    <Image
      src="/images/language_translator.svg"
      width={24}
      height={24}
      alt="svg translator icon"
    />
  );
};

const WelcomeBanner = () => {
  const [username, setUsername] = useState<string>("");

  // set default username (using this for now, since no api to call at the momment)
  useEffect(() => {
    // set default username
    setUsername("Desmond");
  }, []);

  return (
    <div className="mt-6 hidden w-full rounded-3xl bg-white p-4 ring-1 ring-neutral-40 md:mt-0 md:block">
      <div className="flex flex-row md:items-center">
        <div className="mr-auto">
          <h1
            style={{ fontFamily: "Axiforma-Bold" }}
            className="text-xl capitalize leading-9 text-black md:text-2xl"
          >
            Welcome back, <span className="text-primary-100">{username}</span>
          </h1>
        </div>

        <div className="flex flex-row items-center gap-6">
          <MinBadgeCounter text="4 days" icon={<FireIcon />} />
          <MinBadgeCounter text="48+ Words" icon={<LanguageTranslaor />} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
