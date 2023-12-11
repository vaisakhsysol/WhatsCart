import './CartBill.css'

let CartBill=()=>{
    return(
        <div className='billingContainerMain'>
                <h4>Your Total</h4>

                <div className='billingContainerPrice'>
                    <p>3x Products</p>
                    <p>Rs 28.99</p>
                </div>
                <div className='billingContainerTax'>
                    <p>TAX</p>
                    <p>Rs 28.99</p>
                </div>
                <div className='billingContainerDelivery'>
                    <p>Delivery Charge</p>
                    <p>Rs 0</p>
                </div>
                <hr/>
                <div className='billingContainerDelivery'>
                    <h3>NET TOTAL</h3>
                    <h3>Rs. 32,000</h3>
                  
                </div>

            </div>
    )
}

export default CartBill