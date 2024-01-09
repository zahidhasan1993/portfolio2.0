import "./app.scss";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      {/* navbar section */}

      <section id="home">
        <Navbar></Navbar>
      </section>
      <section id="service">Parallax</section>
      <section>Services</section>
      <section id="portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
      <section id="contact">Contact</section>
    </div>
  );
};

export default App;
