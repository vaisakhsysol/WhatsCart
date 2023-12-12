import React, { useState } from "react";
import './PaymentOptions.css';
import { FaCaretDown } from "react-icons/fa";
import CartBill from "../CartBill/CartBill";
import { Link } from "react-router-dom";


const PaymentOptions = () => {
  const [collapsibles, setCollapsibles] = useState({
    collapsible1: true,
    collapsible2: true,
    collapsible3: true,
  });

  const toggleCollapse = (collapsibleId) => {
    setCollapsibles({
      ...collapsibles,
      [collapsibleId]: !collapsibles[collapsibleId],
    });
  };

  return (
    <div className="paymentOtionsContainer">
      <h2>PAYMENT OPTIONS</h2>

      <div className="paymentMethodsContainer">
        <div className="paymentMethod">
            <h5 onClick={() => toggleCollapse('collapsible1')} style={{ cursor: "pointer",

                                                                    padding:"20px" }}>UPI TRANSACTION 
            <FaCaretDown />

        </h5>
        {!collapsibles.collapsible1 && (
          <div className="collapsibleContent">
            <p>Content for collapsible 1...</p>
          </div>
        )}
        </div>
        
            
        <div className="paymentMethod">
            <h5 onClick={() => toggleCollapse('collapsible2')} style={{ cursor: "pointer",
                                                                    // border:"1px solid rgb(215, 215, 215)",
                                                                    padding:"20px" }}>DEBIT/CREDIT CARD 
            <FaCaretDown />

        </h5>
        {!collapsibles.collapsible2 && (
          <div className="collapsibleContent">
            <p>Content for collapsible 2...</p>
          </div>
        )}
        </div>

        <div className="paymentMethod">
            <h5 onClick={() => toggleCollapse('collapsible3')} style={{ cursor: "pointer",
                                                                    // border:"1px solid rgb(215, 215, 215)",
                                                                    padding:"20px" }}>CASH ON DELIVERY 
            <FaCaretDown />

        </h5>
        {!collapsibles.collapsible3 && (
          <div className="collapsibleContent">
            <p>Content for collapsible 3...</p>
          </div>
        )}
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
