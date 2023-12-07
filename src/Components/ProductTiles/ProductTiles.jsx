import './ProductTiles.css'
import { IoFilter } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import data from '../Assets/data';
import { useState } from 'react';
import HomeaddAndSub from '../HomeAddandSub/HomeAddandSub';

let ProductTile=()=>{

    const [buttonTexts, setButtonTexts] = useState(Array(data.length).fill('Add to Cart'));
    const [cartIcons, setCartIcons] = useState(Array(data.length).fill(true));

    const handleButtonClick = (index) => {
        const newButtonTexts = [...buttonTexts];
        const newCartIcons = [...cartIcons];

        newButtonTexts[index] = <HomeaddAndSub />;
        newCartIcons[index] = false;

        setButtonTexts(newButtonTexts);
        setCartIcons(newCartIcons);
        // You can add other functionality here on button click if needed
    };

    return(
        <div className='productTileGridContainer'>
            <div className='productTileHead'> 
                <h3> Used Laptops & Desktops </h3>
                <div>
                    <div class="dropdown">
                        <button class="dropbtn"> <IoFilter /> <p>Filter</p></button>
                        <div class="dropdown-content">
                                <a href="#">Low to High</a>
                                <a href="#">High to Low</a>
                                <a href="#">Most Bought</a>
                        </div>
                    </div>
                </div>

                
            </div>
           
            <div>
                <div className="cards">
                    {

                        data.map((product,i)=>{
                            return(
                                <div className="card" key={i}>
                            <div>
                                <img src={product.img} alt="" />
                            </div>
                            <div>
                                <h3> {product.ProductName}</h3>
                            </div>
                            <div>
                                <h4>Rs. {product.price}</h4>
                                <p> 
                                    <s>Rs. {product.discountPrice}</s>
                                </p>
                            </div>
                            
                            <button className='addToCartBtn' onClick={() => handleButtonClick(i)}>
                                {buttonTexts[i]} {cartIcons[i] && <IoCartOutline className='cartIcon' />}
                            </button>
                        </div>
                            )
                        
                        })
                        
                    }
                </div>     
            </div>

        </div>
    )
}

export default ProductTile