import '../ProductDetails/ProductDetails.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBolt , MdOutlineShoppingCart } from "react-icons/md";


import data from '../Assets/data';
import Specifications from '../Specifications/Specifications';

const ProductDetail = () => {
    const { id } = useParams(); 

    // Find the product data based on the ID
    const product = data.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>; 
    }


    return (
        <div className='productDetailsContainer'>
            <div className='productImageAndDetailsContainer' >
                <div className='productImageandButton'> 
                    <div className='Image'>
                        <img className='productImage' src={product.img} alt="" />
                    </div>
                    <div className='buttonsContainer'>
                        <button className='productOrderNow'> 
                            <MdOutlineBolt />
                            Order Now
                        </button>
                        <button className='productAddToCart'>
                            <MdOutlineShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className='productDetails'>
                    <p className='productName'>{product.ProductName}</p>
                    <p className='productDesc'>{product.description}</p>
                    <p className="productPrice">Rs.{product.price}/-</p>

                    <div>
                        <p>Color : </p>
                    </div>

                    <div className='deliveryDetails'>
                        <p>Delivery :</p>
                        <div className='inputContainer'>
                                <IoLocationSharp className='locationIcon'/>
                                <input type="text" name="" id="" placeholder='enter delivery pincode'/>
                        </div>
                    </div>


                    <div className='specificationsContainer'>

                        <div className='specificationsHead'>
                            <h3> Specifications</h3>
                        </div>
                        <div className='specificationsBody'>
                        {product.specifications.map((spec, index) => (
                        <div key={index} className='specificationItem'>
                            {Object.entries(spec).map(([key, value]) => (
                                <div key={key}>
                                    <p>{key}:</p> 
                                    <b><p>{value}</p></b>
                                </div>
                            ))}
                        </div>
                    ))}
                        </div>
                        <div className='specificationsWarrenty'>
                            <h4>Warrenty</h4>
                            <p> Company covered warrenty of 1 year is available for this product</p>
                        </div>

                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ProductDetail;
