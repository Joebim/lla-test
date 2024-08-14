"use client";

import { ChangeEvent, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import ContactInput from "./ContactInput";
import Map from "./Map";

const ThirdHero = () => {
  const [isUserTyping, setIsUserTyping] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setIsUserTyping(value.length > 0);
  };

  return (
    <article className="mx-auto w-full max-w-[1734px] bg-secondary-120 px-[11px] py-[17px] lg:px-[40px] lg:py-[80px]">
      <div className="border-[8px] border-solid border-transparent-white-15 bg-white">
        <div className="mx-auto flex w-full max-w-[1392px] flex-col gap-[23px] border-[16px] border-solid border-[#FFFFFFCC] p-[24px] lg:gap-[34px] lg:p-[48px]">
          <div className="text-center font-axiformaSemiBold font-semibold text-secondary-120">
            <h1 className="whitespace-nowrap text-[24px] leading-[36px] tracking-[0.02em] md:text-[48px] md:leading-[72px] lg:tracking-[0.06em]">
              Get in <span className="text-primary-100">Touch</span>
            </h1>
            <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
              Whether you have a question, feedback, or need assistance, our
              team is here to help.
            </p>
          </div>

          {/* Input */}
          <div className="flex w-full max-w-[1310px] gap-[80px]">
            {/* form */}
            <div className="w-full shrink-0 lg:w-[calc(50%-40px)]">
              <form className="flex flex-col gap-[45px]">
                <div className="flex flex-col gap-[24px]">
                  <ContactInput
                    label="Your Name"
                    type="text"
                    placeholder="John Doe"
                    name="name"
                  />
                  <ContactInput
                    label="Your Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    name="email"
                  />

                  <div className="">
                    <label
                      htmlFor="message"
                      className="font-axiformaSemiBold text-[16px] font-semibold leading-[24px] text-secondary-120"
                    >
                      Your Message
                    </label>
                    <div className="flex h-[78px] flex-col rounded-[10px] border border-solid border-neutral-40 bg-neutral-20 px-[12px] py-[10px] font-axiforma text-[18px] capitalize leading-[28px] text-secondary-70">
                      <textarea
                        name="message"
                        id="message"
                        onChange={handleChange}
                        required
                        placeholder="Let us know how we can help you"
                        className={`w-full resize-none bg-transparent text-[14px] leading-[20px] outline-none ${isUserTyping ? "h-full" : ""}`}
                      ></textarea>
                      {!isUserTyping && (
                        <p className="text-end text-[16px] leading-[24px]">
                          0/15 words
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <CustomButton
                  variant="primary"
                  type="submit"
                  className="flex min-h-[48px] w-full items-center justify-center rounded-[59px] border-b border-solid border-primary-120 bg-primary-100 px-[24px] py-[10px] font-axiformaBold text-[16px] font-bold leading-[24px] text-white md:text-[20px] md:leading-[30px] lg:px-[32px]"
                >
                  SEND
                </CustomButton>
              </form>
              {/* contact type */}
            </div>
            {/* Map */}
            <Map />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThirdHero;
