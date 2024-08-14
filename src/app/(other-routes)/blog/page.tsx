import Image from "next/image";

import BlogContent from "./blogContent";

export default function Blog() {
  return (
    <>
      <div className="w-full bg-secondary-100 p-4 sm:p-6 md:p-10">
        <div className="w-full bg-white px-4 py-20 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 lg:gap-14">
            <h1 className="font-axiformaBold text-4xl md:text-5xl lg:text-6xl">
              Blog
            </h1>
            <Image
              src="/images/landing/blog.png"
              alt="blog image"
              width={1000}
              height={400}
              className="h-24 w-full border-4 border-[#21212140] object-cover md:h-[477px]"
            />
          </div>
        </div>
      </div>

      <div>
        <BlogContent />
        <div className="h-[57px] bg-[#f8fafb] lg:h-[104px]"></div>
      </div>
    </>
  );
}
