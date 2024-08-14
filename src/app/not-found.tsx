"use client";

import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Particles404 from "~/components/error/Particles404";
import { TransitionLink } from "~/components/miscellaneous/transition-link";
import { animatePageOut } from "~/lib/animations";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <section className="grid h-screen w-full place-items-center bg-black">
      <div className="fixed left-0 top-0 min-h-[100dvh] w-screen bg-black" />
      <Particles404 />
      <div className="pointer-events-none relative z-30 flex flex-col items-center gap-y-6">
        <p className="w-fit pt-2 text-center font-medium uppercase text-[#f97415] backdrop-blur-xl sm:text-2xl md:text-3xl lg:text-4xl lg:font-bold xl:font-bold">
          Page Not Found
        </p>
        <Image
          src="/404.gif"
          alt="404"
          width={480}
          height={204}
          unoptimized
          loading="eager"
          priority
        />
        <div className="flex w-full items-center justify-center gap-x-4 text-[#f97415]">
          <TransitionLink
            href="#"
            onClick={() => router.back()}
            className="transition-colors pointer-events-auto flex items-center gap-x-2 rounded-xl border border-[#f97415] bg-black px-4 py-2 duration-300 hover:text-white"
          >
            <ArrowLeft className="size-5 xl:size-6" />
            Back
          </TransitionLink>
          <Link
            href="/"
            onClick={() => animatePageOut("/", router)}
            className="transition-colors pointer-events-auto flex items-center gap-x-2 rounded-xl border border-[#f97415] bg-black px-4 py-2 duration-300 hover:text-white"
          >
            <Home className="size-5 xl:size-6" />
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
