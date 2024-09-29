import { useScroll, useTransform } from "framer-motion";
import Spaceman from "../canvas/Spaceman";
import Button from "./Buttons/Button";

const Hero = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="min-h-screen w-full flex flex-col sm:flex-row justify-center items-center gap-5">
      <div className="w-full mx-auto flex flex-col items-center sm:items-start px-5  gap-3 ">
        <p className="text-2xl sm:text-3xl font-medium text-white font-generalsans">
          Hi, I&apos;m Stella | StylaDes <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I&apos;m a Fullstack Developer
        </p>
      </div>
      <div className="w-full mx-auto flex justify-center sm:justify-end items-center">
        <Spaceman />
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
      <a href="#about" className="w-fit">
          <Button isBeam containerClass="sm:w-fit w-full sm:min-w-96">Let&apos;s work together</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
