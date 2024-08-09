import Image from "next/image";
import Link from "next/link";

import FourthHero from "../_components_/FourthHero";
import blogArticlesData from "../data";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = blogArticlesData.find(
    (article) => article.slug === params.slug,
  );

  const otherBlogs = blogArticlesData.filter(
    (blog) => blog.slug !== params.slug,
  );

  return (
    <main>
      <header className="flex w-full flex-col items-center gap-[10px] bg-secondary-120 p-[12px] lg:p-[40px]">
        <div className="flex w-full flex-col gap-[48px] border-transparent-white-15 bg-white p-[12px] md:pb-[48px] lg:gap-[64px] lg:border-[8px] lg:border-solid">
          <section className="px-0 text-left sm:px-[8%] md:px-[13%]">
            <h1 className="text-[20px] font-bold tracking-[0.06em] sm:text-2xl">
              {article?.name}
            </h1>
            <div className="mt-[12px] flex items-center gap-4">
              {article?.properties.type && (
                <>
                  <h6 className="text-sm">{article?.properties.type}</h6>
                  <div className="h-2 w-2 rounded-full bg-primary-100"></div>
                </>
              )}
              <h6 className="text-sm">{article?.properties.date}</h6>
              <div className="h-2 w-2 rounded-full bg-primary-100"></div>
              <h6 className="text-sm">
                {article?.properties.readDuration} min read
              </h6>
            </div>
          </section>
          <section className="mt-6 flex w-full justify-center px-0 sm:px-[8%] md:px-[13%]">
            <div className="w-full">
              <Image
                src={article?.properties.blogImage as string}
                layout="responsive"
                width={1000}
                height={800}
                alt="Articles Hero Image"
                className="h-auto w-full"
              />
            </div>
          </section>
        </div>
      </header>
      <section>
        <div className="bg-neutral-5 px-[5%] py-10 text-left text-[14px] leading-tight sm:px-[8%] sm:text-[18px] md:px-[13%]">
          <>
            {article?.properties.hasFirstDesc && (
              <>
                <p>
                  {article?.properties.subSection?.subSectionDescriptionOne}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionTwo}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionThree}
                </p>
              </>
            )}
          </>
          {article?.properties.isProuounciation === false && (
            <div className="mt-6">
              <h2 className="text-[17px] font-bold md:text-[23px]">
                {article?.properties.articleTitle?.articleSubtitleOne}
              </h2>
            </div>
          )}
          <>
            {article?.properties.haFirtHeaderAndDesc && (
              <>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionOne}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionTwo}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionThree}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionFour}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionFive}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionSix}
                </p>
                <p className="mt-6">
                  {article?.properties.subSection?.subSectionDescriptionSeven}
                </p>
              </>
            )}
          </>
          <>
            {article?.properties.includesCommonSpanishPhrases === false ? (
              <div>
                <div className="mt-6">
                  <h2 className="text-[17px] font-bold md:text-[23px]">
                    {article?.properties.articleTitle?.articleSubtitleTwo}
                  </h2>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">
                    {article?.properties?.subTitles?.subtitleOne}
                  </h3>
                  <p className="mt-6">
                    {article?.properties.descriptions?.descriptionOne}
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">
                    {article?.properties?.subTitles?.subtitleTwo}
                  </h3>
                  <p className="mt-6">
                    {article?.properties.descriptions?.descriptionTwo}
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">
                    {article?.properties?.subTitles?.subtitleThree}
                  </h3>
                  <p className="mt-6">
                    {article?.properties.descriptions?.descriptionThree}
                  </p>
                  <p className="mt-6">
                    {article?.properties.descriptions?.descriptionFour}
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">
                    {article?.properties?.subTitles?.subtitleFour}
                  </h3>
                  <p className="mt-6">
                    {article?.properties.descriptions?.descriptionFive}
                  </p>
                  <p className="mt-6">
                    {article?.properties.descriptions?.descriptionSix}
                  </p>
                </div>
              </div>
            ) : (
              <>
                {article?.properties.subTitles?.isNumbered ? (
                  <ul className="list-decimal">
                    <li>
                      <h3 className="mt-6 font-semibold">
                        {article?.properties?.subTitles?.subtitleOne}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.descriptions?.descriptionOne}
                      </p>
                      {article?.properties.hasTwoFirstLine === true && (
                        <p className="mt-6">
                          {article?.properties.descriptions?.descriptionTwo}
                        </p>
                      )}
                    </li>
                    <li className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleTwo}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionThree
                          : article?.properties.descriptions?.descriptionTwo}
                      </p>
                    </li>
                    <li className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleThree}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionFour
                          : article?.properties.descriptions?.descriptionThree}
                      </p>
                    </li>
                    <li className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleFour}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionFive
                          : article?.properties.descriptions?.descriptionFour}
                      </p>
                    </li>
                    <li className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleFive}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionSix
                          : article?.properties.descriptions?.descriptionFive}
                      </p>
                    </li>
                  </ul>
                ) : (
                  <>
                    <div>
                      <h3 className="mt-6 font-semibold">
                        {article?.properties?.subTitles?.subtitleOne}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.descriptions?.descriptionOne}
                      </p>
                      {article?.properties.hasTwoFirstLine === true && (
                        <p className="mt-6">
                          {article?.properties.descriptions?.descriptionTwo}
                        </p>
                      )}
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleTwo}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionThree
                          : article?.properties.descriptions?.descriptionTwo}
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleThree}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionFour
                          : article?.properties.descriptions?.descriptionThree}
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleFour}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionFive
                          : article?.properties.descriptions?.descriptionFour}
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold">
                        {article?.properties?.subTitles?.subtitleFive}
                      </h3>
                      <p className="mt-6">
                        {article?.properties.hasTwoFirstLine === true
                          ? article?.properties.descriptions?.descriptionSix
                          : article?.properties.descriptions?.descriptionFive}
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </>
          <>
            {article?.properties.includesCommonSpanishPhrases === true && (
              <div className="mt-6">
                <h2 className="text-[17px] font-bold md:text-[23px]">
                  {article?.properties.articleTitle?.articleSubtitleTwo}
                </h2>
                <p className="mt-6">
                  {article?.properties.subDescriptions?.subDescriptionOne}
                </p>
                <p className="mt-6">
                  {article?.properties.subDescriptions?.subDescriptionTwo}
                </p>
              </div>
            )}
          </>
          <div>
            {article?.properties.isProuounciation === true && (
              <section>
                <div className="space-y-6">
                  <p>
                    {article?.properties.subSection?.subSectionDescriptionOne}
                  </p>
                  <p>
                    {article?.properties.subSection?.subSectionDescriptionTwo}
                  </p>
                  <p>
                    {article?.properties.subSection?.subSectionDescriptionThree}
                  </p>
                </div>
                <div className="mt-5">
                  <ul className="list-disc space-y-6 px-[5%] sm:px-[3%]">
                    {article.properties.firstPronounciations?.map(
                      (item, index) => (
                        <li key={index}>
                          <p>{item.text}</p>
                          <p>{item.pronounciation}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="mt-6 text-[17px] font-bold md:text-[23px]">
                    {article.properties.articleTitle?.articleSubtitleOne}
                  </h2>
                  <p>{article.properties.descriptions?.descriptionOne}</p>
                  <ul className="list-disc space-y-6 px-[5%] sm:px-[3%]">
                    {article.properties.secondPronounciations?.map(
                      (item, index) => (
                        <li key={index}>
                          <p>{item.text}</p>
                          <p>{item.pronounciation}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="mt-6 text-[17px] font-bold md:text-[23px]">
                    {article.properties.articleTitle?.articleSubtitleTwo}
                  </h2>
                  <p>{article.properties.descriptions?.descriptionTwo}</p>
                  <ul className="list-disc space-y-6 px-[5%] sm:px-[3%]">
                    {article.properties.thirdPronounciations?.map(
                      (item, index) => (
                        <li key={index}>
                          <p>{item.text}</p>
                          <p>{item.pronounciation}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
      <section>
        <FourthHero />
      </section>
      <section className="lg:px-[80px] lg:py-[80px]">
        <div className="mb-[10]">
          <h2 className="text-[25px] font-bold">More Blog Posts</h2>
        </div>
        <div className="grid gap-[40px] px-[15px] py-[40px] sm:grid-cols-2 lg:grid-cols-3">
          {otherBlogs.map((data, index) => (
            <Link
              href={`/blog/articles/${data.slug}`}
              key={index}
              className="block"
            >
              <div className="cursor-pointer transition-transform hover:scale-105">
                <div
                  className="mb-[32px] h-[264px] bg-cover"
                  style={{
                    backgroundImage: `url(${data.properties.blogImage})`,
                  }}
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
      </section>
    </main>
  );
}
