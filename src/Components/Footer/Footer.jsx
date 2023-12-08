import { Link } from 'react-router-dom'
import './Footer.css'

let Footer =()=>{
    return(
        <footer className='footerMainContainer'>
            <div className="footerContainer">
                <div className='totalsContainer'>
                    <p>Your Total</p>
                    <h2>Rs. 32,00,000</h2>
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