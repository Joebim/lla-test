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

const SecurityCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "password" | "2fa" | "devices" | undefined
  >();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleCancelClick = () => {
    setActiveSection(undefined);
    setOldPassword("");
    setNewPassword("");
    setShowOldPassword(false);
    setShowNewPassword(false);
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
    // Add more devices as needed
  ];

  const renderChangePassword = () => (
    <div className="mt-6 w-full lg:w-2/5">
      <h3 className="mb-4 text-xl text-gray-700">Change Password</h3>
      <div className="relative mb-4">
        <label htmlFor="old-password" className="block text-sm text-gray-500">
          Old Password
        </label>
        <input
          type={showOldPassword ? "text" : "password"}
          id="old-password"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
          className="mt-2 w-full border border-black px-4 py-2 font-semibold focus:border focus:border-orange-300 focus:outline-none"
          style={{ borderRadius: "6px" }}
        />
        <div
          className="absolute bottom-3 right-0 flex cursor-pointer items-center px-3"
          onClick={() => setShowOldPassword(!showOldPassword)}
        >
          {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
      <div className="relative mb-4">
        <label htmlFor="new-password" className="block text-sm text-gray-500">
          New Password
        </label>
        <input
          type={showNewPassword ? "text" : "password"}
          id="new-password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          className="mt-2 w-full border border-black px-4 py-2 font-semibold focus:border focus:border-orange-300 focus:outline-none"
          style={{ borderRadius: "6px" }}
        />
        <div
          className="absolute bottom-3 right-0 flex cursor-pointer items-center px-3"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="rounded-3xl bg-orange-500 p-3 px-6 text-xs text-white"
          onClick={() => {
            /* Implement save functionality */
          }}
        >
          Update
        </button>
        <button
          className="rounded-3xl border p-3 px-6 text-xs"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const renderEnable2FA = () => (
    <div className="mt-6 w-full">
      <h3 className="mb-4 font-axiformaBold text-2xl text-gray-700">
        Add an extra security system
      </h3>
      <p className="w-4/5 text-sm text-gray-400">
        2FA Authentication adds an extra layer of security by requiring two
        forms of verification. This ensures that even if your password is
        compromised, your account remains protected with an additional layer of
        defense. An additional code will be required when you log in on an
        unauthorized device.
      </p>
      <div className="mt-6 flex w-full flex-col">
        <h2 className="mb-4 font-axiformaBold text-lg text-gray-700">
          Choose your security method
        </h2>
        <div className="flex space-x-4">
          <div className="w-3/5">
            <h3 className="font-axiformaSemiBold text-base text-gray-700">
              Authentication app
            </h3>
            <div className="flex">
              <p className="text-xs text-gray-400">
                For enhanced security, we recommend using an authentication app
                for verification. Authentication apps generate time-sensitive
                codes, making it much harder for unauthorized users to gain
                access to your account.
              </p>
            </div>
          </div>

          <div className="w-2/5">
            <h3 className="font-axiformaSemiBold text-base text-gray-700">
              SMS or Email
            </h3>
            <div className="flex">
              <p className="text-xs text-gray-400">
                A code will be sent to your number or email.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          className="rounded-3xl bg-orange-500 p-2 px-10 text-xs text-white"
          onClick={() => {
            /* Implement enable 2FA functionality */
          }}
        >
          Continue
        </button>
        <button
          className="rounded-3xl border p-3 px-6 text-xs"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const renderDevicesLoggedIn = () => (
    <div className="mt-4 w-full md:w-4/5">
      <table className="w-full bg-white">
        <thead className="h-14 rounded-t-xl bg-gray-100">
          <tr>
            <th className="text-xs lg:text-base">Device you are logged in</th>
            <th className="text-xs lg:text-base">Status</th>
            <th className="text-xs lg:text-base">Last Seen</th>
            <th className="text-xs lg:text-base">Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr
              key={device.id}
              className={`border-b text-xs md:text-sm ${device.status === "Inactive" ? "bg-red-50" : ""}`}
            >
              <td className="flex items-center space-x-3 py-2">
                <div className="rounded-full bg-gray-100 p-2">
                  {device.icon}
                </div>
                <div>{device.name}</div>
              </td>
              <td className="py-2">{device.status}</td>
              <td className="py-2">{device.lastSeen}</td>
              <td className="py-2">
                <button>
                  <Trash size={16} className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <div></div>
        <button
          className="rounded-3xl border p-3 px-6 text-xs"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
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
        {activeSection !== "2fa" && (
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
    </div>
  );
};

export default SecurityCard;
