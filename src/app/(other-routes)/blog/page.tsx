import Image from "next/image";

import BlogContent from "./blogContent";

export default function Blog() {
  return (
<<<<<<< HEAD
    <div>
      <header className="pb-[32px] pt-[64px] lg:pb-[64px]">
        <h1 className="text-center text-[32px] font-bold lg:text-[64px]">
          Blog
        </h1>
      </header>
      <div className="grid gap-[40px] px-[15px] py-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:px-[80px] lg:py-[80px]">
        {blogArticlesData.map((data, index) => (
          <Link
            href={`/blog/articles/${data.slug}`}
            key={index}
            className="block"
          >
            <div className="transition-transform cursor-pointer hover:scale-105">
              <div
                className="mb-[32px] h-[264px] bg-cover"
                style={{ backgroundImage: `url(${data.properties.blogImage})` }}
              ></div>
              <h2 className="text-secoondary-120 mb-[24px] font-semibold lg:text-[20px]">
                {data.name}
              </h2>
              <div className="flex items-center gap-[10px] text-[14px] lg:text-[16px]">
                <p>{data.properties.date}</p>
                <div className="h-[6.67px] w-[6.67px] rounded-full bg-primary-110"></div>
                <p>{data.properties.readDuration} min read</p>
              </div>
            </div>
          </Link>
        ))}
=======
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
>>>>>>> a24f69d5faba551075a29f6ca2fb62030b84a014
      </div>

      <div>
        <BlogContent />
        <div className="h-[57px] bg-[#f8fafb] lg:h-[104px]"></div>
      </div>
    </>
  );
}
