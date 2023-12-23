import React, { useState } from "react";
import './PaymentOptions.css';
import CartBill from "../CartBill/CartBill";
import { Link } from "react-router-dom";
import { MdQrCodeScanner } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const PaymentOptions = () => {
  const [showUpiPayment, setShowUpiPayment] = useState(false);
  const [showDebitOrCredit, setShowDebitOrCredit] = useState(false);
  const [showCashOnDelivery, setShowCashOnDelivery] = useState(false);

  const handleUpiPaymentClick = () => {
    setShowUpiPayment(true); 
    setShowDebitOrCredit(false);
    setShowCashOnDelivery(false);
  };

  const handleDebitOrCreditClick = () => {
    setShowUpiPayment(false);
    setShowDebitOrCredit(true);
    setShowCashOnDelivery(false);
  };

  const handleCashOnDeliveryClick = () => {
    setShowUpiPayment(false);
    setShowDebitOrCredit(false);
    setShowCashOnDelivery(true);
  };

  return (
    <div className="paymentOtionsContainer">
      <h2>PAYMENT OPTIONS</h2>
      <div className="paymentOptionsContainerTabMain">
        <div className="cartPaymentTabButtons">
          <button className="paymentOptionsButtons" onClick={handleUpiPaymentClick}>
            <MdQrCodeScanner style={{ marginRight: "12px" }} />
            UPI Payments 
          </button>

          <button style={{ marginTop: "10px" }} className="paymentOptionsButtons" onClick={handleDebitOrCreditClick}>
            <IoMdCard style={{ marginRight: "12px" }}/>
            Debit or Credit
          </button>

          <button style={{ marginTop: "10px" }} className="paymentOptionsButtons" onClick={handleCashOnDeliveryClick}>
            <TbTruckDelivery style={{ marginRight: "12px" }}/>
            Cash on Delivery 
          </button>
        </div>
        <div>
          <div className={showUpiPayment ? "upiPayment visible" : "upiPayment"}>
            Upi Payment
          </div>
          <div className={showDebitOrCredit ? "debitOrCredit visible" : "debitOrCredit"}>
            Debit or Credit
          </div>
          <div className={showCashOnDelivery ? "cashOnDelivery visible" : "cashOnDelivery"}>
            Cash on Delivery
          </div>
        </div>
      </div>
    
      <CartBill/>

      <Link to={`/success/`}>
        <button className="payNowBtn"> Pay Now </button>
      </Link>
    </div>
  );
};

export default PaymentOptions;
