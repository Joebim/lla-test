export type preview = {
  thumbnail: string;
  size: string;
  description: string;
};
export type userQuests = {
  id: string;
  created_at: string;
  description: string;
  duration: string;
  mission_brief: string;
  title: string;
  updated_at: string;
  vocabularies: string;
  thumbnail: string;
  scenes: string[];
  previews: preview[];
};
