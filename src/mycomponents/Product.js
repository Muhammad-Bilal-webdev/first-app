import React from 'react';
import './style.css';
import './responsive.css';

import headphone from "./images/headphone.png";

export default function Product() {
  return (
    <section id="headphones" >

    <div className="choose wrapper">
        <div className="container">

            <div className="row">

                <div className="col-12 text-center">
                    <h2>Choose your wireless headphones</h2>
                    <p>Make music listening to a magical experience.Because we value your taste and your money</p>

                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">

                    <div className="card border-0 text-center">

                        <div className="product-img" id="zoom-img"></div>
                        <div className="product-star pb-3">

                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>

                        <a href="javascript:void(0)">
                            <h4>On-Ear HeadPhones</h4>

                        </a>

                        <div className="product-prrice">
                            <p>RS. 750.00</p>
                        </div>
                    </div>
                </div> 

                <div className="col-sm-4">

                    <div className="card border-0 text-center">

                        <div className="product-img" id="zoom-img-2"></div>
                        <div className="product-star pb-3">

                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>

                        <a href="javascript:void(0)">
                            <h4>Light HeadPhones</h4>

                        </a>

                        <div className="product-prrice">
                            <p>RS. 750.00</p>
                        </div>
                    </div>
                </div> 

                <div className="col-sm-4">

                    <div className="card border-0 text-center">

                        <div className="product-img" id="zoom-img-3"></div>
                        <div className="product-star pb-3">

                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>

                        <a href="javascript:void(0)">
                            <h4>Kids HeadPhones</h4>

                        </a>

                        <div className="product-prrice">
                            <p>RS. 750.00</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>




<div className="div">

    <div className="style-section wrapper mb-5">

        <div className="container">

            <div className="row align-items-center">

                <div className="col-lg-6 col-md-5 mb-lg-0 mb-5 style-img">

                <img src={headphone} alt="img" className="img-fluid"/>
                </div>
                
                <div className="col-lg-6 col-md-7 text-sec position-relative">
                    <div className="rectangle-shape small"></div>
                    <div className="circle-shape large"></div>

                    <h2>Sterlined Headphone <br/>Style 2021</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non, dolores necessitatibus eos soluta doloremque in beatae magnam nemo placeat, deserunt alias modi excepturi vero fugiat, aut impedit. Exercitationem, necessitatibus.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nam non quo nisi at consectetur voluptatem quasi harum illum numquam, alias suscipit rerum repudiandae eveniet cumque repellat! Mollitia, ullam! Quidem.

                    </p>

                    <a href="javascript:void(0)" id="body_btn" className="main-btn mt-2">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</div>


</section>





  )
}
