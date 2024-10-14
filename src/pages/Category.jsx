import React from 'react';

import CategoryLeiste from '../components/CategoryLeiste';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';
// css muss importiert werden

const products = [];


function Category() {
  return (
    <div className="Category">
     <header className="app-header">
        <div className="header-top">
          <AiOutlineSearch size={24} />
          <h1>Make home <strong>BEAUTIFUL</strong></h1>
          <FaShoppingCart size={24} />
        </div>
      </header>
      <CategoryLeiste />

      <div className="product-list">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart">
                <FaShoppingBag /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;


     

  
