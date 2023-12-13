import React from "react"
import './UserOrders.css'
import laptopOne from '../Assets/Images/lenovo-legion-5-pro-012.webp'


const UserOrders = () => {
  return (
    <div>
      <div className="ordersContairsMain">
        <h3> Orders List </h3>

        <div className="productOrdersContainer">
            <div className="productOrderDetails">

                <div className="imageContainer">
                  <img src={laptopOne} alt="" />

                  <div>
                    <p>Name</p>
                    <p>Desc</p>
                    <p>Price</p>
                    <p>Unit</p>
                </div>
                </div>

                

            </div>
            
            <div>
                <p>Delivery Date</p>
            </div>
        </div>
      </div>
    </div>
  )
};

export default UserOrders;
