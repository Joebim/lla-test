"use client";

import { ChevronDown, ChevronUp, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const allLanguages = [
  { name: "English", flag: "/flags/english_flag.svg" },
  { name: "French", flag: "/flags/french_flag.svg" },
  { name: "German", flag: "/flags/german_flag.svg" },
];

const LearningLanguage = () => {
  const [openIndex, setOpenIndex] = useState<number | undefined>();
  const [selectedLanguages, setSelectedLanguages] = useState<
    { name: string; flag: string }[]
  >([]);

  const toggleDropdown = (index: number) => {
    setOpenIndex((previousIndex) =>
      previousIndex === index ? undefined : index,
    );
  };

  const handleDropdownClick =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      toggleDropdown(index);
    };

  const addLanguage = () => {
    setSelectedLanguages([
      ...selectedLanguages,
      { name: "Select Language", flag: "" },
    ]);
  };

  const removeLanguage = (index: number) => {
    setSelectedLanguages((previous) =>
      previous.filter((_, index_) => index_ !== index),
    );
    if (openIndex === index) {
      setOpenIndex(undefined);
    }
  };

  const updateLanguage = (
    index: number,
    lang: { name: string; flag: string },
  ) => {
    const updatedLanguages = [...selectedLanguages];
    updatedLanguages[index] = lang;
    setSelectedLanguages(updatedLanguages);
    setOpenIndex(undefined);
  };

  const availableLanguages = allLanguages.filter(
    (lang) =>
      !selectedLanguages.some((selected) => selected.name === lang.name),
  );

  return (
    <div className="m-6">
      <div className="rounded-t-[20px] bg-primary-10 px-5 py-8 font-axiforma text-[18px] font-[500] text-black sm:text-2xl">
        I want to learn...
      </div>
      <div className="h-auto justify-start gap-2 rounded-b-[20px] p-6 font-axiforma">
        {selectedLanguages.length === 0 ? (
          <div className="new-lang flex items-start gap-2">
            <div className="mr-2">
              <Image
                src="/flags/french_flag.svg"
                alt={`default_flag`}
                width={60}
                height={60}
                objectFit="contain"
                className="mt-4 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
              />
            </div>
            <div className="relative flex w-full flex-col sm:gap-1">
              <div className="text-sm text-secondary-70 sm:text-base">
                Select the language you want to learn
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <button
                  type="button"
                  onClick={toggleDropdown.bind(undefined, -1)}
                  className="shadow-lg inline-flex w-full items-center justify-between rounded-xl border border-neutral-40 bg-white px-2 py-2 font-axiforma font-normal text-secondary-70 hover:bg-neutral-50 focus:outline-none sm:px-3 sm:py-4 sm:text-[18px]"
                >
                  French
                  {openIndex === -1 ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </button>
                {openIndex === -1 && (
                  <div className="shadow-lg z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white sm:w-1/2">
                    <div className="p-2">
                      {availableLanguages.map((lang, index) => (
                        <div
                          key={index}
                          className="flex cursor-pointer items-center justify-start p-2"
                          onClick={() => updateLanguage(0, lang)}
                        >
                          <div className="mr-2">
                            <Image
                              src={lang.flag}
                              alt={`${lang.name}_flag`}
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
        ) : (
          selectedLanguages.map((lang, index) => (
            <div className="new-lang mb-5 flex items-start gap-2" key={index}>
              {lang.flag === "" ? (
                <div className="ml-0"></div>
              ) : (
                <Image
                  src={lang.flag}
                  alt={`${lang.name}_flag`}
                  width={60}
                  height={60}
                  objectFit="contain"
                  className="mt-4 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
                />
              )}
              <div className="relative flex w-full flex-col sm:gap-1">
                <div className="text-sm text-secondary-70 sm:text-base">
                  Select the language you want to learn
                </div>
                <div className="flex flex-col items-start justify-start gap-1">
                  <button
                    type="button"
                    onClick={handleDropdownClick(index)}
                    className="shadow-lg inline-flex w-full items-center justify-between rounded-xl border border-neutral-40 bg-white px-2 py-2 font-axiforma font-normal text-secondary-70 hover:bg-neutral-50 focus:outline-none sm:px-3 sm:py-4 sm:text-[18px]"
                  >
                    {lang.name}
                    {openIndex === index ? (
                      <ChevronUp className="ml-2" />
                    ) : (
                      <ChevronDown className="ml-2" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="shadow-lg z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white sm:w-1/2">
                      <div className="p-2">
                        {availableLanguages.map((language, langIndex) => (
                          <div
                            key={langIndex}
                            className="flex cursor-pointer items-center justify-start p-2"
                            onClick={() => updateLanguage(index, language)}
                          >
                            <div className="mr-2">
                              <Image
                                src={language.flag}
                                alt={`${language.name}_flag`}
                                width={24}
                                height={24}
                                objectFit="contain"
                              />
                            </div>
                            <div>{language.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {lang.name !== "Select Preferred Learning Language" && (
                <button
                  className="ml-2 mt-12 flex gap-1 text-sm text-critical-100"
                  onClick={() => removeLanguage(index)}
                >
                  <Trash size={15} />
                  <div className="">Delete</div>
                </button>
              )}
            </div>
          ))
        )}
        <button
          className={`mt-3 flex items-center justify-center gap-1 ${selectedLanguages.length === 0 ? "text-primary-60" : "text-primary-100"} max-sm:mx-auto sm:ml-20`}
          onClick={addLanguage}
          disabled={selectedLanguages.length === 0}
        >
          <div>
            <Plus />
          </div>
          <div>Add new language</div>
        </button>
        <div className="mt-6 flex items-center gap-4 sm:gap-6 md:gap-8">
          <button
            className={`rounded-[59px] border border-secondary-30 bg-neutral-10 px-3 py-2 font-axiforma text-sm font-semibold ${selectedLanguages.length === 0 ? "text-secondary-30" : "text-secondary-120"} sm:px-6 sm:py-4 sm:text-lg`}
            disabled={selectedLanguages.length === 0}
            onClick={() => setSelectedLanguages([])}
          >
            Discard Changes
          </button>
          <button
            className={`rounded-[59px] border border-primary-60 bg-primary-100 px-3 py-2 font-axiforma text-sm font-semibold ${selectedLanguages.length === 0 ? "text-transparent-white-50" : "text-white"} sm:px-6 sm:py-4 sm:text-lg`}
            disabled={selectedLanguages.length === 0}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguage;
