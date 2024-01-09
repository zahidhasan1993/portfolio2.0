import "./parallax.scss";
import { motion } from "framer-motion";
const Parallax = ({ type }) => {
  return (
    <div className="parallax">
      <motion.h1
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {type === "service" ? "What I Do?" : "What I Did"}
      </motion.h1>
    </div>
  );
};

export default Parallax;
