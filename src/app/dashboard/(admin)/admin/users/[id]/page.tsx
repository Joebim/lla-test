/* eslint-disable no-console */
"use client";

import { Award, Gamepad, Languages, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { GetSingleUser } from "~/app/api/admindashboard/route";
import CustomButton from "~/components/common/common-button/common-button";
import DashboardModal from "~/components/common/dashboardModal/DashboardModal";
import UserDetailsCard from "~/components/userDetailCard";
import UserMetricsCard from "~/components/userMetricsCard";
import UserProfileChart from "~/components/userProfileChart";
import UserProfileTable from "~/components/userProfileTable";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const [isModalOpen, setsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeactivated, setIsDeactivated] = useState(false);

  const [isReactivateModalOpen, setIsReactivateModalOpen] = useState(false);
  const [isReactivateSuccessModalOpen, setIsReactivateSuccessModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    async function getUserDetails() {
      setIsLoading(true);
      try {
        if (params?.id !== undefined) {
          const response = await GetSingleUser(params?.id);
          console.log({ response });
          setUserDetails(response?.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUserDetails();
  }, []);
  useEffect(() => {
    console.log(isLoading, userDetails);
  }, [isLoading]);
  const metricsSchema = [
    {
      title: "Languages of Interest",
      stat: 4,
      desc: "plays than usual",
      icon: <Languages className="w-[20px]" />,
    },
    {
      title: "Total Game Play",
      stat: 128,
      desc: "plays than usual",
      icon: <Gamepad className="w-[20px]" />,
    },
    {
      title: "Overall Achievements",
      stat: 10,
      desc: "plays than usual",
      icon: <Award className="w-[20px]" />,
    },
    {
      title: "Followers",
      stat: 121,
      desc: "plays than usual",
      icon: <Users className="w-[20px]" />,
    },
  ];

  const handleDeactivated = () => {
    setsModalOpen(false);
    setIsDeactivated(true);
    setIsSuccessModalOpen(true);
  };
  const handleReactivated = () => {
    setIsReactivateModalOpen(false);
    setIsReactivateSuccessModalOpen(true);
    setIsDeactivated(false);
  };

  const handleCloseModal = () => {
    if (isModalOpen) {
      setsModalOpen(false);
      return;
    }
    if (isSuccessModalOpen) {
      setIsSuccessModalOpen(false);
      return;
    }
  };
  return (
    <>
      {isModalOpen && (
        <DashboardModal
          onClose={handleCloseModal}
          className="w-[450px] font-axiforma"
        >
          <div>
            <h3 className="mb-[15px] text-center text-[20px] font-bold">
              Deactivate User
            </h3>
            <p className="mb-[15px] text-wrap text-center text-[15px] text-neutral-110">
              Deactivating user means this account will be suspended. Are you
              sure you want to deactiate this user?
            </p>
          </div>
          <div className="flex gap-3 border-t-[3px] border-t-neutral-5 py-[15px]">
            <CustomButton
              variant="neutral"
              className="w-full"
              onClick={() => setsModalOpen(false)}
            >
              Cancel
            </CustomButton>
            <CustomButton
              variant="default"
              onClick={handleDeactivated}
              className="w-full bg-critical-90 px-[30px] text-white"
            >
              Deactivate
            </CustomButton>
          </div>
        </DashboardModal>
      )}
      {isReactivateModalOpen && (
        <DashboardModal
          onClose={handleCloseModal}
          className="w-[450px] font-axiforma"
        >
          <div>
            <h3 className="mb-[15px] text-center text-[20px] font-bold">
              Activate User
            </h3>
            <p className="mb-[15px] text-wrap text-center text-[15px] text-neutral-110">
              Activating user means this account will be restored. Are you sure
              you want to actiate this user?
            </p>
          </div>
          <div className="flex gap-3 border-t-[3px] border-t-neutral-5 py-[15px]">
            <CustomButton
              variant="neutral"
              className="w-full"
              onClick={() => setsModalOpen(false)}
            >
              Cancel
            </CustomButton>
            <CustomButton
              variant="default"
              onClick={handleReactivated}
              className="w-full bg-primary-90 px-[30px] text-white"
            >
              Confirm
            </CustomButton>
          </div>
        </DashboardModal>
      )}
      {isSuccessModalOpen && (
        <DashboardModal
          onClose={handleCloseModal}
          className="w-[30rem] font-axiforma"
        >
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/success.svg"
                alt="success"
                width={80}
                height={80}
              />
            </div>
            <h3 className="mb-[15px] text-center text-[20px] font-bold">
              User Deactivated
            </h3>
            <p className="mb-[15px] text-center text-[15px] text-neutral-110">
              You have successfully deactivated this user.
            </p>
          </div>
          <div className="flex gap-3 border-t-[3px] border-t-neutral-5 py-[15px]">
            <CustomButton
              variant="default"
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-primary-90 px-[30px] text-white"
            >
              Go Home
            </CustomButton>
          </div>
        </DashboardModal>
      )}
      {isReactivateSuccessModalOpen && (
        <DashboardModal
          onClose={handleCloseModal}
          className="w-[30rem] font-axiforma"
        >
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/success.svg"
                alt="success"
                width={80}
                height={80}
              />
            </div>
            <h3 className="mb-[15px] text-center text-[20px] font-bold">
              Re-activated
            </h3>
            <p className="mb-[15px] text-center text-[15px] text-neutral-110">
              User has been successfully reactivated
            </p>
          </div>
          <div className="flex gap-3 border-t-[3px] border-t-neutral-5 py-[15px]">
            <CustomButton
              variant="default"
              onClick={() => setIsReactivateSuccessModalOpen(false)}
              className="w-full bg-primary-90 px-[30px] text-white"
            >
              Go Home
            </CustomButton>
          </div>
        </DashboardModal>
      )}
      <div className="mb-[25px] mt-[25px] flex items-center justify-between md:mt-0">
        <div>
          <h3 className="font-axiforma text-[17px] font-semibold text-secondary-100">
            User Profile
          </h3>
          <p className="text-[14px] text-secondary-80">
            Management / user Profile
          </p>
        </div>
        <div>
          {isDeactivated ? (
            <CustomButton
              variant="default"
              className="border-2 border-success-90 bg-transparent px-[30px] text-success-90"
              onClick={() => setIsReactivateModalOpen(true)}
            >
              Reactivate User
            </CustomButton>
          ) : (
            <CustomButton
              variant="default"
              className="bg-critical-90 px-[30px] text-white md:w-[10rem]"
              onClick={() => setsModalOpen(true)}
            >
              Deactivate User
            </CustomButton>
          )}
        </div>
      </div>
      <section className="block items-center gap-[20px] lg:flex">
        <div className="lg:flex-1">
          <UserDetailsCard className="w-full" />
        </div>
        <div className="mt-[20px] grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:mt-0 lg:flex-1">
          {metricsSchema.map((item, index) => (
            <UserMetricsCard
              key={index}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
              stat={item.stat}
            />
          ))}
        </div>
      </section>
      <section className="mt-[20px] block gap-[20px] lg:flex">
        <UserProfileChart className="flex-1" />
        <UserProfileTable className="lg:flex-1" />
      </section>
    </>
  );
};

export default UserDetails;
