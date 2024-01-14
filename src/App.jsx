import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
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
      <section id="about">
        <About></About>
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
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default App;
