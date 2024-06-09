import { Link } from "react-router-dom";
import Trip1 from "../../assets/Savannah.jpeg";
import Banner from "../../assets/TripBanner.jpeg";
import Trip2 from "../../assets/Honeymoon.jpeg";
import Trip3 from "../../assets/family.jpeg";
import Trip4 from "../../assets/adventure.jpeg";
import Trip5 from "../../assets/cultural.jpeg";
import Trip6 from "../../assets/wildlife.jpeg";
import Trip7 from "../../assets/ecotour.jpeg";
import Trip8 from "../../assets/luxury.jpeg";
import Trip9 from "../../assets/beach.jpeg";
import Trip10 from "../../assets/wellness.jpeg";
import Trip0 from "../../assets/culinary.jpeg";
import "./Trips.css"

const Trips = () => {
  return (
    <>
    
    
    <div className="Trip-banner">
    <div className="Banner-text">
        <h1>trip packages</h1>
        <p>
          it's not a trip it's a safari it's a great experience
        </p>

      </div>
      <div className="BannerImage">
        <img src={Banner} alt="" />
      </div>
      

    </div>
    <section className="TripPackages">
      <div className="Trip-container1">
      <div className="Trip-image">
          <img src={Trip2} alt="" />
        </div>
        <div className="Trip-details">
        <div className="Trip-header">
        <h5>Honey moon</h5>
        </div>
            
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 100000</h4>
          <button>Book Now</button>
        
        </div>
       
      </div>
      <div className="Trip-container1">
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>family</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 30000</h4>
          <button>Book Now</button>
        </div>
        <div className="Trip-image">
          <img src={Trip3} alt="" />
        </div>
      </div>
      <div className="Trip-container1">
        
        <div className="Trip-image">
          <img src={Trip4} alt="" />
        </div>
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>adventure</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 10000</h4>
          <button>Book Now</button>
        </div>
      </div>
      <div className="Trip-container1">
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>Cultural tours</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 15000</h4>
          <button>Book Now</button>
        </div>
        <div className="Trip-image">
          <img src={Trip5} alt="" />
        </div>
      </div>
      <div className="Trip-container1">
        
        <div className="Trip-image">
          <img src={Trip6} alt="" />
        </div>
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>Wildlife safaris</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 40000</h4>
          <button>Book Now</button>
        </div>
      </div>
      <div className="Trip-container1">
        
        
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>eco-tours</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 20000</h4>
          <button>Book Now</button>
        </div>
        <div className="Trip-image">
          <img src={Trip7} alt="" />
        </div>
      </div>
      <div className="Trip-container1">
        
        <div className="Trip-image">
          <img src={Trip8} alt="" />
        </div>
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>luxury vacations</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 250000</h4>
          <button>Book Now</button>
        </div>
      </div>
      <div className="Trip-container1">
        
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>beach holidays</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 80000</h4>
          <button>Book Now</button>
        </div>
        <div className="Trip-image">
          <img src={Trip9} alt="" />
        </div>
      </div>
      <div className="Trip-container1">
       
        <div className="Trip-image">
          <img src={Trip10} alt="" />
        </div>
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>Wellness retreats</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 50000</h4>
          <button>Book Now</button>
        </div>
      </div>
      <div className="Trip-container1">
        <div className="Trip-details">
        <div className="Trip-header">
            <h3>culinary tours</h3>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus distinctio, dolores dolorem molestias repudiandae nesciunt culpa magni temporibus eligendi.</p>
          <h4>Ksh 120000</h4>
          <button>Book Now</button>
        </div>
        <div className="Trip-image">
          <img src={Trip0} alt="" />
        </div>
      </div>
    </section>
    </>
    
  )
  
  
};

export default Trips;
