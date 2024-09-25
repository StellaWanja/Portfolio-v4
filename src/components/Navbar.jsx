import React, { useState } from "react";
import { Menu, XCircle } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/logo.svg";
import { navLinks } from "../constants";
import { mobileLinkVars, containerVars, menuVars } from "../variants";

const NavbarLinks = ({ isOpen }) => {
  return (
    <ul className="nav-ul">
      {isOpen ? (
        <motion.div variants={mobileLinkVars} className="text-5xl uppercase ">
          {navLinks.map(({ id, href, title }) => (
            <li key={id} className="nav-li">
              <a href={href} className="nav-li_a">
                {title}
              </a>
            </li>
          ))}
        </motion.div>
      ) : (
        <>
          {navLinks.map(({ id, href, title }) => (
            <li key={id} className="nav-li">
              <a href={href} className="nav-li_a">
                {title}
              </a>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header>
      {!isOpen && (
        <nav className="flex justify-between items-center py-8 sm:py-4 px-2">
          <a href="/" aria-label="Logo" className="flex items-center gap-[1ch]">
            <img src={Logo} alt="Logo" className="w-14" />
            <span className="nav-logo">Portfolio</span>
          </a>
          <div className="sm:flex hidden gap-12 text-neutral-400">
            <NavbarLinks />
          </div>
          <button
            onClick={toggleMenu}
            className="nav-buttons sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </nav>
      )}

      {/* sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="nav-sidebar origin-top"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <a
                  href="/"
                  aria-label="Logo"
                  className="flex items-center gap-[1ch]"
                >
                  <img src={Logo} alt="Logo" className="w-8" />
                  <span className="nav-logo text-lg ">Portfolio</span>
                </a>

                <button className="nav-buttons" onClick={toggleMenu}>
                  <XCircle />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center text-neutral-400 items-center gap-4 "
              >
                <div className="overflow-hidden">
                  <NavbarLinks isOpen={isOpen} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
