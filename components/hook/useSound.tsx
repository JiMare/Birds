import { useState, useEffect } from "react";

export const useSound = (url: string) => {
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

  return [playAudio, pauseAudio, toggleAudio];
};

export default useSound;
