"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "~/components/common/common-button/common-button";

const predefinedLanguages = [
  {
    id: "1",
    name: "Arabic",
    flag: "AR",
    url: "/flags/arabic",
    isDefault: undefined,
  },
  {
    id: "2",
    name: "Chinese",
    flag: "ZH",
    url: "/flags/chinese",
    isDefault: undefined,
  },
  {
    id: "3",
    name: "English",
    flag: "EN",
    url: "/flags/english",
    isDefault: "timestamp",
  },
  {
    id: "4",
    name: "French",
    flag: "FR",
    url: "/flags/french",
    isDefault: undefined,
  },
  {
    id: "5",
    name: "German",
    flag: "DE",
    url: "/flags/german",
    isDefault: undefined,
  },
  {
    id: "6",
    name: "Greek",
    flag: "EL",
    url: "/flags/greek",
    isDefault: undefined,
  },
  {
    id: "7",
    name: "Italian",
    flag: "IT",
    url: "/flags/italian",
    isDefault: undefined,
  },
  {
    id: "8",
    name: "Jewish",
    flag: "IW",
    url: "/flags/jewish",
    isDefault: undefined,
  },
  {
    id: "9",
    name: "Korean",
    flag: "KO",
    url: "/flags/korean",
    isDefault: undefined,
  },
  {
    id: "10",
    name: "Russian",
    flag: "RU",
    url: "/flags/russian",
    isDefault: undefined,
  },
  {
    id: "11",
    name: "Portuguese",
    flag: "PT",
    url: "/flags/portuguese",
    isDefault: undefined,
  },
  {
    id: "12",
    name: "Swahili",
    flag: "SW",
    url: "/flags/swahili",
    isDefault: undefined,
  },
];

type Language = {
  id: string;
  name: string;
  flag: string;
  url: string;
  isDefault?: string;
};

const ProfilePage: React.FC= () => {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<Set<string>>(
    new Set(),
  );
  const [languages, setLanguages] = useState<Language[]>([]);
  const router = useRouter();
  const {data: session } = useSession()

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
       

        const response = await fetch(
          "https://api.staging.delve.fun/api/v1/languages",
          {
            headers: {
              Authorization: `Bearer ${session?.access_token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch languages");
        }

        const responseData = await response.json();
        const data = responseData.data;

        if (!Array.isArray(data)) {
          throw new TypeError("Data is not an array");
        }

        const fetchedLanguages = data
          .map((lang: { id: string; name: string }) => {
            const predefinedLang = predefinedLanguages.find(
              (p) => p.name === lang.name,
            );
            return predefinedLang
              ? { ...predefinedLang, id: lang.id }
              : undefined;
          })
          .filter(
            (lang: Language | undefined) => lang !== undefined,
          ) as Language[];

        // Sort languages alphabetically by name
        const sortedLanguages = fetchedLanguages.sort((a, b) =>
          a.name.localeCompare(b.name),
        );

        setLanguages(sortedLanguages);
        setSelectedLanguages(
          new Set(
            sortedLanguages
              .filter((lang) => lang.isDefault !== undefined)
              .map((lang) => lang.id),
          ),
        );
      } catch {
      }
    };

    fetchLanguages();
  }, []);

  const handleButtonClick = (id: string) => {
    setSelectedLanguages((previousSelected) => {
      const newSelected = new Set(previousSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let isValid = true;

    // Validation logic
    if (username === "" || username === undefined) {
      setUsernameError("Username is required.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (gender === "" || gender === undefined) {
      setGenderError("Gender is required.");
      isValid = false;
    } else {
      setGenderError("");
    }

    if (selectedLanguages.size === 0) {
      setLanguageError("Please select at least one language.");
      isValid = false;
    } else {
      setLanguageError("");
    }

    if (isValid) {
      try {
        const token = localStorage.getItem("token");

        const payload = {
          username,
          gender,
          language_user_learn_ids: [...selectedLanguages],
        };

        const response = await fetch(
          "https://api.staging.delve.fun/api/v1/user/language/settings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.access_token}`,
            },
            body: JSON.stringify(payload),
          },
        );

        const result = await response.json();

        if (response.ok) {
          alert("Settings updated successfully!");
          router.push("/dashboard/user");
        } else {
          alert(`Error: ${result.message || "Something went wrong!"}`);
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(`Error: ${error.message || "Network error!"}`);
        } else {
          alert("An unknown error occurred.");
        }
      }
    }
  };

  return (
    <div
      className="my-10 flex items-center justify-center"
      style={{ fontFamily: "Axiforma" }}
    >
      <div className="shadow-lg relative flex w-full max-w-[600px] flex-col items-center justify-center gap-8 rounded-2xl bg-white px-6 pb-12 pt-9 sm:gap-12 sm:p-9">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h1 className="text-center text-3xl font-bold leading-tight text-gray-800">
            Set Up Your Profile
          </h1>
          <p className="text-center text-base text-gray-500">
            Personalize your learning journey with your profile
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className={`h-12 w-full rounded-[10px] border px-4 text-sm text-gray-700 outline-none ${
                    usernameError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {usernameError && (
                  <p className="text-xs text-red-500">{usernameError}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="gender" className="font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  className={`h-12 w-full rounded-[10px] border px-4 text-sm text-gray-700 outline-none ${
                    genderError ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {genderError && (
                  <p className="text-xs text-red-500">{genderError}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="languages"
                  className="font-medium text-gray-700"
                >
                  I would like to learn:
                </label>
                <div className="grid grid-cols-2 gap-4 rounded-[10px] border border-neutral-40 px-[12px] py-[18px] md:grid-cols-4">
                  {languages.map((language) => (
                    <button
                      key={language.id}
                      type="button"
                      onClick={() => handleButtonClick(language.id)}
                      className={`transition-all flex items-center justify-center gap-2 rounded-[100px] border border-neutral-40 p-[12px] text-[13px] duration-1000 ease-in-out ${
                        selectedLanguages.has(language.id)
                          ? "bg-primary-40 text-secondary-110"
                          : "bg-white text-secondary-110"
                      }`}
                    >
                      <Image
                        src={`/images/${language.url}.svg`}
                        alt={`${language.name} flag`}
                        width={24}
                        height={24}
                      />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
                {languageError && (
                  <p className="text-xs text-red-500">{languageError}</p>
                )}
              </div>
              <div className="flex justify-center">
                <CustomButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Start Learning
                </CustomButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
