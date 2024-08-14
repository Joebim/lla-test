import Link from "next/link";

import blogArticlesData from "./articles/data";

const BlogContent = () => {
  return (
    <div>
      <div className="grid gap-[40px] px-[15px] py-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:px-[80px] lg:py-[80px]">
        {blogArticlesData.map((data, index) => (
          <Link
            href={`/blog/articles/${data.slug}`}
            key={index}
            className="block"
          >
            <div className="cursor-pointer transition-transform hover:scale-105">
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
    </div>
  );
};

export default BlogContent;
