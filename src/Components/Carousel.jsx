import React from 'react';
const Carousel = () => {
    return (
        <>
            <h1 className='bg-primary'>carrosel</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/src/image/1-imagem-carrosel.svg" alt="" />
                    <img src="/src/assets/1.png" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                <img src="/src/image/2.svg" alt="" />
                    <img src="path/to/your/image2.jpg" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                <img src="/src/image/3.svg" alt="" />
                    <img src="path/to/your/image3.jpg" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}

export default Carousel;
