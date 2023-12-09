import React, { useState, useEffect } from 'react';
import './HomeAddandSub.css';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const HomeAddandSub = ({ onCountZero, onCountChange }) => {
  const [cartCount, setCartCount] = useState(1);

  useEffect(() => {
    if (cartCount === 0) {
      onCountZero();
    } else {
      onCountChange(cartCount);
    }
  }, [cartCount, onCountChange, onCountZero]);

  const handleCartClickMinus = () => {
    setCartCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
  };

  const handleCartClickPlus = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='homeAddandSubContainer'>
      <button onClick={handleCartClickMinus}>
        <AiOutlineMinus />
      </button>
      <button className='homeAddsubItems'>{cartCount}</button>
      <button onClick={handleCartClickPlus}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default HomeAddandSub;
