import Link from "next/link";

interface BlogCard {
  title: string;
  date: string;
  duration: string;
  image: string;
  slug: string;
}

const blogData: BlogCard[] = [
  {
    title: "Useful Spanish Phrases To Learn",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-1.png",
    slug: "useful-spanish-phrases",
  },
  {
    title: "Benefits of AI In Language Learning",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-2.png",
    slug: "benefits-of-ai-in-language-learning",
  },
  {
    title: "The Secret To Learning A Language In 2 Weeks",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-3.png",
    slug: "secret-to-learning-language-in-2-weeks",
  },
  {
    title: "The Truth About Foreign Language Learning Apps",
    date: "August 6, 2024",
    duration: "6 min read",
    image: "/blog/blog-img-4.png",
    slug: "truth-about-foreign-language-learning-apps",
  },
];

export default function Blog() {
  return (
    <div>
      <div className="grid gap-[40px] px-[15px] py-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:px-[80px] lg:py-[80px]">
        {blogData.map((data, index) => (
          <Link href={`/articles/${data.slug}`} key={index} className="block">
            <div className="cursor-pointer transition-transform hover:scale-105">
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
          </Link>
        ))}
      </div>
      <div className="h-[57px] bg-[#f8fafb] lg:h-[104px]"></div>
    </div>
  );
}
