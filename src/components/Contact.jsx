import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="c-space my-20 ">
      <h3 className="head-text">Let's Build Something Together</h3>
      <p className="grid-subtext">
        Feel free to reach out if you're looking for a full-stack developer,
        have a question or just want to connect.
      </p>

      <div className="flex   gap-4 pt-5 ">
        <Link
          to="https://github.com/StellaWanja"
          className="icon"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/stella-w-njoroge/"
          className="icon"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://twitter.com/StylaDes"
          className="icon"
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          to="https://dribbble.com/StylaDes"
          className="icon"
          target="_blank"
        >
          <FaDribbble />
        </Link>
        <Link
          to="https://www.behance.net/stylades"
          className="icon"
          target="_blank"
        >
          <FaBehance />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
