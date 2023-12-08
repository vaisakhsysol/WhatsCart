import { useState } from 'react';
import './HomeAddandSub.css'
import { LuMinus , LuPlus } from "react-icons/lu";


let HomeaddAndSub=()=>{

    let[cartCount , setCartCount] = useState(1)
    
    let handleCartClickMinus = () => {
        setCartCount(prevCount => prevCount - 1);
        
        if (cartCount < 2) {
            alert("This Product has been Removed")
            
        }
    };

    let handleCartClickPlus = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <div className='homeAddandSubContainer'>
            <button onClick={handleCartClickMinus}> <LuMinus/> </button>
            <button className='homeAddsubItems'> {cartCount} </button>
            <button onClick={handleCartClickPlus}> <LuPlus/> </button>
        </div>
    )
}

export default HomeaddAndSub