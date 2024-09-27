import {motion} from "framer-motion";
import { navLinks } from "../../constants";
import { mobileLinkVars } from "../../variants";

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

export default NavbarLinks;
