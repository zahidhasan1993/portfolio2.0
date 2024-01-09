import "./hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const textVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    scrollButtonAnimate: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>ZAHID HASAN</motion.h2>
          <motion.h1 variants={textVariant}>
            MERN Stack Web Developer & Designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariant}>
            <motion.button variants={textVariant}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariant}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="../../../public/scroll.png"
            alt=""
            variants={textVariant}
            animate="scrollButtonAnimate"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        WEB DEVELOPER & DESIGNER
      </motion.div>
      <div className="imageContainer">
        <img src="./../../../public/zahid.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
