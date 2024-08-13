import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

const languages = [{ name: "French", flag: "/flags/french_flag.svg" }];

const LanguageSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
        <Image
          src="/flags/french_flag.svg"
          alt="flag"
          width={36}
          height={36}
          className="rounded-full"
        />
        <ChevronDown className="text-gray-700" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 rounded-xl border border-gray-200 bg-white p-2">
        {languages.map((lang, index) => (
          <DropdownMenuItem
            key={index}
            className="flex cursor-pointer items-center p-2"
          >
            <Image
              src={lang.flag}
              alt={lang.name}
              width={20}
              height={20}
              className="mr-2 rounded-full"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
        <div className="mt-2 border-t border-gray-200"></div>
        <DropdownMenuItem className="flex cursor-pointer items-center p-2">
          <Globe className="mr-2" />
          <span>Select new language</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
