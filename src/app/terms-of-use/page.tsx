import Footer from "~/components/footer/Footer";
import LightNav from "~/components/light-navbar/LightNav";
import termsOfUse from "./data";

const TermsOfUse = () => {
  return (
    <>
      <section className="flex w-full flex-col gap-[10px] border-b border-solid bg-secondary-120 px-6">
        <article className="flex w-full flex-col gap-[64px] bg-white px-6 pb-[40px] md:border-[8px] md:border-solid md:border-transparent-white-15">
          <LightNav className="relative mx-auto w-full max-w-[1654px] bg-white" />
          <header
            className="flex w-full flex-col items-center gap-[32px]"
            style={{ boxShadow: "0px -1px 4px 0px #00000012 inset" }}
          >
            <h1 className="font-axiformaSemiBold text-[32px] font-bold leading-[48px] tracking-[0.02em] md:text-[64px] md:leading-[96px] md:tracking-[0.06em]">
              Terms of Use
            </h1>
            <div className="rounded-[59px] border border-solid border-neutral-40 px-[32px] py-[14px]">
              <p className="font-axiforma text-[16px] leading-[24px]">
                Last updated:{" "}
                <strong className="whitespace-nowrap">04 August, 2024</strong>
              </p>
            </div>
          </header>

          <div className="flex w-full flex-col gap-[32px] bg-white py-[15px] md:border-[8px] md:border-solid md:border-transparent-black-25 md:p-[32px] lg:gap-[64px]">
            {termsOfUse.map((items) => {
              const { id, text, infoList, subBody } = items;
              return (
                <div key={id} className="">
                  {/* INTRODUCTION */}
                  <h3 className="font-axiformaSemiBold text-[28px] font-semibold leading-[32px] tracking-[0.04em] sm:text-[40px] md:text-[34px] md:leading-[60px]">
                    {text}
                  </h3>
                  {infoList && (
                    <p className="font-axiforma text-[16px] leading-[24px] tracking-[-0.01em] lg:text-[20px] lg:leading-[32px]">
                      {infoList}
                    </p>
                  )}

                  {subBody && (
                    <div className="flex flex-col gap-[15px] md:gap-[32px]">
                      {subBody.map((sub) => {
                        const { id, header, subInfoList, listArray } = sub;
                        return (
                          <div key={id} className="flex flex-col gap-[32px]">
                            <h3 className="font-axiformaBold text-[20px] font-bold capitalize leading-[28px] tracking-[0.04em] md:text-[24px] md:leading-[32px]">
                              {header}
                            </h3>
                            <p className="font-axiforma text-[16px] leading-[24px] tracking-[-0.01em] md:text-[20px] md:leading-[28px]">
                              {subInfoList}
                            </p>
                            <ul className="pl-8 font-axiforma text-[16px] leading-[24px] md:text-[20px] md:leading-[32px]">
                              {listArray.map((listItem) => (
                                <li
                                  className="mb-[32px] ml-1 !list-disc pl-1 tracking-[0.01em]"
                                  key={listItem.topic}
                                >
                                  <strong className="mr-2 tracking-[0.02em]">
                                    {listItem.topic}:
                                  </strong>
                                  {listItem.topicText}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default TermsOfUse;
