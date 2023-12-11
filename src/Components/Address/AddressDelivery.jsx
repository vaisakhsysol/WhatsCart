import React, { useState } from "react";
import "./AddressDelivery.css";
import CartBill from "../CartBill/CartBill";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";

const AddressDelivery = () => {
  const [showCartBill, setShowCartBill] = useState(true);
  const [pickupClicked, setPickupClicked] = useState(false);
  const [deliverClicked, setDeliverClicked] = useState(false);

  const handlePickupClick = () => {
    setShowCartBill(true);
    setPickupClicked(true);
    setDeliverClicked(false);
  };

  const handleDeliveryClick = () => {
    setShowCartBill(false);
    setPickupClicked(false);
    setDeliverClicked(true);
  };

  return (
    <div className="AddressDeliveryContainer">
      <div className="typeOfOrder">
        <button
          className={pickupClicked ? "pickupBtn active" : "pickupBtn"}
          onClick={handlePickupClick}
        >
          Pick Up
        </button>
        <button
          className={deliverClicked ? "deliverBtn active" : "deliverBtn"}
          onClick={handleDeliveryClick}
        >
          Deliver
        </button>
      </div>

      <div>
        {showCartBill ? <CartBill /> : <DeliveryInfo />}
      </div>
      <div className="continurToPayButton">
        <button>Continue to Pay</button>
      </div>
      <div className="proceedToPayment"></div>
    </div>
  );
};

export default AddressDelivery;
