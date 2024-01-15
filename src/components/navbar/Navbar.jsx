import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import fbImg from "../../../public/facebook.png";
import gImg from "../../../public/github.png";
import lImg from "../../../public/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import yImg from "../../../public/youtube.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <div>
          <motion.span
            initial={{ opacity: 0.2, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
          >
            Zahid Hasan
          </motion.span>
        </div>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100066076810758">
            <img src={fbImg} alt="" />
          </a>
          <a href="https://github.com/zahidhasan1993">
            <img src={gImg} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/zahid-hasan-2434a0279/">
            {" "}
            <img src={lImg} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={yImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
