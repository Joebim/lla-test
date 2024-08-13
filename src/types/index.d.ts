import { User } from "lucide-react";
import { Session, type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomJWT extends JWT {
  id?: string;
  email?: string;
  picture?: string;
  avatar_url?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
  fullname?: string;
  username?: string;
  access_token?: string;
}
export interface CustomSession extends Session {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    image: string;
    role: string;
  };
  expires: DefaultSession["expires"];
  access_token?: string;
}

export interface User {
  id?: string;
  role?: string;
  email?: string;
  fullname?: string;
  avatar_url?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  expires_in?: string;
}

export interface extendedUser extends User {
  access_token?: string;
}

export interface ApiResponseData {
  access_token: string;
  user: User;
}
export interface ApiResponse {
  status: string;
  status_code: number;
  message: string;
  data: ApiResponseData;
}

export interface Profile {
  id_token: string;
}

export interface AuthResponse {
  data: User;
  access_token: string;
}

export interface ErrorResponse {
  message: string;
  status_code?: number;
}

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
