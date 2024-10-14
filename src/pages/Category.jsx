import React, { useEffect, useState } from 'react';
import CategoryLeiste from '../components/CategoryLeiste';
import { FaShoppingCart, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { fetchData } from '../utils/fetchData.js';


// css importieren

const Category = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchData("product")
    .then((data) => {setProducts(data); console.log(data);})
        
    .catch((data) => {setError(data); });
    }, []);

   

  return (
    <div className="Category">
      <header className="app-header">
        <div className="header-top">
          <FaSearch />
          <h1>Make home <strong>BEAUTIFUL</strong></h1>
          <FaShoppingCart />
        </div>
      </header>
      
      <CategoryLeiste />

      <div className="products-div">
        {products.length > 0 ? (
          products.slice(0,4).map(product => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <button className="add-to-cart">
                  <FaShoppingBag /> Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Keine Produkte verfügbar</p> // Anzeige, wenn keine Produkte vorhanden sind
        )}
      </div>
    </div>
  );
}

export default Category;
