"use client";

import {
  ChevronRight,
  Eye,
  EyeOff,
  Laptop,
  Smartphone,
  Trash,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import DeleteDevice from "./DeleteDevice";
import TwoFAAuthModal from "./two-fa-auth-modal";

const SecurityCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "password" | "2fa" | "devices" | undefined
  >();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState<{
    oldPassword?: string;
    newPassword?: string;
  }>({});
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openTwoFAModal, setOpenTwoFAModal] = useState(false);

  const openDeleteDeviceModal = () => setOpenDeleteModal(true);
  const closeDeleteDeviceModal = () => setOpenDeleteModal(false);
  const open2FAModal = () => setOpenTwoFAModal(true);
  const close2FAModal = () => setOpenTwoFAModal(false);

  const handleCancelClick = () => {
    setActiveSection(undefined);
    setOldPassword("");
    setNewPassword("");
    setShowOldPassword(false);
    setShowNewPassword(false);
    setErrorMessages({});
  };

  const handleSaveClick = () => {
    let hasError = false;
    const errors: { oldPassword?: string; newPassword?: string } = {};

    if (oldPassword.length < 8) {
      errors.oldPassword = "Old password must be at least 8 characters long.";
      hasError = true;
    }
    if (newPassword.length < 8) {
      errors.newPassword = "New password must be at least 8 characters long.";
      hasError = true;
    }

    if (hasError) {
      setErrorMessages(errors);
      return;
    }
  };

  const devices = [
    {
      id: 1,
      name: "Device 1",
      status: "Active",
      lastSeen: "2024-08-01",
      icon: <Smartphone />,
    },
    {
      id: 2,
      name: "Device 2",
      status: "Inactive",
      lastSeen: "2024-08-02",
      icon: <Laptop />,
    },
  ];

  const renderChangePassword = () => (
    <div className="mt-6 w-full lg:w-2/5">
      <h3 className="mb-4 text-xl text-gray-700">Change Password</h3>
      <div className="relative mb-4">
        <label htmlFor="old-password" className="block text-sm text-gray-500">
          Old Password
        </label>
        <div className="relative">
          <input
            type={showOldPassword ? "text" : "password"}
            id="old-password"
            value={oldPassword}
            onChange={(error) => setOldPassword(error.target.value)}
            className={`mt-2 w-full border px-4 py-2 font-semibold focus:border-orange-300 focus:outline-none ${errorMessages.oldPassword ? "border-red-500" : "border-black"}`}
            style={{ borderRadius: "6px" }}
          />
          {errorMessages.oldPassword && (
            <p className="text-xs text-red-500">{errorMessages.oldPassword}</p>
          )}
          <div
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>
      </div>
      <div className="relative mb-4">
        <label htmlFor="new-password" className="block text-sm text-gray-500">
          New Password
        </label>
        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            id="new-password"
            value={newPassword}
            onChange={(error) => setNewPassword(error.target.value)}
            className={`mt-2 w-full border px-4 py-2 font-semibold focus:border-orange-300 focus:outline-none ${errorMessages.newPassword ? "border-red-500" : "border-black"}`}
            style={{ borderRadius: "6px" }}
          />
          {errorMessages.newPassword && (
            <p className="text-xs text-red-500">{errorMessages.newPassword}</p>
          )}
          <div
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="rounded-3xl bg-orange-500 p-3 px-6 text-xs text-white"
          onClick={handleSaveClick}
        >
          Update
        </button>
        <button
          className="rounded-3xl border border-orange-300 p-3 px-6 text-xs text-orange-500"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const renderEnable2FA = () => (
    <div className="relative flex w-full flex-col">
      <button
        className="absolute -top-6 right-0 rounded-3xl bg-orange-500 px-8 py-3 text-xs text-white md:px-16 md:text-sm lg:-right-40"
        onClick={open2FAModal}
      >
        Continue
      </button>
      <div className="mt-10 w-full">
        <h3 className="mb-4 font-axiformaBold text-2xl text-gray-700">
          Add an extra security system
        </h3>
        <p className="w-4/5 text-sm text-gray-400">
          2FA Authentication adds an extra layer of security by requiring two
          forms of verification. This ensures that even if your password is
          compromised, your account remains protected with an additional layer
          of defense. An additional code will be required when you log in on an
          unauthorized device.
        </p>
        <div className="mt-6 flex w-full flex-col">
          <h2 className="mb-4 font-axiformaBold text-lg text-gray-700">
            Choose your security method
          </h2>
          <div className="flex space-x-4">
            <div className="flex w-3/6 flex-col space-y-2">
              <label
                htmlFor="auth-app"
                className="font-axiformaSemiBold text-base text-gray-700"
              >
                Authentication app
              </label>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <p>
                  For enhanced security, we recommend using an authentication
                  app for verification. Authentication apps generate
                  time-sensitive codes, making it much harder for unauthorized
                  users to gain access to your account.
                </p>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="auth-app"
                    className="custom-checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-2/5 flex-col space-y-2">
              <label
                htmlFor="sms-email"
                className="font-axiformaSemiBold text-base text-gray-700"
              >
                SMS or Email
              </label>
              <div className="flex items-center text-xs text-gray-400">
                <p>A code will be sent to your number or email.</p>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="sms-email"
                    className="custom-checkbox ml-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDevicesLoggedIn = () => (
    <div className="relative flex w-full flex-col">
      <button className="absolute -top-6 right-0 rounded-3xl bg-orange-500 px-8 py-3 text-xs text-white md:px-12 md:text-sm">
        Sign-out of all devices
      </button>
      <div className="mt-10 w-full">
        <table className="w-full border-collapse bg-white">
          <thead className="h-14 rounded-t-xl bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs lg:text-base">
                Device you are logged in
              </th>
              <th className="px-4 py-2 text-left text-xs lg:text-base">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs lg:text-base">
                Last Seen
              </th>
              <th className="px-4 py-2 text-left text-xs lg:text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr
                key={device.id}
                className={`border-b text-xs md:text-sm ${device.status === "Inactive" ? "bg-red-50" : ""}`}
              >
                <td className="flex items-center space-x-3 px-4 py-2">
                  <div className="rounded-full bg-gray-100 p-2">
                    {device.icon}
                  </div>
                  <div className="font-semibold">{device.name}</div>
                </td>
                <td className="px-4 py-2">{device.status}</td>
                <td className="px-4 py-2">{device.lastSeen}</td>
                <td className="px-4 py-2">
                  <button onClick={openDeleteDeviceModal}>
                    <Trash size={16} className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="mx-auto mt-8 w-full rounded-xl border bg-white px-4 py-10 font-axiforma lg:px-12">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="w-full">
          {activeSection === "password" && renderChangePassword()}
          {activeSection === "2fa" && renderEnable2FA()}
          {activeSection === "devices" && renderDevicesLoggedIn()}
          {activeSection === undefined && (
            <div className="w-full space-y-20 lg:w-3/5">
              <div className="block border-b border-gray-200 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-400">Change Password</h3>
                  </div>
                  <button onClick={() => setActiveSection("password")}>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="block border-b border-gray-200 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-400">Enable 2FA-authentication</h3>
                  </div>
                  <button onClick={() => setActiveSection("2fa")}>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="block py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-400">
                      Devices you&apos;re logged in
                    </h3>
                  </div>
                  <button onClick={() => setActiveSection("devices")}>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {activeSection !== "devices" && (
          <div className="mt-6 flex justify-center">
            <Image
              src="/profile/shield with lock.png"
              alt="Security Shield"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
        )}
      </div>
      {openDeleteModal && <DeleteDevice isClose={closeDeleteDeviceModal} />}
      {openTwoFAModal && (
        <TwoFAAuthModal isOpen={openTwoFAModal} isClose={close2FAModal} />
      )}
    </div>
  );
};

export default SecurityCard;
