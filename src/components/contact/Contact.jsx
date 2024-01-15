import "./contact.scss";
import { easeInOut, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_htz5037",
        "template_9zxk4fq",
        form.current,
        "KEUMi8Yt0TDvV0fIF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setError(false);
          setSuccess(true);
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div className="contact">
      <motion.div
        className="textContainer"
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
      >
        <h1>
          Let&apos;<span>s work</span> together
        </h1>
        <div className="item">
          <h2>Mail</h2>
          <span>zahidhasan19932023@gmail.com</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+880 130328 9180</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>145 /- Bagbari, Uttarpara, Dhaka-1216</span>
        </div>
      </motion.div>
      <motion.div
        className="formContainer"
        initial={{ opacity: 0, scale: 0.5, x: 300 }}
        whileInView={{ opacity: 1, scale: 1, x: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea rows={8} name="message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;