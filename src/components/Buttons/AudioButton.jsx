import { useState, useRef } from "react";
import { Volume2, VolumeX } from "react-feather";
import audioSrc from "../../assets/sounds/bg-music.mp3";

const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const audioCtrl = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.loop = true;
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <>
      <button className="nav-buttons" onClick={audioCtrl}>
        {isPlaying ? <Volume2 /> : <VolumeX />}
      </button>
      <audio ref={audioRef} src={audioSrc} />
    </>
  );
};

export default AudioButton;
