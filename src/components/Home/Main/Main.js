import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <Carousel fade >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-4-slider-image-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='text-trancform text-center' >
                     First slide label
                    <div>
                        <img src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-4-slider-graphic-2.png" alt="" className="mx-auto my-auto d-block img-fluid " />
                    </div>
                    <div>
                        <button className='btn btn-color mx-auto '> Get ticket </button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-4-slider-image-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='text-trancform text-center '>
                    Second slide label
                    <img src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-4-slider-graphic-2.png" alt="" className="mx-auto my-auto d-block img-fluid " />
                    <div>
                        <button className="btn btn-color mx-auto " > Let's Go </button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-4-slider-image-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='text-trancform text-center '>
                    Third slide label
                    <img src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-4-slider-graphic-2.png" alt="" className="mx-auto my-auto d-flex img-fluid " />
                    <div>
                        <button className="btn btn-color mx-auto " > Get Room </button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Main;