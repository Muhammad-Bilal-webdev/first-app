import React from 'react';
import './style.css';
import './responsive.css';

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";


export default function About() {
  return (
    <section id="about">

    <div className="about-section wrapper">

        <div className="container">

            <div className="row align-items-center">

                <div className="col-lg-5 col-md-5 mb-lg-0 mb-5 about-slider">

                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button id="btn" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide-to="0" className="active" aria-current="true"
                                aria-label="Slide 1"></button>
                            <button id="btn" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button id="btn" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={img1} className="d-block w-100" alt="img1"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={img2} className="d-block w-100" alt="img2"/>
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100" alt="img3"/>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col-lg-7 col-md-7 text-sec position-relative px-lg-5">

                    <div className="rectangle-shape small">

                    </div>

                    <div className="circle-shape large">

                    </div>

                    <h2>Loud & Clear <br/>Music</h2>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt id enim ab explicabo eum
                        ipsam similique commodi temporibus. Quos et nisi quaerat! Sapiente accusantium velit
                        veritatis commodi voluptatem nesciunt.

                    </p>

                    <a href="javascript:void(0)" id="body_btn" className="main-btn">Buy Now</a>
                </div>


            </div>


        </div>
    </div>

</section>
  )
}
