import React, { useState, useEffect } from 'react';
import './HomeAddandSub.css'
import { LuMinus , LuPlus } from "react-icons/lu";


let HomeaddAndSub=( {onCountZero } )=>{

    let[cartCount , setCartCount] = useState(1)
    
    useEffect(() => {
        if (cartCount === 0) {
          onCountZero(); // Notify parent component when count reaches zero
        }
      }, [cartCount, onCountZero]);
    
      let handleCartClickMinus = () => {
        setCartCount((prevCount) => prevCount - 1);
      };
    
      let handleCartClickPlus = () => {
        setCartCount((prevCount) => prevCount + 1);
      };

    // let handleCartClickMinus = () => {
    //     setCartCount(prevCount => prevCount - 1);
        
    // };

    // let handleCartClickPlus = () => {
    //     setCartCount(prevCount => prevCount + 1);
    // };

    return (
        <div className='homeAddandSubContainer'>
            <button onClick={handleCartClickMinus}> <LuMinus/> </button>
            <button className='homeAddsubItems'> {cartCount} </button>
            <button onClick={handleCartClickPlus}> <LuPlus/> </button>
        </div>
    )
}

export default HomeaddAndSub