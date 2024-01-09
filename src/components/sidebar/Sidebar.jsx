import { useState } from "react";
import Links from "./Links";
import ToggleButtons from "./ToggleButtons";
import "./sidebar.scss";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links></Links>
      </motion.div>
      <ToggleButtons setOpen={setOpen}></ToggleButtons>
    </motion.div>
  );
};

export default Sidebar;
