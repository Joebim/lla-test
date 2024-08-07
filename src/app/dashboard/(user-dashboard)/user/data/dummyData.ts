interface QuestsStatusProperties {
  inprogress: boolean;
  completed: boolean;
}

export interface QuestsDummyDataProperties {
  id: number;
  image: string;
  title: string;
  numberOfWord: number;
  status: QuestsStatusProperties;
}

export const questsDummyData: QuestsDummyDataProperties[] = [
  {
    id: 1,
    image: "/images/user-dashboard/quest_image_one.png",
    title: "Spy School",
    numberOfWord: 42,
    status: {
      inprogress: false,
      completed: true,
    },
  },

  {
    id: 2,
    image: "/images/user-dashboard/quest_image_two.png",
    title: "The taxi driver",
    numberOfWord: 56,
    status: {
      inprogress: false,
      completed: false,
    },
  },

  {
    id: 3,
    image: "/images/user-dashboard/quest_image_three.png",
    title: "Dental Appointment",
    numberOfWord: 32,
    status: {
      inprogress: false,
      completed: false,
    },
  },
];
