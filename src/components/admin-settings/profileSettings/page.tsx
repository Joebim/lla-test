/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  getAdminProfile,
  updateAdminProfile,
} from "~/app/api/admindashboard/route";
import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import CustomInput from "~/components/input/CustomInput";

const handleFileInputClick = () => {
  const fileInput = document.querySelector(
    "#fileInput",
  ) as HTMLInputElement | null;
  fileInput?.click();
};

const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

const AdminProfile = () => {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [temporaryGender, setTemporaryGender] = useState(gender);
  const [temporaryImage, setTemporaryImage] = useState(image);
  const [temporaryEmail, setTemporaryEmail] = useState(email);
  const [temporaryName, setTemporaryName] = useState(name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function fetchAdminProfile() {
      try {
        const response = await getAdminProfile();
        console.log(response);
        if (response?.data) {
          setTemporaryImage(
            response.data?.data.avatar_url || "/images/profile_avatar.svg",
          );
          setTemporaryName(response.data?.data?.username);
          setTemporaryEmail(response.data?.data?.email);
          setTemporaryGender(response.data?.data?.gender);
          console.log(
            temporaryName,
            temporaryImage,
            temporaryEmail,
            temporaryGender,
          );
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchAdminProfile();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          setImage(event.target.result as string);
        }
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          setImage(event.target.result as string);
        }
      });
      reader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleSave = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    try {
      await updateAdminProfile({
        image: image ?? temporaryImage,
        username: name ?? temporaryName,
        gender: gender ?? temporaryGender,
        email: email ?? temporaryEmail,
      });
      setError("");
      setIsEditing(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  const handleCloseModal = () => {
    if (isModalOpen || isSuccessModalOpen) {
      setIsSuccessModalOpen(false);
      setIsModalOpen(false);
    }
  };

  const handleUpdateProfileClick = () => {
    setIsEditing(!isEditing);
    if (error) {
      setError("");
    }
  };

  if (!isClient) {
    return;
  }

  return (
    <main data-testid="profile-settings" className="font-inter">
      {/* upload image modal */}
      {isModalOpen && (
        <DashboardModal
          onClose={handleCloseModal}
          className="flex w-full flex-col items-center justify-center space-y-[20px] md:w-[40rem]"
        >
          <section className="flex w-full flex-col items-center justify-center space-y-[20px] border-[3px] border-dashed py-[20px] md:w-[25rem]">
            <div
              className="drag-drop-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <p>Drag and drop image to upload</p>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <Image
                src="/images/upload.svg"
                alt="upload"
                width={80}
                height={80}
              />
            </div>
            <CustomButton
              variant="secondary-two"
              className="w-fit px-[15px]"
              onClick={handleFileInputClick}
            >
              Select photo from device
            </CustomButton>
          </section>
          <small>JPG, PNG file format accepted</small>
          <CustomButton variant="primary" onClick={() => setIsModalOpen(false)}>
            Upload
          </CustomButton>
        </DashboardModal>
      )}

      {/* success modal */}
      {isSuccessModalOpen && (
        <DashboardModal
          onClose={handleCloseModal}
          className="flex w-[25rem] flex-col items-center justify-center space-y-[20px]"
        >
          <div>
            <Image src="/images/ok.svg" alt="ok" width={50} height={50} />
          </div>
          <h2 className="m-0 text-center text-[20px] font-semibold">
            Your profile has been successfully edited
          </h2>
          <p className="m-0 text-neutral-130">Click to see new profile</p>
          <CustomButton
            variant="primary"
            className="w-full"
            onClick={() => setIsSuccessModalOpen(false)}
          >
            View Profile
          </CustomButton>
        </DashboardModal>
      )}

      <section className="mt-[30px] w-full rounded-[15px] border-2 border-neutral-30 bg-white p-[20px] sm:p-[30px] md:p-[40px]">
        <div className="block w-full items-center space-x-0 lg:flex lg:space-x-[70px]">
          {/* profile image section */}
          <section className="profile-image">
            {isEditing ? (
              <div
                data-testid="profileImage"
                onClick={() => setIsModalOpen(true)}
                className="relative h-[180px] w-[180px] cursor-pointer sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
              >
                <Image
                  src={temporaryImage || "/images/profile_avatar.svg"}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center"
                />
                <Camera className="absolute left-[20px] top-[20px] text-neutral-110 sm:top-[30px] md:left-[30px] md:top-[50px]" />
              </div>
            ) : (
              <div className="h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
                <Image
                  src={image || "/images/profile_avatar.svg"}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}
          </section>

          {/* profile details section */}
          <section className="mt-[30px] w-full lg:mt-0">
            {isEditing ? (
              <>
                <section className="space-y-[15px] sm:space-y-[25px]">
                  <div className="block items-center justify-between sm:flex">
                    <label htmlFor="fullname" className="font-semibold">
                      Name
                    </label>
                    <div>
                      <CustomInput
                        name="fullname"
                        inputType="text"
                        className="w-[100%]"
                        placeholder="Name"
                        value={temporaryName ? name : temporaryName}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="block items-center justify-between sm:flex">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <div>
                      <CustomInput
                        name="email"
                        inputType="email"
                        className="w-[100%]"
                        placeholder="Email"
                        value={temporaryEmail ?? email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:flex">
                    <label htmlFor="gender" className="font-semibold">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={temporaryGender ?? gender}
                      onChange={(event) => setGender(event.target.value)}
                      className="w-[100%] rounded border border-gray-300 p-2"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <small className="text-red-600">{error}</small>
                </section>
                <section className="mt-[40px] flex w-full items-center justify-center space-x-5">
                  <CustomButton
                    variant="secondary-two"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton variant="primary" onClick={handleSave}>
                    Save
                  </CustomButton>
                </section>
              </>
            ) : (
              <>
                <div className="block items-center justify-between sm:flex">
                  <label htmlFor="fullname" className="font-semibold">
                    Name
                  </label>
                  <p className="text-neutral-130">{temporaryName}</p>
                </div>
                <div className="block items-center justify-between sm:flex">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <p className="text-neutral-130">{temporaryEmail}</p>
                </div>
                <div className="block items-center justify-between sm:flex">
                  <label htmlFor="gender" className="font-semibold">
                    Gender
                  </label>
                  <p className="text-neutral-130">{temporaryGender}</p>
                </div>
                <section className="mt-[40px] flex w-full items-center justify-center">
                  <CustomButton
                    variant="primary"
                    onClick={handleUpdateProfileClick}
                  >
                    Edit
                  </CustomButton>
                </section>
              </>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default AdminProfile;
