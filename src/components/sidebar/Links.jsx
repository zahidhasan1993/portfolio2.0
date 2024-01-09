import { motion } from "framer-motion";

const Links = ({ links }) => {
  return (
    <motion.div className="links">
      {links.map((link) => (
        <motion.a key={link.title} href={`#${link.path}`} >
          {link.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
