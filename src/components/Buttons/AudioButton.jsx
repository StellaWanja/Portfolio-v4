import { useState, useRef, useEffect } from "react";
import { HiVolumeUp, HiVolumeOff  } from "react-icons/hi";
import audioSrc from "../../assets/sounds/bg-music.mp3";
import usePageVisibility from "../../hooks/use-page-visiibility";

const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isVisible = usePageVisibility();
  const audioRef = useRef();

  const audioCtrl = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.loop = false;
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <>
      <button className="nav-buttons" onClick={audioCtrl}>
        {isPlaying ? <HiVolumeUp /> : <HiVolumeOff />}
      </button>
      <audio ref={audioRef} src={audioSrc} />
    </>
  );
};

export default AudioButton;
