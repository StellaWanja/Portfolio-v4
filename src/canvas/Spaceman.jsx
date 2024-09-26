import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import spacemanScene from "../assets/spaceman.png";

const Spaceman = () => {
  const spacemanRef = useRef();

  useGSAP(() => {
    gsap.to(spacemanRef.current, {
      y: 15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <img src={spacemanScene} ref={spacemanRef} alt="spaceman" width={"100%"} />
  );
};

export default Spaceman;
