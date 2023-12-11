import React, { useState } from "react";
import "./AddressDelivery.css";
import CartBill from "../CartBill/CartBill";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";

const AddressDelivery = () => {
  const [showCartBill, setShowCartBill] = useState(true);

  const handlePickupClick = () => {
    setShowCartBill(true);
  };

  const handleDeliveryClick = () => {
    setShowCartBill(false);
  };

  return (
    <div className="AddressDeliveryContainer">
      <div className="typeOfOrder">
        <button className="pickupBtn" onClick={handlePickupClick}>
          Pick Up
        </button>
        <button className="deliverBtn" onClick={handleDeliveryClick}>
          Deliver
        </button>
      </div>

      <div>
        {showCartBill ? <CartBill /> : <DeliveryInfo />}
      </div>
    

      <div className="proceedToPayment">

      </div>
    </div>
  );
};

export default AddressDelivery;
