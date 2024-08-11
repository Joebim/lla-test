"use client";

import { Copy, Share2 } from "lucide-react";
import { useState } from "react";

interface InviteLinkProperties {
  inviteLink: string;
}

const InviteLink: React.FC<InviteLinkProperties> = ({ inviteLink }) => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setCopySuccess("Link copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(() => {
        setCopySuccess("Failed to copy link.");
        setTimeout(() => setCopySuccess(""), 2000);
      });
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Invite to Delve",
          text: "Join Delve using this invite link:",
          url: inviteLink,
        })
        .catch(() => {
          setCopySuccess("Error sharing link.");
          setTimeout(() => setCopySuccess(""), 2000);
        });
    } else {
      setCopySuccess("Share not supported on this browser!");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <div className="mt-6 w-full rounded-2xl bg-white font-axiformaSemiBold">
      <div className="flex items-center rounded-tl-[16px] rounded-tr-[16px] bg-primary-10 p-5">
        <h2 className="text-xl font-semibold text-secondary-120">
          Your Invite Link
        </h2>
      </div>
      <div className="p-4">
        <label
          htmlFor="inviteLink"
          className="mb-2 block text-sm text-gray-500"
        >
          Share this link with your friends to invite them to join Delve.
        </label>
        <div className="relative mb-4 w-full">
          <input
            type="text"
            id="inviteLink"
            value={inviteLink}
            readOnly
            className="w-full border px-4 py-2 pr-12"
            style={{ borderRadius: "6px" }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-1">
            <button
              onClick={handleCopyClick}
              className="rounded-full p-2 text-gray-600 hover:bg-blue-100"
              aria-label="Copy link"
            >
              <Copy size={20} />
            </button>
            <button
              onClick={handleShareClick}
              className="rounded-full p-2 text-gray-600 hover:bg-green-100"
              aria-label="Share link"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
        {copySuccess && (
          <div className="mt-2 text-sm text-gray-600">{copySuccess}</div>
        )}
      </div>
    </div>
  );
};

export default InviteLink;
