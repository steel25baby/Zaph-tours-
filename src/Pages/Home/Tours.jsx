import React from "react";
import tours from "../../Data/tours";

const ToursData = ({ image, Name }) => {
  return (
    <section className="ToursData">
      <div className="Big-tours">
        <div className="TourDataImage">
          <img src={image} alt="" />
        </div>
        <div className="TourDataName">
          <p>{Name}</p>
        </div>
      </div>
    </section>
  );
};

const Tours = () => {
  return (
    <React.Fragment>
      <section className="Tours">
        <h1 className="ToursHeader">Tour Packages</h1>
        <div className="MotherTours">
          {tours.map((currenttour, i) => {
            return (
              <ToursData
                key={i}
                image={currenttour.image}
                Name={currenttour.Name}
              />
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tours;
