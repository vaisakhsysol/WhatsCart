import '../ProductDetails/ProductDetails.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";

import data from '../Assets/data';

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
                    <div>Button</div>
                </div>
                <div className='productDetails'>
                    <p className='productName'>{product.ProductName}</p>
                    <p className='productDesc'>{product.description}</p>
                    <p className="productPrice">Rs.{product.price}/-</p>

                    <div>
                        <p>Color : </p>
                    </div>

                    <div className='deliveryDetails'>
                        <p>Delivery </p>
                        <div className='inputContainer'>
                                <IoLocationSharp />
                                <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ProductDetail;
