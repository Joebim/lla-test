import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ModalProperties {
  isOpen: boolean;
  onClose: () => void;
  onFileSelect: (file: File) => void;
  onAvatarSelect: (imageUrl: string) => void;
}

const AvatarModal: React.FC<ModalProperties> = ({
  isOpen,
  onClose,
  onFileSelect,
  onAvatarSelect,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    "/profile/profile.png",
  );
  const [imagePreviews, setImagePreviews] = useState<string[]>([
    "/profile/profile.png",
    "/profile/profile2.png",
    "/profile/profile3.png",
    "/profile/profile4.png",
    "/profile/profile5.png",
    "/profile/profile6.png",
    "/profile/profile7.png",
    "/profile/profile8.png",
    "/profile/profile9.png",
    "/profile/profile10.png",
    "/profile/profile11.png",
    "/profile/profile12.png",
    "/profile/profile13.png",
    "/profile/profile14.png",
    "/profile/profile15.png",
  ]);

  if (!isOpen) return;

  const totalAvatars = 15;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const newImagePreview = URL.createObjectURL(file);
      setSelectedImage(newImagePreview);
      setImagePreviews((previous) =>
        [...previous, newImagePreview].slice(-totalAvatars),
      );
      onFileSelect(file);
      event.target.value = "";
    }
  };

  const handleAvatarClick = (source: unknown) => {
    if (typeof source === "string") {
      setSelectedImage(source);
      onAvatarSelect(source);
    }
  };

  const avatarsToShow = [
    ...imagePreviews,
    ...Array.from({ length: totalAvatars }).fill("/profile/profile.png"),
  ].slice(0, totalAvatars);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ background: "#0000005e" }}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-white px-6 py-6"
        onClick={(event) => event.stopPropagation()}
      >
        <X
          size={20}
          className="absolute right-8 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={selectedImage}
            alt="Profile"
            width={128}
            height={128}
            className="mb-4 h-24 w-24 rounded-xl object-contain"
          />
          <div className="title">
            <h1 className="font-lilita text-2xl">Choose Avatar</h1>
          </div>
          <div className="grid grid-cols-5 gap-4 py-6">
            {avatarsToShow.map((source, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => handleAvatarClick(source)}
              >
                <Image
                  src={source as string}
                  alt={`Avatar ${index}`}
                  width={50}
                  height={50}
                  className="rounded-md object-cover hover:border hover:border-orange-400"
                />
              </div>
            ))}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
            id="upload-input"
            style={{ display: "none" }}
          />
          <label
            htmlFor="upload-input"
            className="flex cursor-pointer items-center rounded-3xl bg-orange-500 px-6 py-4 font-axiforma text-sm text-white"
          >
            <Upload className="mr-2 text-white" size={17} />
            <p>Upload from device</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
