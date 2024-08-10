"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import DeleteDevice from "./DeleteDevice";
import RenderChangePassword from "./render-change-password";
import RenderDevicesLoggedIn from "./render-devices-logged-in";
import RenderEnable2FA from "./render-enable-2fa";
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

  return (
    <div className="mx-auto mt-8 w-full rounded-xl border bg-white px-4 py-10 font-axiforma lg:px-12">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="w-full">
          {activeSection === "password" && (
            <RenderChangePassword
              oldPassword={oldPassword}
              newPassword={newPassword}
              showOldPassword={showOldPassword}
              showNewPassword={showNewPassword}
              errorMessages={errorMessages}
              setOldPassword={setOldPassword}
              setNewPassword={setNewPassword}
              setShowOldPassword={setShowOldPassword}
              setShowNewPassword={setShowNewPassword}
              handleSaveClick={handleSaveClick}
              handleCancelClick={handleCancelClick}
            />
          )}
          {activeSection === "2fa" && (
            <RenderEnable2FA
              open2FAModal={open2FAModal}
              handleCancelClick={handleCancelClick}
            />
          )}
          {activeSection === "devices" && (
            <RenderDevicesLoggedIn
              openDeleteDeviceModal={openDeleteDeviceModal}
              handleCancelClick={handleCancelClick}
            />
          )}
          {activeSection === undefined && (
            <div className="w-full space-y-20 lg:w-3/5">
              <div
                className="block cursor-pointer border-b border-gray-400 py-2"
                onClick={() => setActiveSection("password")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-600">Change Password</h3>
                  </div>
                  <button>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div
                className="block cursor-pointer border-b border-gray-400 py-2"
                onClick={() => setActiveSection("2fa")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-600">Enable 2FA-authentication</h3>
                  </div>
                  <button>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div
                className="block cursor-pointer border-b border-gray-400 py-2"
                onClick={() => setActiveSection("devices")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-600">
                      Devices you&apos;re logged in
                    </h3>
                  </div>
                  <button>
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
