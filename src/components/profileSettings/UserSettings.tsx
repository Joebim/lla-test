"use client";

import Image from "next/image";
import React, { useState } from "react";

import AvatarModal from "./AvatarModal";
import { SuccessModal } from "./SuccessModal";

interface UserSettingsProperties {
  username: string;
  email: string;
  gender: string;
}

const UserSettings: React.FC<UserSettingsProperties> = ({
  username,
  email,
  gender,
}) => {
  const [userDetails, setUserDetails] = useState({
    username: username,
    email: email,
    gender: gender,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/profile/profile.png");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    closeModal();
  };

  const handleAvatarSelect = (imageUrl: string) => {
    setProfileImage(imageUrl);
  };

  const handleChange = (
    error: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = error.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    openSuccessModal();
  };

  const handleDiscardChanges = () => {
    setUserDetails({ username, email, gender });
    setIsEditing(false);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  return (
    <div className="w-full rounded-2xl bg-white font-axiformaSemiBold">
      <div
        className="title flex h-14 w-full items-center justify-between rounded-t-2xl p-4 text-black"
        style={{ background: "#F7F2EC" }}
      >
        <h2 className="text-xl font-semibold">User Information</h2>
        {!isEditing && (
          <button
            onClick={handleEditProfile}
            className="text-sm text-orange-400"
          >
            Edit Profile
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="relative mb-4 flex items-center">
          <Image
            src={profileImage}
            alt="Profile"
            width={500}
            height={500}
            className="h-32 w-32 rounded-xl object-contain"
          />
          {isEditing && (
            <>
              <div
                className="absolute inset-0 flex h-32 w-32 cursor-pointer items-center justify-center rounded-xl"
                style={{ background: "#0000005e" }}
                onClick={openModal}
              >
                <Image
                  src="/profile/camera.png"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="h-20 w-20 rounded-xl object-contain"
                />
              </div>
            </>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block font-axiforma text-sm text-gray-500"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-2 w-full border px-4 py-2 font-semibold focus:border focus:border-orange-300 focus:outline-none ${isEditing ? "" : "bg-gray-100"}`}
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-axiforma text-sm text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-2 w-full border px-4 py-2 font-semibold focus:border focus:border-orange-300 focus:outline-none ${isEditing ? "" : "bg-gray-100"}`}
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block font-axiforma text-sm text-gray-500"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={userDetails.gender}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-2 w-full border px-4 py-2 focus:border focus:border-orange-300 focus:outline-none ${isEditing ? "" : "bg-gray-100"}`}
            style={{ borderRadius: "6px" }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Prefer not to say</option>
          </select>
        </div>
        {isEditing && (
          <div className="flex w-full items-center space-x-4 pt-6">
            <button
              onClick={handleDiscardChanges}
              className="rounded-3xl border bg-gray-100 px-6 py-3 font-axiforma text-sm hover:opacity-40"
            >
              Discard Changes
            </button>
            <button
              onClick={handleSaveChanges}
              className="rounded-3xl bg-orange-400 px-6 py-3 font-axiforma text-sm text-white hover:bg-opacity-40"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      <AvatarModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onFileSelect={handleFileSelect}
        onAvatarSelect={handleAvatarSelect} // Pass this prop
      />
      {isSuccessModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeSuccessModal}
          style={{ background: "#0000005e" }}
        >
          <SuccessModal />
        </div>
      )}
    </div>
  );
};

export default UserSettings;
