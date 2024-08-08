const blogData: BlogCard[] = [
  {
    title: "Useful Spanish Phrases To Learn",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-1.png",
  },
  {
    title: "Benefits of AI In Language Learning",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-2.png",
  },
  {
    title: "The Secret To Learning A Language In 2 Weeks",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-3.png",
  },
  {
    title: "The Truth About Foreign Language Learning Apps",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-4.png",
  },
];

export default function Blog() {
  return (
    <div>
      <header className="pb-[32px] pt-[64px] lg:pb-[64px]">
        <h1 className="text-center text-[32px] font-bold lg:text-[64px] ">
          Blog
        </h1>
      </header>
      <div className="px-[15px] pb-[80px] lg:px-[80px]">
        <div className="h-[320px] border-r-[8px] border-r-[#c7c7c7] bg-[url('/blog/blog-hero.png')] bg-cover lg:h-[477px]"></div>
      </div>
      <div className="grid gap-[40px] px-[15px] py-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:px-[80px] lg:py-[80px]">
        {blogData.map((data, index) => (
          <div key={index} className="">
            <div
              className="mb-[32px] h-[264px] bg-cover"
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>
            <h2 className="text-secoondary-120 mb-[24px] font-semibold lg:text-[20px]">
              {data.title}
            </h2>
            <div className="flex items-center gap-[10px] text-[14px] lg:text-[16px]">
              <p>{data.date}</p>
              <div className="h-[6.67px] w-[6.67px] rounded-full bg-primary-110"></div>
              <p>{data.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[57px] bg-[#f8fafb] lg:h-[104px]"></div>
    </div>
  );
}

interface BlogCard {
  title: string;
  date: string;
  duration: string;
  image: string;
}
