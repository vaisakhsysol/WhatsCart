import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const AddToCartButton = ({ buttonText, cartIcon, onClick }) => {
  return (
    <button className='addToCartBtn' onClick={onClick}>
      {buttonText} {cartIcon && <IoCartOutline className='cartIcon' />}
    </button>
  );
};

export default AddToCartButton;
