import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData.js";

import { IoChevronBack } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

export function Product() {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("product")
      .then((data) => setProductsData(data))
      .catch((error) => setError(JSON.stringify(error)));
  }, []);

  return (
    <>
      <div className="upper-half">
        <div className="backwards">
          <IoChevronBack />
        </div>
        <div className="choose-color">
          <div className="white"></div>
          <div className="brown"></div>
          <div className="beige"></div>
        </div>
      </div>
      <div className="lower-half">
        {productsData &&
          productsData.length > 0 &&
          Array.isArray(productsData) &&
          productsData.map((product, index) => (
            <div key={index}>
              <h2>{product.title}</h2>
              <p>{product.priceTag}</p>
              <div>
                <button >-</button>
                <p>{product.quantity}</p>
                <button >+</button>
              </div>
              <div className="stars">
                <p>
                  <IoIosStar />
                </p>
                <p>{product.starsReview} stars</p>
              </div>
              <p>{product.productDescription}</p>
            </div>
          ))}

        <button>save Favorite</button>
        <button>Add to cart</button>
      </div>
    </>
  );
}

// function Button({ onMouseDown, onMouseUp, onMouseLeave, label }) {
//   return (
//     <button
//       onMouseDown={onMouseDown}
//       onMouseUp={onMouseUp}
//       onMouseLeave={onMouseLeave}
//     >
//       {label}
//     </button>
//   );
// }

/* <Button
            onMouseDown={incrementCount}
            onMouseUp={stopCount}
            onMouseLeave={stopCount}
            label={`+`}
          /> */

//  const incrementCount = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       setIncrement((count) => count + 1);
//     }, 100);
//   };

//   const decrementCount = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       setDecrement((count) => count - 1);
//     }, 100);
//   };
