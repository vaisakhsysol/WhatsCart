import React from "react"
import './UserComp.css'
import { MdOutlineLogout } from "react-icons/md";
// import { Tooltip } from 'react-tooltip'

import { MdKeyboardArrowRight , MdDeleteOutline,MdOutlineLocalPhone } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { LiaUser } from "react-icons/lia";
import { TbTruckDelivery ,TbRoad} from "react-icons/tb";
import { LiaEditSolid } from "react-icons/lia";
import { AiOutlineIdcard } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { LuLandmark } from "react-icons/lu";
import { CiMapPin } from "react-icons/ci";








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
            <div className="detailsContentContainer">
                <div className="detailsHeader">
                    <h3>Personal Details</h3>
                    <button className="logoutBtn">  <MdOutlineLogout /> Log Out </button> 
                </div>

                <div>
                    <div style={{display:"flex"}} >
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <label htmlFor="">Name</label>
                            <p className="titleText">Lorem Ipsum User Name</p>
                            {/* <input style={{padding:"10px"}} type="text" name="" id="" />  */}
                        </div>
                        <div>
                            <button className="editBtn">
                                <LiaEditSolid/>
                            </button>
                        </div>
                       
                    </div>

                    <div style={{display:"flex"}} >
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <label htmlFor="">Mobile Number</label>
                            <p className="titleText">+91 6520 65065 </p>
                            {/* <input style={{padding:"10px"}} type="text" name="" id="" />  */}
                        </div>
                        <div>
                            <button className="editBtn">
                                <LiaEditSolid/>
                            </button>
                        </div>
                       
                    </div>

                    <div style={{display:"flex"}} >
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <label htmlFor="">Email</label>
                            <p className="titleText">loreipsum@gmail.com </p>
                            {/* <input style={{padding:"10px"}} type="text" name="" id="" />  */}
                        </div>
                        <div>
                            <button className="editBtn">
                                <LiaEditSolid/>
                            </button>
                        </div>
                       
                    </div>
                </div>

                <div className="">
                    <label htmlFor=""> Manage Addresses </label>

                    {Array(3).fill(true).map((item,index)=>
                    <div className="userAddressContainer">
                        <div className="userAddressMain"> 
                            <p className="userName">
                                <AiOutlineIdcard/> 
                               <p>Jane Doe</p> 
                            </p>
                            <p className="userAddress">
                                <IoHomeOutline />
                               <p> Lorem ipsum dolor sit quasi ullam laborum mollitia rerum consequuntur tenetur nulla adipisci, incidunt fugiat?</p>
                            </p>
                            <p className="userPhone">
                                <MdOutlineLocalPhone />
                                <p>+91 52462 32568</p>
                            </p>
                            <p className="userLandmark">
                                <LuLandmark/>
                                <p>Opposite Mekha Theatre</p>
                            </p>
                            <p className="userStreet">
                                <TbRoad/>
                                <p>Bhanskaran Street</p>
                            </p>

                            <p className="userStreet">
                                <CiMapPin />
                                <p>680 123</p>
                            </p>

                        </div>
                        <div className="userInteractiveBtns">

                            <button className="editBtn"> 
                             <LiaEditSolid className="editLogo"/>  Edit Address 
                             </button>
                            <button className="deleteBtn">
                                <MdDeleteOutline  className="deleteLogo"/>
                                Delete Address
                            </button>

                        </div>
                    </div> )}
                </div>
            </div>


        </div>

    </div>
  )
};

export default UserComp;
