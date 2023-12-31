import React, { useState } from "react";
import './Navbar.css'
import { MdOutlineMyLocation,MdSearch  } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { IoCartOutline } from 'react-icons/io5';
// import LoggedIn from "../loggedInIcon/LoggedIn";


let Navbar=()=>{

return(
    <section className="navBarSection">
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
                <Link to={`/cart/`}>
                    <button className="bagButton">
                        <LuShoppingBag className="bagIcon"/>
                    </button>
                </Link>
                
                <Link style={{textDecoration:"none"}} to={`/login/`}>
                    <button className="logButton">
                        <p>LOGIN</p>
                        <BiLogInCircle className="logIcon" />
                    </button>
                </Link>
               
               {/* <LoggedIn/> */}
            </div>
        </nav>
         
    </section>
    
)}


export default Navbar