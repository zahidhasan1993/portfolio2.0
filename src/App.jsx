import "./app.scss"
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      {/* navbar section */}
      <section>
        <Navbar></Navbar>
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
      <section>Contact</section>
    </div>
  );
};

export default App;