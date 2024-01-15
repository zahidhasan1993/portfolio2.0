import "./service.scss";
import { easeInOut, motion } from "framer-motion";
import peopleImg from "../../../public/people.webp";
const Services = () => {
  return (
    <motion.div
      className="service"
      initial={{ opacity: 0, scale: 0.5, x: -100 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="textContainer">
        <p>
          🚀 Code your success, Grow
          <br /> your empire.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        initial={{ opacity: 0, scale: 0.5, y: 300 }}
        whileInView={{ opacity: 1, scale: 1, y: 1 }}
        transition={{ duration: 1, delay: 1, ease: easeInOut }}
      >
        <div className="title">
          <img src={peopleImg} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          {" "}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="cardContainer"
        initial={{ opacity: 0, scale: 0.5, y: -300 }}
        whileInView={{ opacity: 1, scale: 1, y: 1 }}
        transition={{ duration: 1, delay: 1, staggerChildren: 0.3 }}
      >
        <motion.div
          className="card"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h1>Single-page applications</h1>
          <p>
            I can build your website in one page website.You can make your dream
            to be real and i am going to make this happen.
          </p>
          <button>
            <a href="https://toyverse-f253a.web.app/">Go</a>
          </button>
        </motion.div>
        <motion.div
          className="card"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h1>Dashboards</h1>
          <p>
            For you bigger project where you need a dashboard to track on your
            website i can do this for you.
          </p>
          <button>
            <a href="https://dineease-15e58.web.app/">Go</a>
          </button>
        </motion.div>
        <motion.div
          className="card"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h1>E-commerce</h1>
          <p>
            I am offering a full e-commerce platform from scratch. Your need is
            command for me.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="card"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h1>Dynamic Website</h1>
          <p>
            I am offering a full stack dynamic website. It is a challenge for
            me. With MERN Stack i can build your dream projects.
          </p>
          <button>
            <a href="https://luxeseven-f5a34.web.app/">Go</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
