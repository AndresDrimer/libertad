"use client"
import { useEffect, useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";

function BgAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio on mount
    }
  }, []);

  const [soundOn, setSoundOn] = useState(false);

  const handleSoundToggle = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    setSoundOn(!soundOn);
  };

  return (
    <div>
      <button onClick={handleSoundToggle} className="cursor-pointer">
        {!soundOn ? <GoMute /> : <GoUnmute />}
      </button>
      <audio ref={audioRef} src="/sounds/hinchada-loop-4bars.mp3" loop />
    </div>
  );
}

export default BgAudio;
