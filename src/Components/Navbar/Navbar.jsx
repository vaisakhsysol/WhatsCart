import React, { useState } from "react";
import './Navbar.css'
import { MdOutlineMyLocation,MdSearch  } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { BiLogInCircle } from "react-icons/bi";


let Navbar=()=>{

return(
    <section>
        <nav className="navBarContainer">
            <div>
                <p> LOGO </p>
            </div>

            <div className="searchInput">
                <MdOutlineMyLocation  className="locationIcon"/>
                    <input type="text" placeholder="Search Here" />
                <MdSearch className="searchIcon" />
            </div>

            <div className="loginAndSignup">
                <button className="bagButton">
                    <LuShoppingBag className="bagIcon"/>
                </button>
                <button className="logButton">LOGIN
                    <BiLogInCircle className="logIcon" />
                </button>
            </div>
        </nav>
        
    </section>
    
)}


export default Navbar