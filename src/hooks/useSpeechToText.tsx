"use client";

import { useRef, useState } from "react";
import RecordRTC from "recordrtc";

interface UseSpeechToTextProperties {
  setCurrentChat: (transcript: string) => void;
}
interface UseSpeechToTextReturn {
  isRecording: boolean;
  startTranscription: () => void;
  stopTranscription: (event: React.FormEvent) => Promise<void>;
}
const useSpeechToText = ({
  setCurrentChat,
}: UseSpeechToTextProperties): UseSpeechToTextReturn => {
  const socket = useRef<WebSocket | null>(null);
  const recorder = useRef<RecordRTC | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const generateTranscript = async () => {
    try {
      const response = await fetch(
        `/api/speech-to-text?timestamp=${Date.now()}`,
        { cache: "no-store" },
      );
      const result = await response.json();
      if (result.error) {
        alert(result.error.message);
        return;
      }
      const token: string = result.data.token;
      socket.current = new WebSocket(
        `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`,
      );
      const texts: Record<number, string> = {};
      socket.current.onmessage = (voicePrompt: MessageEvent) => {
        let message = "";
        const res = JSON.parse(voicePrompt.data);
        texts[res.audio_start] = res.text;
        const keys = Object.keys(texts)
          .map(Number)
          .sort((a, b) => a - b);
        for (const key of keys) {
          if (texts[key]) {
            message += ` ${texts[key]}`;
          }
        }
        setCurrentChat(message);
      };
      socket.current.onerror = (event) => {
        console.error(event);
        socket.current?.close();
      };
      socket.current.addEventListener("close", (event) => {
        console.log(event);
        socket.current = null;
      });
      socket.current.addEventListener("open", () => {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((stream) => {
            recorder.current = new RecordRTC(stream, {
              type: "audio",
              mimeType: "audio/webm;codecs=pcm",
              recorderType: RecordRTC.StereoAudioRecorder,
              timeSlice: 250,
              desiredSampRate: 16_000,
              numberOfAudioChannels: 1,
              bufferSize: 4096,
              audioBitsPerSecond: 128_000,
              ondataavailable: (blob: Blob) => {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  const base64data = reader.result as string;
                  if (socket.current) {
                    socket.current.send(
                      JSON.stringify({
                        audio_data: base64data.split("base64,")[1],
                      }),
                    );
                  }
                });
                reader.readAsDataURL(blob);
              },
            });
            recorder.current.startRecording();
          })
          .catch((error) => console.error(error));
      });
      setIsRecording(true);
    } catch (error) {
      console.error(error);
    }
  };
  const endTranscription = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsRecording(false);
    socket.current?.send(JSON.stringify({ terminate_session: true }));
    socket.current?.close();
    socket.current = null;
    recorder.current?.pauseRecording();
    recorder.current = null;
  };
  return {
    isRecording,
    startTranscription: generateTranscript,
    stopTranscription: endTranscription,
  };
};
export default useSpeechToText;
