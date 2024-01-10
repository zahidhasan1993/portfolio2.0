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
      <motion.div className="cardContainer">
        <div className="card">
          <h1>Single-page applications</h1>
          <p>
            I can build your website in one page website.You can make your dream
            to be real and i am going to make this happen.
          </p>
          <button>Go</button>
        </div>
        <div className="card">
          <h1>Dashboards</h1>
          <p>
            For you bigger project where you need a dashboard to track on your
            website i can do this for you.
          </p>
          <button>Go</button>
        </div>
        <div className="card">
          <h1>E-commerce</h1>
          <p>
            I am offering a full e-commerce platform from scratch. Your need is
            command for me.
          </p>
          <button>Go</button>
        </div>
        <div className="card">
          <h1>Dynamic Website</h1>
          <p>
            I am offering a full stack dynamic website. It is a challenge for
            me. With MERN Stack i can build your dream projects.
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
