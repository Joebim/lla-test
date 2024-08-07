"use client";

import { Check, Orbit, PlusIcon } from "lucide-react";
import { FC, useState } from "react";

import AdminNav from "~/components/AdminNav/AdminNav";
import CheckboxList from "~/components/checkbox/checkbox";
import CustomButton from "~/components/common/common-button/common-button";
import AdminNavDropdown from "~/components/common/dropdowns/AdminNavDropdown";
import LanguageSelector from "~/components/common/dropdowns/LanguageSelector";
import UserNavDropdown from "~/components/common/dropdowns/UserNavDropdown";
import SearchBar from "~/components/common/searchbar/Searchbar";
import SearchIcon from "~/components/common/searchbar/SearchIcon";
import Correct from "~/components/correct";
import ButtonGrid from "~/components/gameNavigationButtons/ButtonGrid";
import LevelDisplay from "~/components/level-display/LevelDisplay";
import MicrophoneComponent from "~/components/microphone/MicrophoneComponent";
import VolumeBar from "~/components/miscellaneous/Volume";
import { Cookies } from "~/components/modals/cookies";
import LearningGoalModal from "~/components/modals/LearningGoalModal";
import Modal from "~/components/modals/LevelSuccessModal";
import MissionBriefModal from "~/components/modals/MissionBriefModal";
import NavTabs from "~/components/Nav-tab/Navtab";
import Notification from "~/components/notification/Notification";
import PasswordCriteria from "~/components/password/passwordCriteria";
import { ConnectedPreButton } from "~/components/preview-buttons/Connected";
import { DefaultPreButton } from "~/components/preview-buttons/Default";
import { DisabledPreButton } from "~/components/preview-buttons/Disabled";
import { FocussedPreButton } from "~/components/preview-buttons/Focussed";
import { LoadedPreButton } from "~/components/preview-buttons/Loaded";
import QuestLevelTimer from "~/components/quest-level-timer/QuestLevelTimer";
import LoadingCircles from "~/components/quest-loading/LoadingCircles";
import QuestLoadingPage from "~/components/quest-loading/QuestLoadingPage";
import QuestPreviewCard from "~/components/quest/questPreviewCard";
import QuestSceneCard from "~/components/quest/questSceneCard";
import QuestWraper from "~/components/quest/questWraper";
import QuestLearningNow, {
  theQuestProperties,
} from "~/components/questLearningNow/questLearningNow";
import DifficultLevel from "~/components/range/difficulty-level/DifficultLevel";
import LevelProgress from "~/components/range/Levels/LevelProgress";
import Speakers from "~/components/speakers";
import IconPanel from "~/components/speakingStates/audio";
import PlayerThought from "~/components/thoughts/PlayerThought";
import Toasts from "~/components/toasts/Toasts";
import ToggleSwitch from "~/components/toggle/ToggleSwitch";
import TryAgain from "~/components/TryAgain";
import Accordion from "~/components/ui/CustomAccordion";
import SignUpModal from "~/components/userSignUp/SignUpModal";

