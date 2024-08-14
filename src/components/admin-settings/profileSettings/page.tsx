/* eslint-disable no-console */
"use client";

import { Camera } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  getAdminProfile,
  updateAdminProfile,
} from "~/app/api/admindashboard/route";
import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import CustomInput from "~/components/input/CustomInput";
import { Skeleton } from "~/components/ui/skeleton";

type ProfileData = {
  image: string;
  username: string;
  email: string;
  gender: string;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

const validateImageFile = (file: File): boolean => {
  const allowedFormats = ["image/jpeg", "image/png"];
  return allowedFormats.includes(file.type);
};

const AdminProfile = () => {
  const { data: session } = useSession();
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [temporaryGender, setTemporaryGender] = useState(gender);
  const [temporaryImage, setTemporaryImage] = useState(image);
  const [temporaryEmail, setTemporaryEmail] = useState(email);
  const [temporaryName, setTemporaryName] = useState(name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [isLoadingAdminDetails, setIsLoadingAdminDetails] = useState(true);

  useEffect(() => {
    async function fetchAdminProfile() {
      setIsLoadingAdminDetails(true);
      try {
        const response = await getAdminProfile(session?.access_token);
        if (response?.data) {
          setTemporaryImage(
            response.data.data.avatar_url || "/images/profile_avatar.svg",
          );
          setTemporaryName(response.data.data.username);
          setTemporaryEmail(response.data.data.email);
          setTemporaryGender(response.data.data.gender);
          setIsLoadingAdminDetails(false);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchAdminProfile();
  }, [session?.access_token]);

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
      const file = event.dataTransfer.files[0];
      if (!validateImageFile(file)) {
        setError("Only JPG, JPEG, and PNG formats are allowed.");
        return;
      }

      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          setImage(event.target.result as string);
        }
      });
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const profileData = {} as Partial<ProfileData>;

      if (image ?? temporaryImage) profileData.image = image ?? temporaryImage;
      if (name ?? temporaryName) profileData.username = name ?? temporaryName;
      if (email ?? temporaryEmail) profileData.email = email ?? temporaryEmail;
      if (gender ?? temporaryGender)
        profileData.gender = gender ?? temporaryGender;

      await updateAdminProfile(
        profileData as ProfileData,
        session?.access_token,
      );

      setError("");
      setIsEditing(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  const handleUpdateProfileClick = () => {
    setIsEditing(!isEditing);
    if (error) {
      setError("");
    }
  };

  return (
    <main data-testid="profile-settings" className="font-inter">
      {/* upload image modal */}
      {/* upload image modal */}
      {isModalOpen && (
        <DashboardModal
          onClose={() => setIsModalOpen(false)}
          className="flex w-full flex-col items-center justify-center space-y-[20px] md:w-[40rem]"
        >
          <section className="flex w-full flex-col items-center justify-center space-y-[20px] border-[3px] border-dashed py-[20px] md:w-[25rem]">
            <div
              className="drag-drop-area"
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
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
              onClick={() =>
                document.querySelector<HTMLInputElement>("#fileInput")?.click()
              }
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
      {/* success modal */}
      {isSuccessModalOpen && (
        <DashboardModal
          onClose={() => setIsSuccessModalOpen(false)}
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
          {}
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
              <>
                {" "}
                {isLoadingAdminDetails ? (
                  <Skeleton className="h-[180px] w-[180px] bg-neutral-40 sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]" />
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
              </>
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
                        value={temporaryName ?? name}
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
                      />{" "}
                      <br />
                      <small className="text-red-600">{error}</small>
                    </div>
                  </div>
                  <div className="block items-center justify-between sm:flex">
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
                {isLoadingAdminDetails ? (
                  <>
                    <Skeleton className="h-[40px] w-[180px] bg-neutral-40 sm:h-[40px] sm:w-[300px] lg:h-[40px] lg:w-[400px]" />
                    <Skeleton className="mt-8 h-[40px] w-[180px] bg-neutral-40 sm:h-[40px] sm:w-[300px] lg:h-[40px] lg:w-[400px]" />
                    <Skeleton className="mt-8 h-[40px] w-[180px] bg-neutral-40 sm:h-[40px] sm:w-[300px] lg:h-[40px] lg:w-[400px]" />
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="block items-center justify-between sm:flex">
                      <label htmlFor="fullname" className="font-semibold">
                        Name
                      </label>
                      <p className="text-neutral-130">
                        {temporaryName ?? "N/A"}
                      </p>
                    </div>
                    <div className="block items-center justify-between sm:flex">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <p className="text-neutral-130">
                        {temporaryEmail ?? "N/A"}
                      </p>
                    </div>
                    <div className="block items-center justify-between sm:flex">
                      <label htmlFor="gender" className="font-semibold">
                        Gender
                      </label>
                      <p className="text-neutral-130">
                        {temporaryGender ?? "N/A"}
                      </p>
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
              </>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default AdminProfile;
