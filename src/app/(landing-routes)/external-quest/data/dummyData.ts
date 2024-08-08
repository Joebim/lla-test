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
    image: "/external-quest/jungle-survival.jpg",
    title: "Jungle Survival",
    numberOfWord: 24,
    status: {
      inprogress: false,
      completed: true,
    },
  },

  {
    id: 2,
    image: "/external-quest/save-the-cyclist.jpg",
    title: "Save the Cyclist",
    numberOfWord: 18,
    status: {
      inprogress: false,
      completed: false,
    },
  },

  {
    id: 3,
    image: "/external-quest/burning-building.jpg",
    title: "The Burning Building",
    numberOfWord: 22,
    status: {
      inprogress: false,
      completed: false,
    },
  },
  {
    id: 4,
    image: "/external-quest/catch-the-flight.jpg",
    title: "Catch the Flight",
    numberOfWord: 31,
    status: {
      inprogress: false,
      completed: false,
    },
  },
];
