import React from 'react';
import './style.css';
import './responsive.css';

export default function Contact() {
  return (
    
    <section id="contact">
        <div className="contacts-section wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>Say hello to us</h2>

                        <p>Make music listening to a magical experinence.Because we value your taste and your money.</p>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 text-center">

                        <form action="" className="contact-form p-mb p-1">

                            <input id="name" type="text" placeholder="Your name here"/>

                            <div className="form-group">
                                <input id="email" type="email" value="" placeholder="Your email address"/>
                                <button type="submit" className="btn subscribe">Send <i className="fas fa-arrow-right"></i> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
