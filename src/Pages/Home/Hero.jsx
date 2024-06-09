import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-textbox">
        <h1>Best Safaris and Adventures</h1>
      </div>
      <div className="formdestination">
        <form>
          <div className="Form1">
            <label>destination</label>
            <select name="" id="">
              <option>lake victoria</option>
              <option>Mt. Kenya</option>
            </select>
          </div>
          <div className="Form2">
            <label>check in</label>
            <input type="date" />
          </div>
          <div className="Form3">
            <label>check out</label>
            <input type="date" />
          </div>
          <div className="Form4">
            <label>No of Guests</label>
            <input type="number" />
          </div>
          <Link className="Formbutton" to="/">
            book now
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Hero;
