import React, { useState } from "react";
import "./AddressDelivery.css";
import CartBill from "../CartBill/CartBill";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import { Link } from "react-router-dom";

const AddressDelivery = () => {
  const [showCartBill, setShowCartBill] = useState(false);
  const [pickupClicked, setPickupClicked] = useState(false);
  const [deliverClicked, setDeliverClicked] = useState(true); 

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
      <h3>Choose the Type of delivery</h3>
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

      <div>{showCartBill ? <CartBill /> : <DeliveryInfo />}</div>
      <Link to={`/payment/`}>
        <div className="continurToPayButton">
          <button>Continue to Pay</button>
        </div>
      </Link>

      <div className="proceedToPayment"></div>
    </div>
  );
};

export default AddressDelivery;
