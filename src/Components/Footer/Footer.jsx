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
                    <button className='footerCheckoutBtn'> Checkout </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer