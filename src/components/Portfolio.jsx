import React, { useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { portfolioProjects } from "../constants";
import { Link } from "react-router-dom";

const projectCount = portfolioProjects.length;

const Portfolio = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = portfolioProjects[selectedProjectIndex];
  const Icon = currentProject.logo;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Work</h3>
      <p className="grid-subtext">
        Take a look at some of the projects I've worked on.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            {/* <img
              src={currentProject.spotlight}
              alt="spotlight-effect"
              className="w-full h-96 object-cover rounded-xl"
            /> */}
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <Icon className="w-10 h-10 shadow-sm" aria-label="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.description}</p>
          </div>

          <div className="flex items-center flex-wrap gap-5">
            <Link
              to={currentProject.githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-white-600 text-xl hover:text-white transition ease-in-out delay-150"
              aria-label="View the code"
            >
              <FaGithubAlt />
            </Link>

            {currentProject.websiteLink && (
              <Link
                to={currentProject.websiteLink}
                target="_blank"
                rel="noreferrer"
                className="text-white-600 text-xl hover:text-white transition ease-in-out delay-150"
                aria-label="View the site"
              >
                <TbWorld />
              </Link>
            )}
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <FaArrowLeftLong />
            </button>

            <button
              className="arrow-btn z-10"
              onClick={() => handleNavigation("next")}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="border border-black-300 w-full  rounded-lg h-96 md:h-full relative shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight-effect"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
