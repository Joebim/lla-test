import BlogContent from "./blogContent";

export default function Blog() {
  return (
    <div>
      <header className="flex flex-col items-center gap-8 pb-[32px] pt-[64px] text-center lg:pb-[64px]">
        <h1 className="font-axiformaBold text-4xl md:text-5xl lg:text-6xl">
          Blog
        </h1>
      </header>
      <BlogContent />
      <div className="h-[57px] bg-[#f8fafb] lg:h-[104px]"></div>
    </div>
  );
}
