import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>ZAHID HASAN</h2>
          <h1>MERN Stack Web Developer & Designer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact Me</button>
          </div>
          <img src="../../../public/scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextContainer">WEB DEVELOPER & DESIGNER</div>
      <div className="imageContainer">
        <img src="./../../../public/zahid.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
