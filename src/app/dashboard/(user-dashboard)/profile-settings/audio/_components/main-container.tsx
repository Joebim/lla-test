"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SwitchToggle from "~/components/common/switch";
import InviteLink from "~/components/profileSettings/InviteLink";
import SettingsCard from "~/components/profileSettings/settings-card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import { useAudioSettings } from "~/hooks/profile-settings/audio";
import { IAudioSettings } from "~/types/settings.model";

interface IAudioSection {
  title: string;
  items: {
    name: string;
    index: number;
    value: boolean | undefined;
    key: string;
  }[];
}

const AudioContainer = () => {
  const { toast } = useToast();
  const [audioSection, setAudioSection] = useState<
    IAudioSection[] | undefined
  >();
  const [defaultAudioSelection, setDefaultAudioSelection] = useState<
    IAudioSection[] | undefined
  >();
  const [notiType, setNotiType] = useState<string | undefined>();
  const [edited, setEdited] = useState<boolean>(false);
  const {
    getAudioSettings,
    data: audioSettingsData,
    loading,
    error,
    updateAudioSettings,
    errorData,
  } = useAudioSettings();

  const audioData = audioSettingsData?.data;

  useEffect(() => {
    const get = async () => getAudioSettings();
    get();
  }, [getAudioSettings]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const inviteLink = "https://www.delveapp.com/invite?referralCode=12345ABCDE";

  const handleSaveClick = async () => {
    if (audioSection && notiType) {
      const settings: Partial<IAudioSettings> = {
        notification_type: notiType,
      };
      for (const group of audioSection) {
        for (const item of group.items) {
          switch (item.name) {
            case "Mic": {
              settings.mic_status = item.value;
              break;
            }
            case "Music": {
              settings.music_status = item.value;
              break;
            }
            case "Sound effects": {
              settings.sound_effect_status = item.value;
              break;
            }
            case "Ambient sound": {
              settings.ambient_status = item.value;
              break;
            }
          }
        }
      }

      await updateAudioSettings(settings as IAudioSettings);

      if (error) {
        toast({
          description: errorData?.error,
          variant: "critical",
        });
      } else {
        toast({
          description: audioSettingsData?.message,
          variant: "default",
        });
        setIsDialogOpen(true);
      }
    }
  };

  const handleDiscardChange = () => {
    setAudioSection(defaultAudioSelection);
    setNotiType(audioData?.notification_type);
    setEdited(false);
  };

  useEffect(() => {
    const audio = [
      {
        title: "Microphone Status",
        items: [
          { name: "Mic", index: 0, value: audioData?.mic_status, key: "mic" },
        ],
      },
      {
        title: "Audio Preferences",
        items: [
          {
            name: "Music",
            index: 1,
            value: audioData?.music_status,
            key: "music",
          },
          {
            name: "Sound effects",
            index: 2,
            value: audioData?.sound_effect_status,
            key: "sound-effects",
          },
          {
            name: "Ambient sound",
            index: 3,
            value: audioData?.ambient_status,
            key: "ambient-sound",
          },
        ],
      },
    ];
    setAudioSection(audio);
    setDefaultAudioSelection(audio);
    setNotiType(audioData?.notification_type);
    setEdited(false);
  }, [audioData]);

  const toggleCheck = (key: string) => {
    setAudioSection((previous) =>
      previous?.map((item) => ({
        ...item,
        items: item.items.map((item) =>
          item.key === key ? { ...item, value: !item.value } : item,
        ),
      })),
    );
    setEdited(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-y-2.5 pb-10">
        <div className="h-12 w-full animate-pulse-2 rounded-[4px] bg-white"></div>
        <div className="h-12 w-full animate-pulse-2 rounded-[4px] bg-white"></div>
        <div className="h-12 w-full animate-pulse-2 rounded-[4px] bg-white"></div>
        <div className="h-12 w-full animate-pulse-2 rounded-[4px] bg-white"></div>
        <div className="h-12 w-full animate-pulse-2 rounded-[4px] bg-white"></div>
      </div>
    );
  }

  return (
    <>
      <SettingsCard title="Audio">
        <div className="flex flex-col gap-y-2.5 pb-10 md:gap-y-10">
          {audioSection &&
            audioSection.map((section) => (
              <div key={section.title}>
                <p className="text-[14px] text-secondary-70 md:text-[16px]">
                  {section.title}
                </p>
                <div className="mt-[12px] flex cursor-pointer flex-col gap-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.index}
                      className="flex items-center justify-between rounded-[8px] border border-neutral-40 px-[8px] py-[14px] md:rounded-[10px] md:px-[12px] md:py-[18px]"
                      onClick={() => toggleCheck(item.key)}
                    >
                      <p className="text-[14px] md:text-[16px]">{item.name}</p>
                      <SwitchToggle
                        checked={item.value as boolean}
                        onToggle={toggleCheck}
                        key={item.key}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-y-[10px] pb-10 md:gap-y-[12px]">
          <p className="text-[12px] text-secondary-70 md:text-[14px]">
            Notification Type
          </p>
          <div className="relative">
            <Select onValueChange={(value: string) => setNotiType(value)}>
              <SelectTrigger
                className="w-full appearance-none rounded-[8px] border border-neutral-40 bg-transparent px-[8px] py-[14px] text-[14px] text-gray-700 focus:outline-none focus:ring-0 md:rounded-[10px] md:px-[12px] md:py-[18px] md:text-sm"
                aria-label="Notification Type"
              >
                <SelectValue placeholder={notiType} />
              </SelectTrigger>
              <SelectContent className="shadow rounded-[8px] bg-white">
                <SelectGroup>
                  {["default", "alert", "email"].map((item, index) => {
                    return (
                      <SelectItem
                        key={index}
                        value={item}
                        className="rounded-[8px] transition-all duration-300 hover:bg-primary-10"
                      >
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-x-[16px] gap-y-[10px] whitespace-nowrap max-[450px]:flex-col-reverse min-[450px]:flex-row md:gap-x-[24px] md:gap-y-0">
          <button
            className={`w-full rounded-[40px] bg-neutral-10 px-[18px] py-[8px] text-sm text-secondary-120 disabled:bg-neutral-20 disabled:text-secondary-30 min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base`}
            onClick={handleDiscardChange}
            disabled={!edited}
          >
            Discard Changes
          </button>
          <button
            onClick={handleSaveClick}
            className={`w-full whitespace-nowrap rounded-[40px] bg-primary-100 px-[18px] py-[8px] text-sm text-white disabled:bg-primary-40 disabled:text-transparent-white-50 min-[450px]:w-auto md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-base`}
            disabled={!edited}
          >
            Save Changes
          </button>
        </div>
      </SettingsCard>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogClose className="absolute right-0 top-0 hidden" />
        <DialogContent className="flex max-w-[600px] items-center justify-center border-0 p-4 font-axiforma lg:w-[600px]">
          <div className="w-full max-w-md rounded-[12px] border-0 bg-white px-[24px] pb-[24px] pt-[36px] md:rounded-[18px] md:px-[36px] md:pb-[32px] md:pt-[48px]">
            <DialogTitle className="mb-4 flex justify-center font-semibold">
              <Image
                src={"/images/_check.svg"}
                alt="check"
                width={80}
                height={80}
              />
            </DialogTitle>
            <p className="mb-6 text-center font-axiformaBold text-[18px] font-bold leading-[38px] tracking-[0.8px] md:text-[20px] md:tracking-[1.12px] lg:leading-[42px]">
              Your audio settings have been successfully updated.
            </p>
            <DialogClose className="mt-[48px] flex w-full justify-center gap-x-4">
              <div className="w-full">
                <div
                  className="w-full rounded-[40px] bg-secondary-110 px-[24px] py-[8px] text-center text-[14px] text-[#FFFFFF] md:rounded-[59px] md:px-[32px] md:py-[10px] md:text-[16px]"
                  onClick={() => {
                    setIsDialogOpen(false);
                  }}
                >
                  Close
                </div>
              </div>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <InviteLink inviteLink={inviteLink} />
    </>
  );
};

export default AudioContainer;
