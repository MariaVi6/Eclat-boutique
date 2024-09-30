
import fo1 from "../image/2.png"
// import fo2 from "../image/1.png"
// import fo3 from "../image/3.png"
import React from "react";
// TODO: change the name to carousel    
const Cs = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={fo1} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={fo1} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={fo1} className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Cs;




