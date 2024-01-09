import "./parallax.scss";
import { motion } from "framer-motion";

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg,#111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132, #505064)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: -500 }}
        whileInView={{ y: 1, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, ease: "linear", duration: 0.5 }}
      >
        {type === "service" ? "WHAT I DO" : "what I Did"}
      </motion.h1>
      <motion.div
        className="mountain"
        initial={{ opacity: 0, scale: 1.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
      ></motion.div>
      <motion.div
        className="planet"
        initial={{ opacity: 0, scale: 0.5, y: 200 }}
        whileInView={{ opacity: 1, scale: 1, y: 1 }}
        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="star"
        initial={{ opacity: 0, scale: 0.3, y: 400 }}
        whileInView={{ opacity: 1, scale: 1, y: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
