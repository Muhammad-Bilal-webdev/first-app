import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './mycomponents/login/login.css'


import Header from "./mycomponents/header";
import Slider from "./mycomponents/img_slider";
import About from "./mycomponents/about";
import Features from "./mycomponents/features";
import Product from "./mycomponents/Product";
import Contact from "./mycomponents/Contact";
import Footer from "./mycomponents/Footer";
import Login from './mycomponents/login/login'


function App() {

  const [showlogin,setshowlogin] =useState(false);

  
  return (
   <>
    {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
    <Header setshowlogin={setshowlogin}/>
    <Slider/>
    <About/>
    <Features/>
    <Product/>
    <Contact/>
    <Footer/>

   </>
  )
}

export default App;
