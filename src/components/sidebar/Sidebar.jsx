import { useState } from "react";
import Links from "./Links";
import ToggleButtons from "./ToggleButtons";
import "./sidebar.scss";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "HomePage",
      path: "home",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Services",
      path: "service",
    },
    {
      title: "Projects",
      path: "portfolio",
    },

    {
      title: "Contact",
      path: "contact",
    },
  ];

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 30,
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
        <Links links={links}></Links>
      </motion.div>
      <ToggleButtons setOpen={setOpen}></ToggleButtons>
    </motion.div>
  );
};

export default Sidebar;
