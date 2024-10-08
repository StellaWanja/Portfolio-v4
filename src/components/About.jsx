import Lottie from "lottie-react";
import Button from "./Buttons/Button";
import planetAnimation from "../assets/animations/planet.json";
import { techStack } from "../constants";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid lg:grid-cols-3 lg:grid-rows-4  grid-cols-1 gap-5 h-full">
        <div className="col-span-2 md:row-span-2">
          <div className="grid-container">
            <h3 className="grid-headtext">About me</h3>
            <p className="grid-subtext">
              Hi, I&apos;m Stella Wanja (or StylaDes). I&apos;m a full-stack
              developer passionate about crafting seamless digital experiences.
              My goal is to always learn and build elegant user interfaces and
              robust server-side solutions through clean and efficient code.
            </p>
            <p className="grid-subtext">
              I am a technical writer as well and enjoy blogging about my coding
              journey and what I learn. My blog can be found{" "}
              <Link
                to="https://stylades.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
                className="grid-link"
              >
                here.
              </Link>
            </p>
            <p className="grid-subtext">
              When I&apos;m not in front of a computer screen, I&apos;m probably
              knitting, gardening or reading a book.
            </p>
          </div>
        </div>

        <div className="col-span-2 row-span-2 lg:col-span-1 lg:row-span-4">
          <div className="grid-container justify-center items-center">
            <div className="w-full h-full sm:h-1/2 sm:w-1/2 sm:flex sm:justify-center sm:items-center lg:w-full lg:h-full">
              <Lottie animationData={planetAnimation} loop={true} />
            </div>
            <div>
              <p className="grid-subtext">
                I&apos;m based in Nairobi, Kenya and open to remote work
                worldwide.
              </p>
              <a href="#contact">
                <Button isBeam containerClass="w-full mt-10">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2 md:row-span-2">
          <div className="grid-container">
            <h3 className="grid-headtext">Skills & Experience</h3>
            <p className="grid-subtext">
              I have full-stack developer experience working with the following
              technologies. For more details, visit my{" "}
              <Link
                to="https://www.linkedin.com/in/stella-w-njoroge/"
                target="_blank"
                rel="noreferrer"
                className="grid-link"
              >
                LinkedIn.
              </Link>
            </p>

            <div className="grid lg:grid-cols-7 sm:grid-cols-5 grid-cols-3 gap-3">
              {techStack.map(({ tech, icon }, index) => {
                const Icon = icon;
                return (
                  <div
                    key={`tech-stack-${index}`}
                    className="text-white flex flex-col items-center gap-2"
                  >
                    <span className="text-3xl">
                      {" "}
                      <Icon />
                    </span>
                    <p className="text-sm uppercase font-semibold">{tech}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
