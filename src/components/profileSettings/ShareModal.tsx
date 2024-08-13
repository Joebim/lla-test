import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Copy, X } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const shareUrls: { [key: string]: string } = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=`,
  twitter: `https://twitter.com/intent/tweet?url=`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=`,
  instagram: `https://www.instagram.com/`,
  whatsapp: `https://api.whatsapp.com/send?text=`,
  telegram: `https://t.me/share/url?url=`,
  discord: `https://discord.com/share?url=`,
  email: `mailto:?subject=Check%20this%20out&body=Here%27s%20the%20link%20I%20wanted%20to%20share:%20`,
};

const slides = [
  {
    src: "/share-icons/facebook.png",
    platform: "facebook",
    name: "Facebook",
  },
  { src: "/share-icons/twitter.png", platform: "twitter", name: "X" },
  {
    src: "/share-icons/linkedin.png",
    platform: "linkedin",
    name: "LinkedIn",
  },
  {
    src: "/share-icons/instagram.png",
    platform: "instagram",
    name: "Instagram",
  },
  {
    src: "/share-icons/whatsapp.png",
    platform: "whatsapp",
    name: "WhatsApp",
  },
  {
    src: "/share-icons/telegram.png",
    platform: "telegram",
    name: "Telegram",
  },
  { src: "/share-icons/discord.png", platform: "discord", name: "Discord" },
  { src: "/share-icons/email.png", platform: "email", name: "Email" },
];

const ShareModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  handleCopy: () => void;
}> = ({ isOpen, onClose, handleCopy }) => {
  const [inviteLink, setInviteLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [emblaReference, emblaApi] = useEmblaCarousel({ loop: false });

  const parameters = useSearchParams();
  const id = parameters.get("id");

  useEffect(() => {
    if (isOpen && id) {
      setLoading(true);
      fetch(`https://api.staging.delve.fun/api/v1/invite-link/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setInviteLink(data.referral_code); // Update based on API response
          setLoading(false);
        })
        .catch(() => {
          setInviteLink("Error fetching link.");
          setLoading(false);
        });
    }
  }, [isOpen, id]);

  const handleShare = useCallback(
    (platform: string) => {
      const url = shareUrls[platform];
      try {
        if (platform === "instagram") {
          window.open("https://www.instagram.com/", "_blank");
        } else {
          window.open(`${url}${encodeURIComponent(inviteLink)}`, "_blank");
        }
      } catch {
        // Handle errors silently
      }
    },
    [inviteLink],
  );

  const handlePrevious = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black opacity-45" />
      <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative mx-auto h-auto w-11/12 overflow-hidden rounded-xl bg-white p-8 lg:w-2/4">
          <div className="mb-4 flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Share Invite Link
            </DialogTitle>
            <DialogClose
              className="p-2 text-gray-600 hover:text-gray-800"
              aria-label="Close modal"
            >
              <X size={20} />
            </DialogClose>
          </div>
          <div className="py-1 pb-3">
            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrevious}
                className="absolute left-0 z-10 rounded-full p-2 text-gray-600 hover:bg-orange-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="embla" ref={emblaReference}>
                <div className="embla__container flex space-x-4">
                  {slides.map(({ src, platform, name }, index) => (
                    <div
                      key={index}
                      className="embla__slide flex-shrink-0 sm:w-auto"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <button
                          onClick={() => handleShare(platform)}
                          aria-label={`Share on ${platform}`}
                        >
                          <Image
                            src={src}
                            alt={`Share icon for ${platform}`}
                            width={100}
                            height={100}
                            className="object-contain sm:h-24 sm:w-24"
                          />
                        </button>
                        <span className="mt-2 font-axiforma text-xs text-gray-600">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={handleNext}
                className="absolute right-0 z-10 rounded-full p-2 text-gray-600 hover:bg-orange-200"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <label className="font-axiforma text-xs text-gray-400">
            Share this link with your friends to invite them to join Delve.
          </label>
          <div className="relative mb-4 w-full">
            <input
              type="text"
              id="inviteLink"
              value={loading ? "Loading..." : inviteLink}
              readOnly
              className="w-full border px-4 py-2 pr-12"
              style={{ borderRadius: "6px" }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center space-x-1">
              <button
                className="rounded-full p-2 text-gray-600 hover:bg-orange-200"
                aria-label="Copy invite link"
                onClick={handleCopy}
              >
                <Copy size={20} />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
