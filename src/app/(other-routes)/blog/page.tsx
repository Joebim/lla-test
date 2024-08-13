import Link from "next/link";

import blogArticlesData from "./articles/data";

export default function Blog() {
  return (
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
      </div>
      <div className="h-[57px] bg-[#f8fafb] lg:h-[104px]"></div>
    </div>
  );
}
