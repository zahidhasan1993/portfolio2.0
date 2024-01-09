import { motion } from "framer-motion";

const Links = ({ links }) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        ease: "linear"
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear"
      }
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div className="links" variants={variants}>
      {links.map((link) => (
        <motion.a
          key={link.title}
          href={`#${link.path}`}
          variants={itemVariants}
          whileHover={{scale: 1.25}}
          whileTap={{scale: 0.9}}
        >
          {link.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
