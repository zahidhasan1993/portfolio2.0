import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/projects/Project";
import Services from "./components/services/Services";
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
      <section>
        <Services></Services>
      </section>
      <section id="portfolio">
        <Parallax type="portfolio"></Parallax>
      </section>
      <Project></Project>
      <section id="contact">Contact</section>
    </div>
  );
};

export default App;
