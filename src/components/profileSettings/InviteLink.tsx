"use client";

import { Copy, Share2 } from "lucide-react";
import { useState } from "react";

import ShareModal from "./ShareModal";

interface InviteLinkProperties {
  inviteLink: string;
}

const InviteLink: React.FC<InviteLinkProperties> = ({ inviteLink }) => {
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setCopySuccess("Link copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 1500);
      })
      .catch(() => {
        setCopySuccess("Failed to copy link.");
        setTimeout(() => setCopySuccess(""), 1500);
      });
  };

  return (
    <div className="mt-6 w-full rounded-2xl bg-white font-axiformaSemiBold">
      <div
        className="title flex h-14 w-full items-center justify-between rounded-t-2xl p-4 text-black"
        style={{ background: "#F7F2EC" }}
      >
        <h2 className="text-xl font-semibold">Your Invite Link</h2>
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
              className="rounded-full p-2 text-gray-600 hover:bg-orange-200"
              aria-label="Copy link"
            >
              <Copy size={20} />
            </button>
            <button
              onClick={openModal}
              className="rounded-full p-2 text-gray-600 hover:bg-orange-200"
              aria-label="Share link"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
        {copySuccess && (
          <div>
            <div className="fixed inset-0" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute bottom-6 right-3 animate-bounce rounded-xl bg-white p-6 text-sm text-gray-600">
                {copySuccess}
              </div>
            </div>
          </div>
        )}
      </div>
      <ShareModal
        isOpen={isModalOpen}
        onClose={closeModal}
        handleCopy={handleCopyClick}
      />
    </div>
  );
};

export default InviteLink;
