import React from "react"
import './UserComp.css'
import { MdOutlineLogout } from "react-icons/md";

import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { LiaUser } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaEditSolid } from "react-icons/lia";



const UserComp = (props) => {
  return (
    <div className="userContainer">
        
        <div >
            <button className="tabButton">
                <LiaUser className="userIcon"/>
                <div className="detailsContainer">
                    <p className="details"> Personal Details </p>
                    <p className="description"> First Name, Last name, Mobile number </p>
                </div>
                <MdKeyboardArrowRight  className="arrowIcon"/>  
            </button>

            <button className="tabButton">
               <TbTruckDelivery className="userIcon"/>
                <div className="detailsContainer">
                    <p className="details"> Orders</p>
                    <p className="description"> Last n number of Orders </p>
                </div>
                <MdKeyboardArrowRight  className="arrowIcon"/>  
            </button>

            <button className="tabButton">
                <BsCreditCard className="userIcon"/>
                <div className="detailsContainer">
                    <p className="details"> Payment Methods</p>
                    <p className="description"> Add, Edit and Delete Payment Details </p>
                </div>
                <MdKeyboardArrowRight  className="arrowIcon"/>  
            </button>
        </div>

        <div className="detailsContainerMain">
            <div>
                <div className="detailsHeader">
                    <h3>Personal Details</h3>
                    <button>  <MdOutlineLogout /> Log Out </button> 
                </div>

                <div>

                </div>
            </div>
        </div>

    </div>
  )
};

export default UserComp;
