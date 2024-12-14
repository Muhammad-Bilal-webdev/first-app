import React, {useState} from "react";

import './style.css';
import './responsive.css';
import Login from './login/login'



import logo1 from "./images/logo1.png";



export default function Header({setshowlogin}){

    const [menu,setmenu]= useState("home")

    return(
        <header>

        <nav className="navbar navbar-expand-lg b_navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">

                    <img src={logo1} alt="logo" className="img-fluid"/>
                </a>
                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              
                    <i className="fa-solid fa-bars navbar-toggler-icon menu-icon"> </i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={()=>setmenu("home")} id={menu==="home"?"active":""} className="nav-link"  aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>setmenu("about")} id={menu==="about"?"active":""} className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>setmenu("features")} id={menu==="features"?"active":""} className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>setmenu("headphones")} id={menu==="headphones"?"active":""} className="nav-link" href="#headphones">Headphones</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>setmenu("contact")} id={menu==="contact"?"active":""} className="nav-link" href="#contact">Contact Us</a>
                        </li>

                        <li>
                            <a   onClick={()=>setshowlogin(true)} id="main-button" className="main-btn">Sign in</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    </header>

    )
}