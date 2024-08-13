import { Apple, Facebook, Instagram, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import ToggleSwitch from "~/components/toggle/ToggleSwitch";
import { useToast } from "~/components/ui/use-toast";

const AdminPreferenceSettings: React.FC = () => {
  return (
    <section className="shadow-sm mx-auto max-w-full bg-[#FFFFFF] px-4 py-8 md:px-6 lg:px-8 xl:max-w-7xl">
      <div className="flex flex-col gap-8 lg:h-[792px] lg:flex-row">
        <div className="flex w-full flex-col lg:w-1/2 lg:overflow-y-auto">
          <LanguageSelectionDiv />
          <SocialsDiv />
        </div>
        <div className="w-full lg:w-1/2 lg:overflow-y-auto">
          <NotificationCommunicationDiv />
        </div>
      </div>
    </section>
  );
};

const LanguageSelectionDiv: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownReference = useRef<HTMLDivElement | null>(null);
  const containerReference = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((previousState) => !previousState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Russian",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Hindi",
    "Dutch",
    "Swedish",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownReference.current &&
        !dropdownReference.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerReference}
        className={`relative mb-8 w-full rounded-xl ${
          isOpen ? "rounded-b-none" : "rounded-b-xl"
        } transition-shadow bg-[#F8FAFB] p-5 duration-300 ${
          isOpen ? "shadow-[0_4px_12px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <div className="relative z-30">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-axiforma text-base font-semibold text-[#2A2A2A]">
              Language selection
            </h2>
            <button onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform h-5 w-5 transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="font-axiforma text-xs font-normal text-[#717171]">
            Choose which languages are available for learners to study.
          </p>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="transition-opacity fixed inset-0 bg-black/50 backdrop-blur-sm duration-300"
            onClick={closeDropdown}
          />
          <div
            ref={dropdownReference}
            className="absolute left-0 top-[calc(100%-8px)] z-30 w-full rounded-b-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            style={{
              maxWidth: containerReference.current
                ? containerReference.current.offsetWidth
                : "100%",
            }}
          >
            <div className="max-h-[340px] overflow-y-auto p-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="transition-all cursor-pointer p-2 duration-200 hover:border-b-2 hover:border-[#FF7B31] hover:bg-gray-100 hover:text-[#FF7B31]"
                  onClick={closeDropdown}
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const SocialsDiv: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | undefined>();
  const dropdownReference = useRef<HTMLDivElement>(null);

  const socialPlatforms = [
    { name: "Facebook", icon: Facebook, color: "#1877F2" },
    { name: "Google", icon: Mail, color: "#DB4437" },
    { name: "Instagram", icon: Instagram, color: "#E4405F" },
    { name: "Apple", icon: Apple, color: "#000000" },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? undefined : name);
  };

  const handleButtonClick = (action: string) => {
    // eslint-disable-next-line no-console
    console.log(`${action} clicked`);
    setActiveDropdown(undefined);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownReference.current &&
        !dropdownReference.current.contains(event.target as Node)
      ) {
        setActiveDropdown(undefined);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-0 w-full overflow-hidden rounded-xl bg-[#F8FAFB] p-5">
      <h2 className="mb-4 font-axiforma text-base font-semibold text-[#2A2A2A]">
        Socials
      </h2>
      <p className="mb-6 font-axiforma text-xs font-normal text-[#717171]">
        Link social media accounts to share game-related content directly, like
        achievements, milestones, or custom content.
      </p>
      <div className="flex flex-col space-y-10">
        {socialPlatforms.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="relative flex items-center justify-between"
          >
            <div className="flex items-center">
              <Icon className="mr-2 h-5 w-5" style={{ color }} />
              <span>{name}</span>
            </div>
            <div className="relative" ref={dropdownReference}>
              <button onClick={() => toggleDropdown(name)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
              {activeDropdown === name && (
                <div
                  className="shadow-lg absolute right-0 z-10 rounded-md border border-[#E9EEF3] bg-white"
                  style={{
                    width: "112px",
                    borderRadius: "var(--radiusrounded-md)",
                    background: "#FFFFFF",
                    boxShadow: "0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
                    top: "-22px",
                    right: "-20px",
                  }}
                >
                  <div className="flex flex-col space-y-1 p-1">
                    <button
                      className="transition-colors w-full rounded-sm text-left text-sm duration-150 hover:bg-[#F3F4F6]"
                      style={{
                        padding: "6px 8px",
                      }}
                      onClick={() => handleButtonClick("Remove")}
                    >
                      Remove
                    </button>
                    <button
                      className="transition-colors w-full rounded-sm text-left text-sm duration-150 hover:bg-[#F3F4F6]"
                      style={{
                        padding: "6px 8px",
                      }}
                      onClick={() => handleButtonClick("Unlink")}
                    >
                      Unlink
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="h-6"></div>
    </div>
  );
};

const NotificationCommunicationDiv: React.FC = () => {
  const { toast } = useToast();

  const handleToggle = (
    category: string,
    option: string,
    isEnabled: boolean,
  ) => {
    const action = isEnabled ? "enabled" : "disabled";
    toast({
      title: `${category} Updated`,
      description: `${option} has been ${action}.`,
      duration: 3000,
    });
  };

  return (
    <div className="w-full rounded-xl bg-[#F8FAFB] p-5">
      <div className="max-h-full space-y-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="mb-4 font-axiforma text-base font-semibold text-[#2A2A2A]">
            Notification & Communication
          </h2>
          <p className="font-axiforma text-xs font-normal text-[#717171]">
            Manage automated notifications that keep users informed about their
            progress, upcoming assessments, or other important updates.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="mb-2 font-axiforma text-base font-normal text-[#2A2A2A]">
            Notification preference
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              progress updates
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle(
                    "Notification Preference",
                    "Progress updates",
                    isEnabled,
                  )
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              new content available
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle(
                    "Notification Preference",
                    "New content available",
                    isEnabled,
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="mb-2 font-axiforma text-base font-normal text-[#2A2A2A]">
            Delivery Method
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Email
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle("Delivery Method", "Email", isEnabled)
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              SMS
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle("Delivery Method", "SMS", isEnabled)
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              In-app
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle("Delivery Method", "In-app", isEnabled)
                }
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-4">
            <h2 className="mb-2 font-axiforma text-base font-semibold text-[#2A2A2A]">
              Notification frequency
            </h2>
            <p className="font-axiforma text-xs font-normal text-[#717171]">
              Set how often you want notification sent
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Daily
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle("Notification Frequency", "Daily", isEnabled)
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Weekly
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle("Notification Frequency", "Weekly", isEnabled)
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-axiforma text-sm font-normal text-[#888888]">
              Monthly
            </span>
            <div className="scale-75 transform">
              <ToggleSwitch
                onChange={(isEnabled: boolean) =>
                  handleToggle("Notification Frequency", "Monthly", isEnabled)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPreferenceSettings;
