import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* side menu */}
      <div className="wrapper">
        <div>
          <span>Zahid Hasan</span>
        </div>
        <div className="links">
          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/github.png" alt="" />
          </a>
          <a href="">
            {" "}
            <img
              src="/public/linkedin-logo-linkedin-icon-transparent-free-png.webp"
              alt=""
            />
          </a>
          <a href="">
            <img src="/public/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
