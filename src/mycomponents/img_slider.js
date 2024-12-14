import React, { useState } from "react";

import './style.css';
import './responsive.css';
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import bg3 from "./images/bg3.jpg";



export default function Slider(){


    return(
         
        <section id="home" className="hero-slider">


        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bg1} className="d-block w-100" alt="background_image"/>
                    <div className="carousel-caption col-md-6 col-10 col-offset-md-6">
                        <h2>Live Smart</h2>
                        <h1>Hear <span>Smart</span></h1>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg2} className="d-block w-100" alt="background_image"/>
                    <div className="carousel-caption col-md-6 col-10 col-offset-md-6">
                        <h2>Live Smart</h2>
                        <h1>Hear <span>Smart</span></h1>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg3} className="d-block w-100" alt="background_image"/>
                    <div className="carousel-caption col-md-6 col-10 col-offset-md-6">
                        <h2>Live Smart</h2>
                        <h1>Hear <span>Smart</span></h1>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    )
}