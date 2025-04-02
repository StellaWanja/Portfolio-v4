import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaBolt,
  FaReceipt,
} from "react-icons/fa";
import { RiTailwindCssFill, RiPlantFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJest,
  SiGitbook,
} from "react-icons/si";
import { MdOnlinePrediction } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { FaRegCirclePlay } from "react-icons/fa6";

import EnvisioImg from "../assets/envisio.png";
import BoltImg from "../assets/bolt.png";
import PlantlyfImg from "../assets/plantlyf.png";
import FetchImg from "../assets/FetchImg.png";
import InvoiceHubImg from "../assets/invoicehub.png";
import CurioScribeImg from "../assets/CurioScribeImg.png";
import SpotlightEffect1 from "../assets/spotlight1.png";
import SpotlightEffect2 from "../assets/spotlight2.png";
import SpotlightEffect3 from "../assets/spotlight3.png";
import SpotlightEffect4 from "../assets/spotlight4.png";
import SpotlightEffect5 from "../assets/spotlight5.png";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 3,
    title: "Work",
    href: "#work",
  },
  {
    id: 4,
    title: "Articles",
    href: "#articles",
  },
  {
    id: 5,
    title: "Contact",
    href: "#contact",
  },
];

export const techStack = [
  { tech: "HTML", icon: FaHtml5 },
  { tech: "CSS", icon: FaCss3Alt },
  { tech: "Tailwind", icon: RiTailwindCssFill },
  { tech: "JavaScript", icon: IoLogoJavascript },
  { tech: "NodeJS", icon: FaNodeJs },
  { tech: "TypeScript", icon: SiTypescript },
  { tech: "Express", icon: SiExpress },
  { tech: "React", icon: FaReact },
  { tech: "Bootstrap", icon: FaBootstrap },
  { tech: "MySQL", icon: GrMysql },
  { tech: "MongoDB", icon: SiMongodb },
  { tech: "Git", icon: FaGitAlt },
  { tech: "Jest", icon: SiJest },
  { tech: ".Net", icon: AiOutlineDotNet },
];

export const portfolioProjects = [
  {
    title: "CurioScribe",
    description:
      "A NextJS based web app for dynamic content generation using AI.",
    image: CurioScribeImg,
    websiteLink: "https://curio-scribe.vercel.app/",
    githubLink: "https://github.com/StellaWanja/CurioScribe-Next",
    spotlight: SpotlightEffect2,
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
      color: "#FFFFFF",
    },
    logo: SiGitbook,
  },
  {
    title: "InvoiceHub",
    description: "A NextJS based web app for managing invoices.",
    image: InvoiceHubImg,
    websiteLink: "https://invoice-hub-nine.vercel.app",
    githubLink: "https://github.com/StellaWanja/InvoiceHub",
    spotlight: SpotlightEffect1,
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
      color: "#FFFFFF",
    },
    logo: FaReceipt,
  },
  {
    title: "Fetch",
    description: "An album app built with React",
    image: FetchImg,
    websiteLink: "https://fetch-lilac-three.vercel.app/",
    githubLink: "https://github.com/StellaWanja/Fetch",
    spotlight: SpotlightEffect5,
    logoStyle: {
      backgroundColor: "#0C1611",
      border: "0.2px solid #0C1611",
      boxShadow: "0px 0px 60px 0px #0A1510",
      color: "#FFFFFF",
    },
    logo: FaRegCirclePlay,
  },
  {
    title: "Envisio",
    description:
      "A full-stack web application that predicts whether breast cancer is benign or malignant, built with React, Node.js, Express.js, MongoDB",
    image: EnvisioImg,
    websiteLink: "https://envisio-frontend.vercel.app",
    githubLink: "https://github.com/StellaWanja/MERN-Envisio",
    spotlight: SpotlightEffect2,
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
      color: "#FFFFFF",
    },
    logo: MdOnlinePrediction,
  },
  {
    title: "Bolt",
    description:
      "Developed a shoe ecommerce website using HTML,CSS and JavaScript.",
    image: BoltImg,
    websiteLink: "https://stellawanja.github.io/Bolt/",
    githubLink: "https://github.com/StellaWanja/Bolt",
    spotlight: SpotlightEffect3,
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
      color: "#FFFFFF",
    },
    logo: FaBolt,
  },
  {
    title: "PlantLyf",
    description: "A responsive landing page built using HTML and CSS.",
    image: PlantlyfImg,
    websiteLink: "https://stellawanja.github.io/PlantLyf/",
    githubLink: "https://github.com/StellaWanja/PlantLyf/",
    spotlight: SpotlightEffect4,
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
      color: "#FFFFFF",
    },
    logo: RiPlantFill,
  },
];
