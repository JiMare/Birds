import { useState, useEffect } from "react";

type ResultType = {
  isPlaying: boolean
  playAudio: () => void;
  pauseAudio: () => void;
  toggleAudio: () => void;
};

export const useSound = (url: string): ResultType => {
  const [audio] = useState<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(url) : undefined
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playAudio = (): void => setIsPlaying(true);
  const pauseAudio = (): void => setIsPlaying(false);
  const toggleAudio = (): void => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }

    return () => {
      audio?.pause();
    };
  }, [isPlaying, audio]);

  useEffect(() => {
    audio?.addEventListener("ended", pauseAudio);

    return () => {
      audio?.removeEventListener("ended", playAudio);
    };
  }, [audio]);

  return { isPlaying, playAudio, pauseAudio, toggleAudio };
};

export default useSound;
