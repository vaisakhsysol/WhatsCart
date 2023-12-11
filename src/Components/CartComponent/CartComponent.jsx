import './CartComponent.css'
import imageOne from '../Assets/Images/LENovoL5.jpg'
import { MdDelete } from "react-icons/md";
import { FiMinus , FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import CartBill from '../CartBill/CartBill';



let CartComponent=()=>{
    return(
        <div className='cartComponentContainer'>
            <div className='cartContainer'>
            <h2> YOUR CART </h2>
                {Array(4).fill(true).map((item,index)=>
                    <div className='cartProduct'>
                    <div>
                        <img src={imageOne} alt="" />
                    </div>
                    <div className='cartInternalProductDetails'>
                        <div>
                            <b><p className='productName'>Product Name</p></b>
                            <p className='productDesc'>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Voluptatem tempore aliquam eaque! Dignissimos 
                                et molestiae iure aut alias nam libero.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero quas eos praesentium doloribus. Tempore ea voluptates eos velit incidunt!
                            </p>
                            <p className='productPrice'>
                                <b>Rs.68,6862</b>
                            </p>
                            <div className='cartIncAndDecContainer'>
                                <button className='cartDecrementBtn'>
                                    <FiMinus className='cartDecrementIcon'/>
                                </button>
                                    <button> 1 </button>
                                <button className='cartIncrementBtn'>
                                        <FiPlus className='cartIncrementIcon'/>
                                </button>
                            </div>
                        
                        </div>
                        <div className='delBtn'>
                            <MdDelete />
                        </div>
                    </div>
                </div>
                )}
                
            </div>

            <CartBill/>

            

            <div className='paymentContainer'>
                <Link to={`/address/`}>
                    <button>
                        Proceed to Confirm
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default CartComponent