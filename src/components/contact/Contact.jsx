import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Lets Work Together</h1>
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
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={8} placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
