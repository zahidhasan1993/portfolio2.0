import "./service.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="service">
      <motion.div className="textContainer">
        <p>
          🚀 Code your success, Grow
          <br /> your empire.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/public/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          {" "}
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="cardContainer"></motion.div>
    </motion.div>
  );
};

export default Services;
