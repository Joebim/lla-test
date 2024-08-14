import Link from "next/link";

import blogArticlesData from "~/app/(other-routes)/blog/articles/data";
import CustomButton from "../common/common-button/common-button";

const HomeBlog = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-white p-5 pt-14 md:p-10">
      <div className="w-full place-content-center place-items-center items-center justify-center gap-3 gap-y-10 place-self-center border-[4px] border-secondary-20 bg-secondary-120 p-5 pt-5 md:p-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="w-12 text-[24px] font-bold text-white md:w-full">
            Blog Posts
          </h1>
          <Link href="/blog">
            <CustomButton
              variant="primary"
              className="rounded-full bg-white px-4 text-secondary-120 transition-colors hover:bg-primary-100 hover:text-white"
            >
              Keep Reading
            </CustomButton>
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 border-[6px] border-[#FFFFFFCC] bg-white md:grid-cols-3 md:gap-6 md:p-4">
          {blogArticlesData.slice(0, 3).map((data, index) => (
            <Link
              href={`/blog/articles/${data.slug}`}
              key={index}
              className="block"
            >
              <div className="cursor-pointer p-4 transition-transform hover:scale-105">
                <div
                  className="mb-[20px] h-[200px] rounded-md border border-gray-300 bg-cover"
                  style={{
                    backgroundImage: `url(${data.properties.blogImage})`,
                  }}
                ></div>
                <h2 className="mb-[16px] font-semibold text-secondary-120 lg:text-[18px]">
                  {data.name}
                </h2>
                <div className="flex items-center gap-4 text-[14px] lg:text-[16px]">
                  <p>{data.properties.date}</p>
                  <div className="h-[6px] w-[6px] rounded-full bg-primary-110"></div>
                  <p>{data.properties.readDuration} min read</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
