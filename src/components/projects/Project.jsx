import "./project.scss";
import dineEaseImg from "../../../public/restuarant.jpg";
import rhythmImg from "../../../public/school.jpg";
import luxeImg from "../../../public/hotel.jpg";
import toyImg from "../../../public/toy.jpg";
import resumeImg from "../../../public/resume.jpg";
import { easeIn, easeInOut, motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const SingleSection = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            className="imageContainer"
            initial={{ opacity: 0, x: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            <img src={item.img} alt="" />
          </motion.div>
          <motion.div
            className="textContainer"
            initial={{ opacity: 0, y: 300, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.1, x: 1 }}
              whileInView={{ opacity: 1, scale: 1, x: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: easeIn }}
              className="skills"
            >
              <button>HTML</button>
              <button>CSS</button>
              <button>javaScript</button>
              <button>ReactJs</button>
              <button>NodeJs</button>

              <button>ExpressJS</button>
              <button>Firebase</button>
              <button>TailwindCss</button>
            </motion.div>
            <div className="buttons">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, ease: easeInOut }}
              >
                <a href={item.liveLink}>See Demo</a>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, ease: easeInOut }}
              >
                <a href={item.gitLink}>Github</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const projects = [
    {
      id: 1,
      title: "Dineease",
      img: dineEaseImg,
      liveLink: "https://dineease-15e58.web.app/",
      gitLink: "https://github.com/zahidhasan1993/dineease-clint",
      des: "This App is a restaurant management app. This app is full build.user can order and also payment for their food, they can book their tables.",
    },
    {
      id: 2,
      title: "Rhythm Retreat",
      img: rhythmImg,
      liveLink: "https://rhythm-retreate.web.app/",
      gitLink: "https://github.com/zahidhasan1993/rhythm-retreat-clint",
      des: "This project is based on a summer camp school.This app is have 3 different dashboard for 3 different users.Including a payment method.",
    },
    {
      id: 3,
      title: "LuxeSeven",
      img: luxeImg,
      liveLink: "https://luxeseven-f5a34.web.app/",
      gitLink: "https://github.com/zahidhasan1993/luxeseven",
      des: "This App is a Hotel booking app. This app is fully build. user can book and cancel rooms Admin can add room and check which room is booked",
    },
    {
      id: 4,
      title: "ToyVerse",
      img: toyImg,
      liveLink: "https://toyverse-f253a.web.app/",
      gitLink: "https://github.com/zahidhasan1993/toyverse-clint",
      des: "This app is a toy selling website. User after registration can add their toys on the app and sell them. They can update or delete a toy",
    },
    {
      id: 5,
      title: "ZResume",
      img: resumeImg,
      liveLink:
        "https://656c74efc564b179cf3464e0--clinquant-choux-3007a4.netlify.app/",
      gitLink: "https://github.com/zahidhasan1993/resume-builder",
      des: "This is reactJs based resume builder for only pc. you can create your resume with some simple steps and customize its color and you also can download the resume as pdf.",
    },
  ];
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <SingleSection key={project.id} item={project}></SingleSection>
      ))}
    </div>
  );
};

export default Project;
