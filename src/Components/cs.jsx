import slide1 from "../image/slide1.png";
import slide2 from "../image/slide2.png";
import slide3 from "../image/3.svg";


import React from "react";
// TODO: change the name to carousel    
const Cs = () => {
  return (
    <div id="carouselExample" className="carousel slide">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/src/image/1.png"className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="/src/image/2.png" className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="/src/image/3.png" className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">

        <span className="carousel-control-prev-icon" type="buttom" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>

      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrosel;
