import { QuestProperties } from "~/types";

export const QUEST_DATA: QuestProperties = {
  title: "The burning building",
  mission:
    "Welcome! A fire has broken out in an apartment building in your neighborhood. A baby is trapped inside and needs your help. Your mission: Go into the burning building and rescue the baby. Every second counts! To succeed, you must try to pronounce words accurately and beat the time.",
  difficulty_level: "Beginner",
  thumbnail: "path/to/thumbnail/image.png",
  duration: "3000",
  vocabulary_to_learn: ["Where", "help", "fire", "baby", "ladder", "show"],
  preview: [
    {
      thumbnail: "model1_thumbnail.png",
      size: "2MB",
      uploadDate: "2024-08-11T10:30:00Z",
      description: "A 3D model of a spaceship.",
      tags: ["spaceship", "sci-fi", "3D"],
    },
    {
      thumbnail: "model2_thumbnail.png",
      size: "3MB",
      uploadDate: "2024-08-11T10:45:00Z",
      description: "A 3D model of a tree.",
      tags: ["tree", "nature", "3D"],
    },
    {
      thumbnail: "model3_thumbnail.png",
      size: "1.5MB",
      uploadDate: "2024-08-11T11:00:00Z",
      description: "A 3D model of a robot.",
      tags: ["robot", "tech", "3D"],
    },
  ],
  characters: [
    {
      id: "char1",
      role: "child",
    },
    {
      id: "char2",
      role: "firefighter",
    },
  ],
  objects: [
    {
      id: "obj1",
      name: "ladder",
    },
    {
      id: "obj2",
      name: "fire extinguisher",
    },
  ],
  scenes: [
    {
      id: "scene1",
      title: "Scene 1",
      timestamps: [
        {
          id: "timestamp1",
          description:
            "A fire has broken out in an apartment building in your neighborhood.",
          background: "path/to/background/image.png",
          characters: [
            {
              id: "char1",
              role: "child",
              position: {
                x: 100,
                y: 150,
              },
              transition: {
                in: {
                  type: "fade",
                  duration: "3000",
                },
                out: {
                  type: "fade",
                  duration: "3000",
                },
              },

              animations: [
                {
                  name: "screaming",
                  duration: 10,
                  loop: "once",
                },
              ],
              dialogue: {
                thought: "Hello, how are you?",
                expected_response: "I'm fine",
                hint: "fine",
                correct: {
                  next: "timestamp1",
                  animation: {
                    name: "screaming",
                    duration: 10,
                    loop: "once",
                  },
                },
                false: {
                  next: "do nothing",
                  animations: [
                    {
                      name: "screaming",
                      duration: 10,
                      loop: "once",
                    },
                  ],
                  animation: {
                    name: "screaming",
                    duration: 10,
                    loop: "once",
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
