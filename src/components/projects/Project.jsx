import "./project.scss";
import dineEaseImg from "../../../public/restuarant.jpg";
import rhythmImg from "../../../public/school.jpg";
import luxeImg from "../../../public/hotel.jpg";
import toyImg from "../../../public/toy.jpg";
import resumeImg from "../../../public/resume.jpg";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
const SingleSection = ({ item }) => {
  return <section>{item.title}</section>;
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
      des: "This App is a restaurant management app. This app is full build.user can order and also payment for their food, they can book their tables.",
    },
    {
      id: 2,
      title: "Rhythm Retreat",
      img: rhythmImg,
      des: "This project is based on a summer camp school.This app is have 3 different dashboard for 3 different users.Including a payment method.",
    },
    {
      id: 3,
      title: "LuxeSeven",
      img: luxeImg,
      des: "This App is a Hotel booking app. This app is fully build. user can book and cancel rooms Admin can add room and check which room is booked",
    },
    {
      id: 4,
      title: "ToyVerse",
      img: toyImg,
      des: "This app is a toy selling website. User after registration can add their toys on the app and sell them. They can update or delete a toy",
    },
    {
      id: 5,
      title: "ZResume",
      img: resumeImg,
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