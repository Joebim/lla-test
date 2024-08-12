export type QuestProperties = {
  title: string;
  mission: string;
  difficulty_level: string;
  thumbnail: string;
  duration: string;
  vocabulary_to_learn: string[];
  preview: Preview[];
  characters: Character[];
  objects: GameObject[];
  scenes: Scene[];
};

type Preview = {
  thumbnail: string;
  size: string;
  uploadDate: string;
  description: string;
  tags: string[];
};

type Character = {
  id: string;
  role: string;
};

type GameObject = {
  id: string;
  name: string;
};

type Scene = {
  id: string;
  title: string;
  timestamps: Timestamp[];
};

type Timestamp = {
  id: string;
  description: string;
  background: string;
  characters: SceneCharacter[];
};

type SceneCharacter = {
  id: string;
  role: string;
  position: Position;
  transition: Transition;
  animations: Animation[];
  dialogue: Dialogue;
};

type Position = {
  x: number;
  y: number;
};

type Transition = {
  in: TransitionDetail;
  out: TransitionDetail;
};

type TransitionDetail = {
  type: string;
  duration: string;
};

type Animation = {
  name: string;
  duration: number;
  loop: string;
};

type Dialogue = {
  thought: string;
  expected_response: string;
  hint: string;
  correct: DialogueAction;
  false: DialogueAction;
};

type DialogueAction = {
  next: string;
  animation?: Animation;
  animations?: Animation[];
};
