import "./about.scss";
import { easeInOut, motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.2, x: -300 }}
          whileInView={{ opacity: 1, scale: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
          className="textContainer"
        >
          <h1>
            Hi I am <span>Zahid Hasan</span>
          </h1>
          <br />
          <p>
            a Computer Science graduate from the prestigious University of Asia
            Pacific. With a solid foundation in Computer Science, I have
            immersed myself in the world of web development, specializing in the
            MERN (MongoDB, Express.js, React.js, Node.js) stack for the past 1.5
            years.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.2, x: 300 }}
          whileInView={{ opacity: 1, scale: 1, x: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
          className="skills"
        >
          <h2>Skills</h2>
          <div>
            <h5>javaScript</h5>
            <div className="js"></div>
          </div>
          <div>
            <h5>ReactJs</h5>
            <div className="rjs"></div>
          </div>
          <div>
            <h5>NodeJs</h5>
            <div className="njs"></div>
          </div>
          <div>
            <h5>ExpressJs</h5>
            <div className="ejs"></div>
          </div>
          <div>
            <h5>MongoDB</h5>
            <div className="mongo"></div>
          </div>
          <div>
            <h5>HTML</h5>
            <div className="html"></div>
          </div>
          <div>
            <h5>CSS</h5>
            <div className="css"></div>
          </div>
          <div>
            <h5>Firebase</h5>
            <div className="fire"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
