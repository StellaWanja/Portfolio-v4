import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, brief, url }) => {
  return (
    <>
      <Link
        className="card-container"
        to={url}
        target="_blank"
        rel="noreferrer"
        aria-label="article"
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className=" font-light mt-3 ">{brief.substring(0, 150)}...</p>
      </Link>
    </>
  );
};

export default Card;
