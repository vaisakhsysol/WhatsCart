import React, { useState } from 'react';
import './ProductTiles.css';
import data from '../Assets/data';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import HomeaddAndSub from '../HomeAddandSub/HomeAddandSub';

const ProductTile = () => {
  const [buttonTexts, setButtonTexts] = useState(Array(data.length).fill('Add to Cart'));
  const [cartIcons, setCartIcons] = useState(Array(data.length).fill(true));
  const [counts, setCounts] = useState(Array(data.length).fill(0));

  const handleButtonClick = (index) => {
    const newButtonTexts = [...buttonTexts];
    const newCartIcons = [...cartIcons];
    const newCounts = [...counts];

    newButtonTexts[index] = <HomeaddAndSub onCountZero={() => handleCountZero(index)} />;
    newCartIcons[index] = false;

    setButtonTexts(newButtonTexts);
    setCartIcons(newCartIcons);
    setCounts(newCounts);
  };

  const handleCountZero = (index) => {
    const newButtonTexts = [...buttonTexts];
    const newCartIcons = [...cartIcons];
    const newCounts = [...counts];

    newButtonTexts[index] = 'Add to Cart';
    newCartIcons[index] = true;
    newCounts[index] = 0;

    setButtonTexts(newButtonTexts);
    setCartIcons(newCartIcons);
    setCounts(newCounts);
  };

  return (
    <div className='productTileGridContainer'>
      <div className='productTileHead'>
        <h3>Used Laptops & Desktops</h3>
        <div>
          <div className="dropdown">
            {/* Dropdown content */}
          </div>
        </div>
      </div>
      <div>
        <div className="cards">
          {data.map((product, i) => (
            <div className="card" key={i}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <div>
                  <img src={product.img} alt="" />
                </div>
              </Link>
              <div>
                <h3>{product.ProductName}</h3>
              </div>
              <div>
                <h4>Rs. {product.price}</h4>
                <p>
                  <s>Rs. {product.discountPrice}</s>
                </p>
              </div>
              {counts[i] === 0 ? (
                <AddToCartButton
                  buttonText={buttonTexts[i]}
                  cartIcon={cartIcons[i]}
                  onClick={() => handleButtonClick(i)}
                />
              ) : (
                buttonTexts[i] // Render the HomeaddAndSub component stored in buttonTexts
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
