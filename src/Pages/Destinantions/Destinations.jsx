import { Link } from "react-router-dom";
import destinations from "../../Data/destinations";
import React from "react";
import "./Destinations.css"
import Dest0 from "../../assets/destbanner.jpeg"

const Places = ({ image, Tag, Description, cost, groupcost }) => {
  return (
    <section className="Places">
     <div className="Places-container">
     <div className="PlacesImage">
        <img src={image} alt="" />
        <div className="PlacesDescription">
          <h2>{Tag}</h2>
          <p>{Description}</p>
          <div PlacesCost>
            <h1>{cost}</h1>
            <h2>{groupcost}</h2>
          </div>
          <button className="PlacesButton">Book Tour</button>
        </div>
      </div>
     </div>
    </section>
  );
};

const Destinations = () => {
  return (
    <React.Fragment>
      <section className="Destinations">
        <div className="destination-baner">
          <div className="dest-pic">
          <img src={Dest0} alt="" />
          </div>
          <div className="Banner-details">
          <h1 className="DestinationsHeading">Destinations</h1>
          </div>
          <div className="dest-pic">
          <img src={Dest0} alt="" />
          </div>
        </div>
       
        <div className="Bigdestinations">
          {destinations.map((currentdestinations, i) => {
            return (
              <Places
                key={i}
                image={currentdestinations.image}
                Tag={currentdestinations.Tag}
                Description={currentdestinations.Description}
                cost={currentdestinations.cost}
                groupcost={currentdestinations.groupcost}
              />
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Destinations;