const StyleGuide: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showQuestLoading, setShowQuestLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((previous) => !previous);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const theQuestArray: theQuestProperties[] = [
    {
      image: "/images/hero-image.svg",
      nameOfQuest: "Journey",
      currentStageOfQuest: 5,
      noOfPoints: 5,
      noOfLevels: 2,
    },
    {
      image: "/images/hero-image.svg",
      nameOfQuest: "Journey",
      currentStageOfQuest: 5,
      noOfPoints: 5,
      noOfLevels: 2,
    },
    {
      image: "/images/hero-image.svg",
      nameOfQuest: "Journey",
      currentStageOfQuest: 5,
      noOfPoints: 5,
      noOfLevels: 2,
    },
  ];
  const handleShowQuestLoading = () => {
    setShowQuestLoading(true);
  };

  const handleHideQuestLoading = () => {
    setShowQuestLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-start gap-7 overflow-hidden p-6 sm:p-12 md:p-24">
      <div className="w-4/5 space-y-2 py-5">
        <h2 className="text-2xl font-semibold">Navigation Tab</h2>
        <NavTabs />
      </div>
      <h2 className="text-2xl font-semibold">Color Guides</h2>
      <div
        className="grid w-full items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        {/* Neutral Colors */}
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-10 px-4 py-4 text-black">
          bg-neutral-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-20 px-4 py-4 text-black">
          bg-neutral-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-30 px-4 py-4 text-black">
          bg-neutral-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-40 px-4 py-4 text-black">
          bg-neutral-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-50 px-4 py-4 text-black">
          bg-neutral-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-60 px-4 py-4 text-black">
          bg-neutral-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-70 px-4 py-4 text-black">
          bg-neutral-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-80 px-4 py-4 text-black">
          bg-neutral-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-90 px-4 py-4 text-black">
          bg-neutral-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-100 px-4 py-4 text-white">
          bg-neutral-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-110 px-4 py-4 text-white">
          bg-neutral-110, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-120 px-4 py-4 text-white">
          bg-neutral-120, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-130 px-4 py-4 text-white">
          bg-neutral-130, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-140 px-4 py-4 text-white">
          bg-neutral-140, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-150 px-4 py-4 text-white">
          bg-neutral-150, text-white
        </div>
        {/* Primary Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-10 px-4 py-4 text-black">
          bg-primary-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-20 px-4 py-4 text-black">
          bg-primary-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-30 px-4 py-4 text-black">
          bg-primary-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-40 px-4 py-4 text-black">
          bg-primary-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-50 px-4 py-4 text-black">
          bg-primary-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-60 px-4 py-4 text-black">
          bg-primary-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-70 px-4 py-4 text-black">
          bg-primary-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-80 px-4 py-4 text-black">
          bg-primary-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-90 px-4 py-4 text-black">
          bg-primary-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-100 px-4 py-4 text-white">
          bg-primary-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-110 px-4 py-4 text-white">
          bg-primary-110, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-120 px-4 py-4 text-white">
          bg-primary-120, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-130 px-4 py-4 text-white">
          bg-primary-130, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-140 px-4 py-4 text-white">
          bg-primary-140, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-150 px-4 py-4 text-white">
          bg-primary-150, text-white
        </div>
        {/* Pink Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-10 px-4 py-4 text-black">
          bg-pink-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-20 px-4 py-4 text-black">
          bg-pink-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-30 px-4 py-4 text-black">
          bg-pink-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-40 px-4 py-4 text-black">
          bg-pink-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-50 px-4 py-4 text-black">
          bg-pink-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-60 px-4 py-4 text-black">
          bg-pink-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-70 px-4 py-4 text-black">
          bg-pink-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-80 px-4 py-4 text-black">
          bg-pink-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-90 px-4 py-4 text-black">
          bg-pink-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-100 px-4 py-4 text-white">
          bg-pink-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-110 px-4 py-4 text-white">
          bg-pink-110, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-120 px-4 py-4 text-white">
          bg-pink-120, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-130 px-4 py-4 text-white">
          bg-pink-130, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-140 px-4 py-4 text-white">
          bg-pink-140, text-white
        </div>
        {/* Purple Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-10 px-4 py-4 text-black">
          bg-purple-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-20 px-4 py-4 text-black">
          bg-purple-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-30 px-4 py-4 text-black">
          bg-purple-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-40 px-4 py-4 text-black">
          bg-purple-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-50 px-4 py-4 text-black">
          bg-purple-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-60 px-4 py-4 text-black">
          bg-purple-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-70 px-4 py-4 text-black">
          bg-purple-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-80 px-4 py-4 text-black">
          bg-purple-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-90 px-4 py-4 text-black">
          bg-purple-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-100 px-4 py-4 text-white">
          bg-purple-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-110 px-4 py-4 text-white">
          bg-purple-110, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-120 px-4 py-4 text-white">
          bg-purple-120, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-130 px-4 py-4 text-white">
          bg-purple-130, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-140 px-4 py-4 text-white">
          bg-purple-140, text-white
        </div>
        {/* Secondary Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-10 px-4 py-4 text-black">
          bg-secondary-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-20 px-4 py-4 text-black">
          bg-secondary-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-30 px-4 py-4 text-black">
          bg-secondary-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-40 px-4 py-4 text-black">
          bg-secondary-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-50 px-4 py-4 text-black">
          bg-secondary-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-60 px-4 py-4 text-black">
          bg-secondary-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-70 px-4 py-4 text-black">
          bg-secondary-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-80 px-4 py-4 text-black">
          bg-secondary-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-90 px-4 py-4 text-black">
          bg-secondary-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-100 px-4 py-4 text-white">
          bg-secondary-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-110 px-4 py-4 text-white">
          bg-secondary-110, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-120 px-4 py-4 text-white">
          bg-secondary-120, text-white
        </div>
        {/* Success Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-10 px-4 py-4 text-black">
          bg-success-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-20 px-4 py-4 text-black">
          bg-success-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-30 px-4 py-4 text-black">
          bg-success-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-40 px-4 py-4 text-black">
          bg-success-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-50 px-4 py-4 text-black">
          bg-success-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-60 px-4 py-4 text-black">
          bg-success-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-70 px-4 py-4 text-black">
          bg-success-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-80 px-4 py-4 text-black">
          bg-success-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-90 px-4 py-4 text-black">
          bg-success-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-100 px-4 py-4 text-white">
          bg-success-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-120 px-4 py-4 text-white">
          bg-success-120, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-130 px-4 py-4 text-white">
          bg-success-130, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-140 px-4 py-4 text-white">
          bg-success-140, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-150 px-4 py-4 text-white">
          bg-success-150, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-160 px-4 py-4 text-white">
          bg-success-160, text-white
        </div>
        {/* Critical Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-10 px-4 py-4 text-black">
          bg-critical-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-20 px-4 py-4 text-black">
          bg-critical-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-30 px-4 py-4 text-black">
          bg-critical-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-40 px-4 py-4 text-black">
          bg-critical-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-50 px-4 py-4 text-black">
          bg-critical-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-60 px-4 py-4 text-black">
          bg-critical-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-70 px-4 py-4 text-black">
          bg-critical-70, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-80 px-4 py-4 text-black">
          bg-critical-80, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-90 px-4 py-4 text-black">
          bg-critical-90, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-100 px-4 py-4 text-white">
          bg-critical-100, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-110 px-4 py-4 text-white">
          bg-critical-110, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-120 px-4 py-4 text-white">
          bg-critical-120, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-130 px-4 py-4 text-white">
          bg-critical-130, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-150 px-4 py-4 text-white">
          bg-critical-150, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-160 px-4 py-4 text-white">
          bg-critical-160, text-white
        </div>
        {/* Transparent Black Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-5 px-4 py-4 text-black">
          bg-transparent-black-5, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-10 px-4 py-4 text-black">
          bg-transparent-black-10, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-15 px-4 py-4 text-black">
          bg-transparent-black-15, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-20 px-4 py-4 text-black">
          bg-transparent-black-20, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-25 px-4 py-4 text-black">
          bg-transparent-black-25, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-30 px-4 py-4 text-black">
          bg-transparent-black-30, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-35 px-4 py-4 text-black">
          bg-transparent-black-35, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-40 px-4 py-4 text-black">
          bg-transparent-black-40, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-45 px-4 py-4 text-black">
          bg-transparent-black-45, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-50 px-4 py-4 text-black">
          bg-transparent-black-50, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-55 px-4 py-4 text-black">
          bg-transparent-black-55, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-60 px-4 py-4 text-black">
          bg-transparent-black-60, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-65 px-4 py-4 text-black">
          bg-transparent-black-65, text-black
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-70 px-4 py-4 text-white">
          bg-transparent-black-70, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-75 px-4 py-4 text-white">
          bg-transparent-black-75, text-white
        </div>
        {/* Transparent White Colors */}

        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-10 px-4 py-4 text-white">
          bg-transparent-white-10, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-15 px-4 py-4 text-white">
          bg-transparent-white-15, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-20 px-4 py-4 text-white">
          bg-transparent-white-20, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-25 px-4 py-4 text-white">
          bg-transparent-white-25, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-30 px-4 py-4 text-white">
          bg-transparent-white-30, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-35 px-4 py-4 text-white">
          bg-transparent-white-35, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-40 px-4 py-4 text-white">
          bg-transparent-white-40, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-45 px-4 py-4 text-white">
          bg-transparent-white-45, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-50 px-4 py-4 text-white">
          bg-transparent-white-50, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-55 px-4 py-4 text-white">
          bg-transparent-white-55, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-60 px-4 py-4 text-white">
          bg-transparent-white-60, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-65 px-4 py-4 text-white">
          bg-transparent-white-65, text-white
        </div>
        <div className="shadow flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-70 px-4 py-4 text-white">
          bg-transparent-white-70, text-white
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Button Variants</h2>
      <div
        className="grid w-full grid-cols-5 items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
      >
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Default Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="default">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Primary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="primary">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Primary Two Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="primary-two">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Critical Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="critical">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Loading Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="loading" isLoading={true} />
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="outline">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Secondary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="secondary">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Secondary Two Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="secondary-two">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Neutral Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="neutral">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Link Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="link" size="link">
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            With Icon Default Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton isLeftIconVisible={true} icon={<Orbit />}>
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            With Icon Primary Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="primary"
              isLeftIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Link With Left Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="link"
              size="link"
              isLeftIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Link With Right Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="link"
              size="link"
              isRightIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Icon Only Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="icon"
              isIconOnly={true}
              icon={<PlusIcon />}
            />
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Icon Only Circle Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="circle"
              isIconOnly={true}
              icon={<PlusIcon />}
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Usage</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>Import the custom button component</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-white">
              import <span className="text-blue-400">CustomButton</span> from{" "}
              <span className="text-yellow-400">
                &quot;~/components/common/Button/button&quot;
              </span>
              ;
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Variant Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Variant</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              &rdquo;default&rdquo; <br />
              &rdquo;primary&rdquo; <br />
              &rdquo;primary-two&rdquo; <br />
              &rdquo;critical&rdquo; <br />
              &rdquo;loading&rdquo; <br />
              &rdquo;outline&rdquo; <br />
              &rdquo;secondary&rdquo; <br />
              &rdquo;secondary-two&rdquo; <br />
              &rdquo;neutral&rdquo; <br />
              &rdquo;link&rdquo;
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Size Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Size</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              &rdquo;default&rdquo; <br />
              &rdquo;sm&rdquo; <br />
              &rdquo;lg&rdquo; <br />
              &rdquo;link&rdquo; <br />
              &rdquo;icon&rdquo; <br />
              &rdquo;circle&rdquo;
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Prop Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-blue-400">type Props</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              variant<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">Variant</span> <br />
              size<span className="text-pink-400">?</span>:{" "}
              <span className="text-yellow-400">Size</span>
              <br />
              isLoading?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              isLeftIconVisible?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              isRightIconVisible?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              isIconOnly?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              icon?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">JSX.Element</span>
              <br />
              children?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">React.ReactNode</span>
              <br />
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Example Usage</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-400">ExampleComponent</span>{" "}
              <span className="text-pink-400">=</span> () {"=>"} {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              <span className="text-pink-400">return</span> (
            </span>
            <span className="ml-8 block font-mono text-sm text-gray-100">
              <span className="text-blue-400">CustomButton</span> <br />
              <span className="ml-4 text-yellow-400">variant</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-green-400">&rdquo;primary&rdquo;</span>{" "}
              <br />
              <span className="ml-4 text-yellow-400">size</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-green-400">&rdquo;lg&rdquo;</span> <br />
              <span className="ml-4 text-yellow-400">isLoading</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-pink-400">{"{"}</span>
              <span className="text-green-400">false</span>
              <span className="text-pink-400">{"}"}</span> <br />
              <span className="ml-4 text-yellow-400">
                isLeftIconVisible
              </span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-pink-400">{"{"}</span>
              <span className="text-green-400">true</span>
              <span className="text-pink-400">{"}"}</span> <br />
              <span className="ml-4 text-yellow-400">icon</span>{" "}
              <span className="text-pink-400">=</span> {"{"}
              <span className="text-blue-400">&lt;Orbit /&gt;</span>
              {"}"} <br />
              <span className="ml-4 text-yellow-400">children</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-blue-400">Button CTA</span> <br />
              <span className="text-gray-100">&gt;</span>
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              )
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Preview Buttons</h2>
        <div>
          <div>
            <div className="text-[24px]">Default Button</div>
            <DefaultPreButton />
          </div>
          <div className="text-[24px]">Disabled Button</div>
          <DisabledPreButton />
        </div>
        <div>
          <div className="text-[24px]">Focussed Button</div>
          <FocussedPreButton />
        </div>
        <div>
          <div className="text-[24px]">Loaded Button</div>
          <LoadedPreButton />
        </div>
        <div>
          <div className="text-[24px]">Disabled Button</div>
          <ConnectedPreButton />
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-2xl font-semibold">Alerts</h2>

        <div className="">
          <Toasts variant="default" textDescription="An alert goes here" />
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Dropdowns</h2>
      <div className="pl-[20%]">
        <LanguageSelector />
      </div>
      <h2 className="text-2xl font-semibold">Modals</h2>
      <Cookies />
      <MissionBriefModal />
      <LearningGoalModal />
      <Modal
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Accordion
        title="Accordion Heading"
        content="These cookies are crucial for the website's basic functionality and cannot be disabled. They ensure that the website operates correctly and securely."
        alwaysActive={false}
        defaultOpen={false}
      />
      <Accordion
        title="Accordion Heading"
        content="These cookies are crucial for the website's basic functionality and cannot be disabled. They ensure that the website operates correctly and securely."
        alwaysActive={true}
        defaultOpen={true}
      />
      <h2 className="text-2xl font-semibold">Checkbox</h2>
      <CheckboxList onChange={handleCheckboxChange} checked={isChecked} />
      <h2 className="text-2xl font-semibold">Notifications Alerts</h2>
      <Notification />
      <QuestWraper>
        <div className="grid grid-cols-4 gap-3">
          <QuestPreviewCard
            cardImage="/images/hero-image.svg"
            id={1}
            level={200}
            path="/"
            points={3}
            stage={3}
            title="Card title"
          />

          <QuestPreviewCard
            cardImage="/images/hero-image.svg"
            id={1}
            level={200}
            path="/"
            points={3}
            stage={3}
            title="Card title"
          />

          <QuestPreviewCard
            cardImage="/images/hero-image.svg"
            id={1}
            level={200}
            path="/"
            points={3}
            stage={3}
            title="Card title"
          />

          <QuestPreviewCard
            cardImage="/images/hero-image.svg"
            id={1}
            level={200}
            path="/"
            points={3}
            stage={3}
            title="Card title"
          />
        </div>
      </QuestWraper>
      <div className="flex flex-col gap-3">
        <QuestLearningNow theQuest={theQuestArray} isCompleted={true} />
        <QuestLearningNow theQuest={theQuestArray} isCompleted={false} />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Custom Accordion</h2>
        <Accordion
          title="Accordion Heading"
          content="These cookies are crucial for the website's basic functionality and cannot be disabled. They ensure that the website operates correctly and securely."
          alwaysActive={false}
          defaultOpen={false}
        />
        <Accordion
          title="Accordion Heading"
          content="These cookies are crucial for the website's basic functionality and cannot be disabled. They ensure that the website operates correctly and securely."
          alwaysActive={true}
          defaultOpen={true}
        />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Custom Checkbox</h2>
        <CheckboxList onChange={handleCheckboxChange} checked={isChecked} />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Progress Bar</h2>
        <div className="flex flex-col gap-4 lg:flex-row">
          <LevelProgress
            starCount={1}
            percent={20}
            strokeWidth={5}
            strokeColor="#00AA00"
            starWidth={24}
          />
          <LevelProgress
            starCount={2}
            percent={40}
            strokeWidth={5}
            strokeColor="#FE5900"
            starWidth={24}
          />
        </div>
        <DifficultLevel />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Volume bar</h2>
        <VolumeBar value={20} />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">All Quest Page components</h2>
        <QuestSceneCard
          title="Sample Quest Title"
          points={500}
          description="This is a sample description for the quest."
          stage={1}
          levels={4}
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Toggle Component</h2>
        <ToggleSwitch variant="default" />
      </div>
      <h2 className="text-2xl font-semibold">Search Icon</h2>
      <SearchIcon />
      <h2 className="text-2xl font-semibold">Search bar</h2>
      <SearchBar />
      <h2 className="text-2xl font-semibold">Speaking States</h2>
      <IconPanel />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Speaker Components</h2>
        <div className="flex gap-3 bg-black p-5">
          <Speakers type="Default" />
          <Speakers type="Loud" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Check Components</h2>
        <div className="flex gap-3 bg-gray-400 p-5">
          <Check type="Default" />
          <Check type="Active" />
          <Check type="Correct" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">TryAgain</h2>
        <TryAgain />
        <h2 className="text-2xl font-semibold">Correct</h2>
        <Correct />
      </div>
      ,
      <div className="flex flex-col gap-3">
        <h2 className="mt-2 text-2xl font-semibold">Progress Container</h2>
      </div>
      <div className="flex flex-col gap-4 py-5">
        <h2 className="mt-2 text-2xl font-semibold">Game Navigation Tab</h2>
        <ButtonGrid />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Password Criteria </h2>
        <PasswordCriteria password="Hng1$" />
      </div>
      <div></div>
      {/* Quest Loading */}
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Quest Loading</h2>
        <div className="flex flex-col items-start gap-4 rounded-lg bg-black p-6">
          <h3 className="text-xl font-medium text-white">Loading Circles</h3>
          <LoadingCircles />
          <h3 className="text-xl font-medium text-white">
            Microphone Component
          </h3>
          <MicrophoneComponent />
        </div>
      </div>
      {/* New Quest Page section */}
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Quest Page</h2>
        <CustomButton variant="primary" onClick={handleShowQuestLoading}>
          Quest Page
        </CustomButton>
      </div>
      {/* Conditional rendering of QuestLoadingPage */}
      {showQuestLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-[80vh] w-[100] max-w-4xl rounded-lg bg-white p-6">
            <QuestLoadingPage onClose={handleHideQuestLoading} />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3 py-5">
        <h2 className="text-2xl font-semibold">Quest Level Timer</h2>
        <QuestLevelTimer initialTime={300} />
      </div>
      <h2 className="text-2xl font-semibold">Level Display</h2>
      <LevelDisplay completedLevels={2} />
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Player Thought Component
        </h2>
        <PlayerThought />
      </section>
      {/* Navbar Components */}
      <h2 className="text-2xl font-semibold">Navbar Components</h2>
      <div className="flex w-full flex-col gap-3 py-5">
        <div className="">
          <h2 className="text-xl font-semibold">AdminNav</h2>
          <AdminNav />
        </div>
      </div>
      <div>
        {/* Button to toggle modal visibility */}
        <CustomButton variant="primary" onClick={toggleModal}>
          Sign Up
        </CustomButton>

        {/* Conditionally render the SignUpModal */}
        {isModalVisible && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50`}
          >
            <SignUpModal closeModal={toggleModal} />
          </div>
        )}

        <div className="mt-4">
          <UserNavDropdown />
        </div>

        <div className="mt-4">
          <AdminNavDropdown />
        </div>
      </div>
    </main>
  );
};

export default StyleGuide;
