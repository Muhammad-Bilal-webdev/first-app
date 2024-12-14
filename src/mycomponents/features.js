import React from 'react';
import './style.css';
import './responsive.css';

import features from "./images/features.png";
import wifi from "./images/wifi.png";
import noise from "./images/noise.png";
import sound from "./images/sound.png";
import tooth from "./images/tooth.png";
import Wireless from "./images/wireless.png";

export default function Features() {
  return (
    <section id="features">

        <div className="features wrapper">

            <div className="container">

                <div className="row pt-md-5 pt-2">

                    <div className="col-lg-5 col-md-5  mb-lg-0 mb-5 text-sec">

                        <h2>Wear it with ease & comfort ever.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ratione sapiente labore?
                            Rem officia a labore vel reprehenderit ex modi asperiores pariatur et vitae? Nobis
                            perferendis fuga adipisci amet corrupti.</p>

                        <div className="feature-img-box">

                            <img src={features} alt="features_img" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 mt-lg-5 mb-lg-0 mb-5">
                        <div className="row">

                            <div className="card col-6 border-0 mb-3 f-img">
                                <div className="">
                                    <div className="icon">

                                        <img src={wifi} alt="img" className="img-fluid"/>
                                    </div>
                                </div>

                                <h4>Wireless</h4>
                                <p>Lorem ipsum dolor amet consectetur adipisicing elit </p>
                            </div>

                            <div className="card col-6 border-0 mb-3 f-img ">
                                <div className="">
                                    <div className="icon">

                                        <img src={noise} alt="img" className="img-fluid"/>
                                    </div>
                                </div>

                                <h4>Noise Cancelling</h4>
                                <p>Lorem ipsum dolor amet consectetur adipisicing elit </p>
                            </div>


                            <div className="card col-6 border-0 mb-3 f-img">
                                <div className="">
                                    <div className="icon">

                                        <img src={sound} alt="img" className="img-fluid"/>
                                    </div>
                                </div>

                                <h4>Wireless</h4>
                                <p>Lorem ipsum dolor amet consectetur adipisicing elit </p>
                            </div>


                            <div className="card col-6 border-0 mb-3 f-img">
                                <div className="">
                                    <div className="icon">

                                        <img src={tooth} alt="img" className="img-fluid"/>
                                    </div>
                                </div>

                                <h4>Bluetooth</h4>
                                <p>Lorem ipsum dolor amet consectetur adipisicing elit </p>
                            </div>

                            <div className="card col-6 border-0 mb-3 f-img">
                                <div className="">
                                    <div className="icon">

                                        <img src={Wireless} alt="img" className="img-fluid"/>
                                    </div>
                                </div>

                                <h4>Microphone</h4>
                                <p>Lorem ipsum dolor amet consectetur adipisicing elit </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


  )
}
