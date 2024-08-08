import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const languages = [{ name: "French", flag: "/flags/french_flag.svg" }];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="border-neutral flex w-full items-center justify-between gap-2 text-sm font-medium text-gray-700 focus:outline-none"
      >
        <Image
          src="/flags/french_flag.svg"
          alt="flag"
          width={36}
          height={36}
          className="rounded-full"
        />

        {isOpen ? <ChevronUp className="" /> : <ChevronDown className="" />}
      </button>

      {isOpen && (
        <div className="shadow-lg absolute right-0 z-10 mt-2 w-60 rounded-xl border border-gray-200 bg-white">
          <div className="p-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex cursor-pointer items-center p-2">
                <span className="mr-2">
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </span>
                <span>{lang.name}</span>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
            <div className="flex cursor-pointer items-center p-2">
              <Globe className="mr-2" />
              <span>Select new language</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
