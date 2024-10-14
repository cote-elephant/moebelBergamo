import { useState } from "react";
//import { fetchData } from "../utils/fetchData.js";

export function Product() {
 // const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="upper-half">
        <div className="backwards">icon</div>
        <div className="choose-color">
          <div className="white"></div>
          <div className="brown"></div>
          <div className="beige"></div>
        </div>
      </div>
      <div className="lower-half">
        <h2>ProductName</h2>
        <p>PriceTag</p>
        <div>
          <button>-</button>
          <p>0</p>
          <button>+</button>
          {/* <button onClick={setCounter(()=> (prev) => prev + 1)}>+</button>
          <p>{counter}</p>
          <button onClick={setCounter(() => (prev) => prev - 1)}>-</button> */}
        </div>
        <div className="stars">
          <p>Stars</p>
          <p>starsReview</p>
        </div>
        <p>ProductDescription</p>
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
