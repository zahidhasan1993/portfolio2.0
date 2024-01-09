import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <div>
          <motion.span initial={{opacity: 0.2, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 1, ease:"easeIn", delay: 0.3}}>Zahid Hasan</motion.span>
        </div>
        <div className="links">
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/github.png" alt="" />
          </a>
          <a href="">
            {" "}
            <img
              src="/public/linkedin-logo-linkedin-icon-transparent-free-png.webp"
              alt=""
            />
          </a>
          <a href="">
            <img src="/public/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
