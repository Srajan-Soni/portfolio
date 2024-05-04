import React from 'react'
// import { useState } from 'react';

const Navbar = () => {
    
    const navstyle = {
        width: '25% !important'
    }
    
  return (
    <div className='mainnavsec'>
        

    <div className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    
        {/* <img src="srajan.jpg" style="width:100%" />  */}
            <a href="#main" className="w3-bar-item w3-button w3-padding-large w3-black" >
            <i className="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
        </a>
            <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
        </a>
        <a href="#certificates" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-eye w3-xxlarge"></i>
            <p>CERTIFICATES</p>
        </a>
        <a href="#experience" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-user w3-xxlarge"></i>
            <p>EXPERIENCES</p>
        </a>
        <a href="#projects" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-project w3-xxlarge"></i>
            <p>PROJECTS</p>
        </a>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
        </a>
    </div>

    <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
            <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                <a href="#main" className="w3-bar-item w3-button" style={navstyle}>HOME</a>
                <a href="#about" className="w3-bar-item w3-button" style={navstyle}>ABOUT</a>
                <a href="#certificates" className="w3-bar-item w3-button" style={navstyle}>CERTIFICATES</a>
                <a href="#experience" className="w3-bar-item w3-button" style={navstyle}>EXPERIENCES</a>
                <a href="#projects" className="w3-bar-item w3-button" style={navstyle}>EXPERIENCES</a>
                <a href="#contact" className="w3-bar-item w3-button" style={navstyle}>CONTACT</a>
            </div>
        </div>

    </div>
    
  )
}

export default Navbar

