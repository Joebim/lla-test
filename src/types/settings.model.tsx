export interface IAudioSettings {
  mic_status: boolean;
  music_status: boolean;
  sound_effect_status: boolean;
  ambient_status: boolean;
  notification_type: string;
}

export interface IAudioSettingsResponse {
  message: string;
  data: IAudioSettingsData;
}

export interface IAudioSettingsData {
  user_id: string;
  mic_status: boolean;
  music_status: boolean;
  sound_effect_status: boolean;
  ambient_status: boolean;
  notification_type: string;
  id: string;
  updated_at: Date;
  created_at: Date;
}
