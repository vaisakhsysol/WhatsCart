import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './Footer.css'
import data from '../Assets/data';

let Footer =()=>{

    const [totalPrice, setTotalPrice] = useState(0);

    return(
        <footer className='footerMainContainer'>
            <div className="footerContainer">
                <div className='totalsContainer'>
                    <p>Your Total</p>
                    <h2>Rs. {totalPrice}</h2>
                </div>

                <div>
                    <Link to={`/cart/`}>
                        <button className='footerCheckoutBtn'> Checkout </button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer