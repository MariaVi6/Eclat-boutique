
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CarroselHome = () => {
    return (
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="/src/image/1.png" className="d-block w-100" alt="Slide1" />
        </div>
        <div className="carousel-item">
            <img src="/src/image/2.png" className="d-block w-100" alt="Slide2" />
        </div>
        <div className="carousel-item">
            <img src="/src/image/3.png" className="d-block w-100" alt="Slide3" />
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="visually-hidden">Next</span>
    </button>
</div>

);
}
export default CarroselHome;
