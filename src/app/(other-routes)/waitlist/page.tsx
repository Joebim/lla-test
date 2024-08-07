import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import {
  ellipse1,
  ellipse2,
  ellipse3,
  ellipse4,
  left,
  right,
} from "../../../../public/images/waitlist/utils";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center px-[5%] pt-[30%] text-center lg:min-h-screen lg:px-0 lg:pt-[10%]">
      <div className="mx-auto mt-5 w-full max-w-2xl px-10 py-4">
        <h1 className={`font-lilita text-3xl font-normal lg:text-5xl`}>
          Don&apos;t miss out, join the queue and get to know first
        </h1>
      </div>
      <div className="shadow-lg relative mx-auto mt-5 w-full max-w-xl rounded-xl bg-white px-7 pb-10 shadow-neutral-70 backdrop-blur-sm">
        <div className="flex w-full flex-col pt-10 text-left">
          <h3 className={`font-lilita text-3xl font-light`}>
            Join the waitlist
          </h3>
          <p className="mt-4 text-lg text-neutral-100 lg:w-2/3">
            Be the first to experience our new features. Sign up now to stay
            updated!
          </p>
          <form className="relative mt-6 flex flex-col items-center justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-4 py-5"
            />
            <CustomButton className="absolute right-5" variant="secondary">
              Get Access
            </CustomButton>
          </form>
          <div className="relative mt-6 flex items-center lg:gap-3">
            <div className="left-0 flex -space-x-5">
              <Image
                src={ellipse1}
                alt="Profile 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={ellipse2}
                alt="Profile 2"
                width={40}
                height={40}
                className="-ml-4 rounded-full border-2 border-white"
              />
              <Image
                src={ellipse3}
                alt="Profile 3"
                width={40}
                height={40}
                className="-ml-4 rounded-full border-2 border-white"
              />
              <Image
                src={ellipse4}
                alt="Profile 3"
                width={40}
                height={40}
                className="-ml-4 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-lg text-neutral-100">
              Join the 2000+ others waiting.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 mb-4 ml-4 hidden lg:flex">
        <Image src={left} alt="Left Character" width={200} height={200} />
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4 hidden lg:flex">
        <Image src={right} alt="Right Character" width={200} height={200} />
      </div>
    </div>
  );
}
