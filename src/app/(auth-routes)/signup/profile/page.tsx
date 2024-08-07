"use client";

import Image from "next/image";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";

type Language = {
  id: number;
  name: string;
  flag: string;
  url: string;
  isDefault: string | undefined | null;
};

const languages = [
  {
    id: 1,
    name: "Arabic",
    flag: "AR",
    url: "/flags/arabic",
    isDefault: undefined,
  },
  {
    id: 2,
    name: "Chinese",
    flag: "ZH",
    url: "/flags/chinese",
    isDefault: undefined,
  },
  {
    id: 3,
    name: "English",
    flag: "EN",
    url: "/flags/english",
    isDefault: "timestamp",
  },
  {
    id: 4,
    name: "French",
    flag: "FR",
    url: "/flags/french",
    isDefault: undefined,
  },
  {
    id: 5,
    name: "German",
    flag: "DE",
    url: "/flags/german",
    isDefault: undefined,
  },
  {
    id: 6,
    name: "Greek",
    flag: "EL",
    url: "/flags/greek",
    isDefault: undefined,
  },
  {
    id: 7,
    name: "Italian",
    flag: "IT",
    url: "/flags/italian",
    isDefault: undefined,
  },
  {
    id: 8,
    name: "Jewish",
    flag: "IW",
    url: "/flags/jewish",
    isDefault: undefined,
  },
  {
    id: 9,
    name: "Korean",
    flag: "KO",
    url: "/flags/korean",
    isDefault: undefined,
  },
  {
    id: 10,
    name: "Russian",
    flag: "RU",
    url: "/flags/russian",
    isDefault: undefined,
  },
  {
    id: 11,
    name: "Portuguese",
    flag: "PT",
    url: "/flags/portuguese",
    isDefault: undefined,
  },
  {
    id: 12,
    name: "Swahili",
    flag: "SW",
    url: "/flags/swahili",
    isDefault: undefined,
  },
];

const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<Set<number>>(
    new Set(
      languages
        .filter((lang) => lang.isDefault !== undefined)
        .map((lang) => lang.id),
    ),
  );

  const handleCheck = (id: number, checked: boolean) => {
    setSelectedLanguages((previousSelected) => {
      const newSelected = new Set(previousSelected);
      if (checked) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      return newSelected;
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let isValid = true;
    if (username === "" || username === undefined) {
      setUsernameError("Username is required.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (selectedLanguages.size === 0) {
      setLanguageError("Please select at least one language.");
      isValid = false;
    } else {
      setLanguageError("");
    }
    if (isValid) {
      const selectedLanguageNames = languages
        .filter((lang) => selectedLanguages.has(lang.id))
        .map((lang) => {
          return { id: lang.id, name: lang.name };
        });
      alert(
        `Username: ${username}; Selected Languages: ${selectedLanguageNames.map((lang) => lang.id + " - " + lang.name).join(";")}`,
      );
    }
  };

  return (
    <div
      className="my-10 flex items-center justify-center"
      style={{ fontFamily: "Axiforma" }}
    >
      <div className="relative flex w-full max-w-[600px] flex-col items-center justify-center gap-8 rounded-2xl bg-white px-6 pb-12 pt-9 sm:gap-12 sm:p-9">
        <div className="flex w-full flex-col items-center justify-center gap-6 self-stretch">
          <h1 className="text-center text-4xl font-semibold leading-10 tracking-tight text-secondary-110 sm:tracking-normal">
            Set Up Your Profile
          </h1>
          <p className="text-center text-base text-neutral-130">
            Personalize your learning journey with your profile
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-6 sm:gap-9">
          <div className="flex w-full flex-col items-start gap-3">
            <label className="text-sm leading-6 text-secondary-120">
              Username
            </label>
            <input
              className={`w-full self-stretch overflow-hidden whitespace-pre-wrap rounded-[10px] border bg-white px-3 py-3 text-base leading-7 text-neutral-140 outline-none focus:border-primary-100 ${usernameError ? "border-critical-100" : "border-neutral-40"}`}
              placeholder="Enter your username"
              type="text"
              value={username}
              onFocus={() => setUsernameError("")}
              onChange={(event) => setUsername(event.target.value)}
            />
            {usernameError && (
              <p className="text-sm text-critical-100">{usernameError}</p>
            )}
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <label className="text-sm leading-6 text-secondary-120">
              I would like to learn
            </label>
            <div
              className={`flex flex-wrap items-center justify-start gap-4 self-stretch overflow-hidden rounded-[10px] border px-3 py-5 text-base ${languageError ? "border-critical-100" : "border-neutral-40"}`}
            >
              {languages.map((lang: Language) => (
                <label
                  key={lang.id}
                  className="relative inline-flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    onFocus={() => setLanguageError("")}
                    checked={selectedLanguages.has(lang.id)}
                    onChange={(event) =>
                      handleCheck(lang.id, event.target.checked)
                    }
                  />
                  <div className="peer flex gap-2 rounded-[100px] border bg-neutral-40 bg-white p-3 text-secondary-110 peer-checked:border-primary-100 peer-checked:bg-primary-40 peer-focus:ring peer-focus:ring-primary-60">
                    <Image
                      src={`/images/${lang.url}.svg`}
                      alt="language-icon"
                      width={24}
                      height={24}
                    />
                    {lang.name}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <CustomButton
            variant="primary"
            className="sticky bottom-12 w-full self-stretch md:static"
          >
            Start Learning
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Page;
