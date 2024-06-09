import { Link } from "react-router-dom";
import Hero from "./Hero";
import "./Home.css";
import About from "./About";
import Tours from "./Tours";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Tours />
      <Testimonials/>
    </section>
  );
};

export default Home;
