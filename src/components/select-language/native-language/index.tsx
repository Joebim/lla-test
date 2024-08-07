"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const languages = [
  { name: "English", flag: "/flags/english_flag.svg" },
  { name: "French", flag: "/flags/french_flag.svg" },
  { name: "German", flag: "/flags/german_flag.svg" },
];

const NativeLanguage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nativeLanguage, setNativeLanguage] = useState<string>(
    "Your native language",
  );
  const [nativeLanguageFlag, setNativeLanguageFlag] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-6">
      <div className="rounded-t-[20px] bg-primary-10 px-5 py-8 font-axiforma text-[18px] font-[500] text-black sm:text-2xl">
        I speak...
      </div>
      <div className="h-auto justify-start gap-2 rounded-b-[20px] p-6 font-axiforma">
        <div className="flex items-start gap-2">
          {nativeLanguageFlag === "" ? (
            <div className="ml-0"></div>
          ) : (
            <Image
              src={nativeLanguageFlag}
              alt={`${nativeLanguageFlag}_flag`}
              width={60}
              height={60}
              objectFit="contain"
              className="mt-4 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
            />
          )}
          <div className="relative flex w-full flex-col sm:gap-1">
            <div className="text-secondary-70">Select your native language</div>
            <div className="flex flex-col items-start justify-start gap-1">
              <button
                type="button"
                onClick={toggleDropdown}
                className="shadow-lg inline-flex w-full items-center justify-between rounded-xl border border-neutral-40 bg-white px-2 py-2 font-axiforma font-normal text-secondary-70 hover:bg-neutral-50 focus:outline-none sm:px-3 sm:py-4 sm:text-[18px]"
              >
                {nativeLanguage}
                {isOpen ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              {isOpen && (
                <div className="shadow-lg z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white sm:w-1/2">
                  <div className="p-2">
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center justify-start p-2"
                        onClick={() => {
                          setNativeLanguage(lang.name);
                          setNativeLanguageFlag(lang.flag);
                          setIsOpen(!isOpen);
                        }}
                      >
                        <div className="mr-2">
                          <Image
                            src={lang.flag}
                            alt={`${nativeLanguage.toLowerCase()}_flag`}
                            width={24}
                            height={24}
                            objectFit="contain"
                          />
                        </div>
                        <div>{lang.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 sm:gap-6 md:gap-8">
          <button className="rounded-[59px] border border-secondary-30 bg-neutral-10 px-3 py-2 text-xs text-secondary-30 sm:px-8 sm:py-4 sm:text-sm">
            Discard Changes
          </button>
          <button className="rounded-[59px] border border-primary-60 bg-primary-40 px-3 py-2 text-xs text-transparent-white-50 sm:px-8 sm:py-4 sm:text-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NativeLanguage;
