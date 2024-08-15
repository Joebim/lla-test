/* eslint-disable no-console */
"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import CustomInput from "~/components/input/CustomInput";
import { Skeleton } from "~/components/ui/skeleton";
import { useToast } from "~/components/ui/use-toast";
import {
  getAdminProfile,
  updateAdminProfile,
} from "~/lib/services/adminDashboard";

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
  const { toast } = useToast();

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
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorGender, setErrorGender] = useState("");
  function ValidateForm() {
    if (!email && !temporaryEmail) {
      setErrorEmail("enter a valid email");
      return false;
    }
    if (!name && !temporaryName) {
      setErrorName("enter name");

      return false;
    }
    if (!gender && !temporaryGender) {
      setErrorGender("pick a gender");

      return false;
    }
    return true;
  }
  useEffect(() => {
    async function fetchAdminProfile() {
      setIsLoadingAdminDetails(true);
      try {
        const response = await getAdminProfile();
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
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (validateImageFile(file)) {
        setError("");
      } else {
        setError("Only JPG, JPEG, and PNG formats are allowed.");
        return;
      }
      setError("");

      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          // Update the image state directly to reflect the change immediately
          setImage(event.target.result as string);
          setTemporaryImage(event.target.result as string); // If you're using a temporary image state for preview
        }
      });
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      if (validateImageFile(file)) {
        setError("");
      } else {
        setError("Only JPG, JPEG, and PNG formats are allowed.");
        return;
      }
      setError("");

      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          // Update the image state directly to reflect the change immediately
          setImage(event.target.result as string);
          setTemporaryImage(event.target.result as string); // If you're using a temporary image state for preview
        }
      });
      reader.readAsDataURL(file);
    }
  };
  const [updateLoading, setUpdateLoading] = useState(false);
  const handleSave = async () => {
    console.log("clicked");
    if (!validateEmail(email || temporaryEmail)) {
      setErrorEmail("Please enter a valid email address");
      return;
    }
    if (!ValidateForm()) {
      return;
    }
    console.log("reach");

    setUpdateLoading(true);
    try {
      const profileData = {} as Partial<ProfileData>;

      if (image ?? temporaryImage) profileData.image = image ?? temporaryImage;
      if (name ?? temporaryName) profileData.username = name ?? temporaryName;
      if (email ?? temporaryEmail) profileData.email = email ?? temporaryEmail;
      if (gender ?? temporaryGender)
        profileData.gender = gender ?? temporaryGender;

      const response = await updateAdminProfile(profileData as ProfileData);
      console.log({ response });
      setError("");
      setIsEditing(false);
      setIsSuccessModalOpen(true);
      setUpdateLoading(false);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
    // }
  };

  const handleUpdateProfileClick = () => {
    setIsEditing(!isEditing);
    if (error) {
      setError("");
    }
  };
  async function fetchAdminProfile() {
    setIsLoadingAdminDetails(true);
    try {
      const response = await getAdminProfile();
      if (response?.data) {
        setTemporaryImage(
          response.data.data.avatar_url || "/images/profile_avatar.svg",
        );
        setTemporaryName(response.data.data.username);
        setTemporaryEmail(response.data.data.email);
        setTemporaryGender(response.data.data.gender);
        setIsLoadingAdminDetails(false);
      }
      setIsLoadingAdminDetails(false);
    } catch (error) {
      setIsLoadingAdminDetails(false);

      toast({
        title: "Error",
        description: "Error while saving",
        variant: "critical",
      });
      throw error;
    }
  }
  const viewProfile = () => {
    setIsSuccessModalOpen(false);
    fetchAdminProfile();
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
            onClick={viewProfile}
          >
            View Profile
          </CustomButton>
        </DashboardModal>
      )}

      <section className="mt-[30px] w-full rounded-[15px] border-2 border-neutral-30 bg-white p-[20px] sm:p-[30px] md:p-[40px]">
        <div className="block w-full items-center space-x-0 xl:flex xl:space-x-[70px]">
          {/* profile image section */}
          {}
          <section className="profile-image">
            {isEditing ? (
              <>
                <div
                  data-testid="profileImage"
                  onClick={() => setIsModalOpen(true)}
                  className="relative h-[180px] w-[180px] cursor-pointer sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
                >
                  <Image
                    src={
                      image || temporaryImage || "/images/profile_avatar.svg"
                    } // Use the image state for rendering
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center"
                  />
                  <Camera className="absolute left-[20px] top-[20px] text-neutral-110 sm:top-[30px] md:left-[30px] md:top-[50px]" />
                </div>
                <p className="text-[0.875rem] text-red-400">{error}</p>
              </>
            ) : (
              <>
                {isLoadingAdminDetails ? (
                  <Skeleton className="h-[180px] w-[180px] bg-neutral-40 sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]" />
                ) : (
                  <div className="h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
                    <Image
                      src={image || "/images/profile_avatar.svg"} // Use the image state for rendering
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
                <section className="space-y-[15px] xl:space-y-[25px]">
                  <div className="block items-center justify-between sm:grid sm:grid-cols-2">
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
                      <small className="text-[0.75rem] text-red-600">
                        {errorName}
                      </small>
                    </div>
                  </div>
                  <div className="block items-center justify-between sm:grid sm:grid-cols-2">
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
                      <small className="text-[0.75rem] text-red-600">
                        {errorEmail}
                      </small>
                    </div>
                  </div>
                  <div className="block items-center justify-between gap-4 sm:grid sm:grid-cols-2 xl:gap-2">
                    <label htmlFor="gender" className="font-semibold">
                      Gender
                    </label>
                    <div className="w-full">
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
                      <small className="text-[0.75rem] text-red-600">
                        {errorGender}
                      </small>
                    </div>
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
                    {updateLoading ? "Saving" : "Save"}
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
