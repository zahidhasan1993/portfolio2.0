import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
const App = () => {
  return (
    <div>
      <section id="home">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="service">
        <Parallax type="service"></Parallax>
      </section>
      <section>Services</section>
      <section id="portfolio">
        <Parallax type="portfolio"></Parallax>
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
      <section id="contact">Contact</section>
    </div>
  );
};

export default App;
