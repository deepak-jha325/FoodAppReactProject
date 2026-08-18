
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../css/NonVeg.css';

import fishImg from '../assets/image/fish.png';
import muttonImg from '../assets/image/mutton.png';
import prawnImg from '../assets/image/prawn.png';
import chickenImg from '../assets/image/chicken.png';
import fishFryImg from '../assets/image/fish_fry.png';
import bhurjiImg from '../assets/image/bhurji.png';
import eggImg from '../assets/image/egg.png';
import kababImg from '../assets/image/kabab.png';

function NonVeg() {
  const dispatch = useDispatch();

  const nonVegItems = [
    { id: 101, name: "Fish Curry", price: 120, image: fishImg },
    { id: 102, name: "Mutton", price: 250, image: muttonImg },
    { id: 103, name: "Prawn", price: 220, image: prawnImg },
    { id: 104, name: "Chicken", price: 180, image: chickenImg },
    { id: 105, name: "Fish Fry", price: 150, image: fishFryImg },
    { id: 106, name: "Egg Bhurji", price: 80, image: bhurjiImg },
    { id: 107, name: "Boiled Egg", price: 40, image: eggImg },
    { id: 108, name: "Kabab", price: 200, image: kababImg },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`, { position: "top-right", autoClose: 2000 });
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {nonVegItems.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm">
              <img src={item.image} alt={item.name} className="card-img-top p-3" />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text fw-bold">₹{item.price}</p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleAddToCart(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default NonVeg;

/*import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeOne, removeAll } from '../redux/cartSlice';
import '../css/NonVeg.css';


import fishImg from '../assets/image/fish.png';
import muttonImg from '../assets/image/mutton.png';
import prawnImg from '../assets/image/prawn.png';
import chickenImg from '../assets/image/chicken.png';
import fishFryImg from '../assets/image/fish_fry.png';
import bhurjiImg from '../assets/image/bhurji.png';
import eggImg from '../assets/image/egg.png';
import kababImg from '../assets/image/kabab.png';

function NonVeg() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const nonVegItems = [
    { id: 101, name: "Fish Curry", price: 120, image: fishImg },
    { id: 102, name: "Mutton", price: 250, image: muttonImg },
    { id: 103, name: "Prawn", price: 220, image: prawnImg },
    { id: 104, name: "Chicken", price: 180, image: chickenImg },
    { id: 105, name: "Fish Fry", price: 150, image: fishFryImg },
    { id: 106, name: "Egg Bhurji", price: 80, image: bhurjiImg },
    { id: 107, name: "Boiled Egg", price: 40, image: eggImg },
    { id: 108, name: "Kabab", price: 200, image: kababImg },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`, { position: "top-right", autoClose: 2000 });
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {nonVegItems.map((item) => {
          const existingItem = cart.find(i => i.id === item.id);
          const qty = existingItem ? existingItem.quantity : 0;
          const itemTotal = qty * item.price;

          return (
            <div key={item.id} className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top p-3" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text fw-bold">₹{item.price}</p>

                  {qty === 0 ? (
                    <button className="btn btn-danger w-100" onClick={() => handleAddToCart(item)}>
                      Add To Cart
                    </button>
                  ) : (
                    <div>
                      <div className="d-inline-flex align-items-center border rounded">
                        <button className="btn btn-danger" onClick={() => dispatch(removeOne(item.id))}>-</button>
                        <span className="px-3 fw-bold">{qty}</span>
                        <button className="btn btn-danger" onClick={() => dispatch(addToCart(item))}>+</button>
                      </div>
                      <p className="mt-2">Total: ₹{itemTotal}</p>
                      <button className="btn btn-outline-danger btn-sm mt-2" onClick={() => dispatch(removeAll(item.id))}>
                        Remove All
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default NonVeg;*/

/*import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NonVeg.css';


import fishImg from '../assets/image/fish.png';
import muttonImg from '../assets/image/mutton.png';
import prawnImg from '../assets/image/prawn.png';
import chickenImg from '../assets/image/chicken.png';
import fishFryImg from '../assets/image/fish_fry.png';
import bhurjiImg from '../assets/image/bhurji.png';
import eggImg from '../assets/image/egg.png';
import kababImg from '../assets/image/kabab.png';

function NonVeg() {
  const nonVegItems = [
    { id: 1, name: "Fish Curry", price: 120, image: fishImg },
    { id: 2, name: "Mutton", price: 250, image: muttonImg },
    { id: 3, name: "Prawn", price: 220, image: prawnImg },
    { id: 4, name: "Chicken", price: 180, image: chickenImg },
    { id: 5, name: "Fish Fry", price: 150, image: fishFryImg },
    { id: 6, name: "Egg Bhurji", price: 80, image: bhurjiImg },
    { id: 7, name: "Boiled Egg", price: 40, image: eggImg },
    { id: 8, name: "Kabab", price: 200, image: kababImg },
  ];

  const [cart, setCart] = useState({});

  const handleAddToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
    toast.success(`${item.name} added to cart!`, { position: "top-right", autoClose: 2000 });
  };

  const handleIncrease = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: prev[item.id] + 1
    }));
  };

  const handleDecrease = (item) => {
    setCart((prev) => {
      const newQty = prev[item.id] - 1;
      if (newQty <= 0) {
        const { [item.id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [item.id]: newQty };
    });
  };

  const calculateTotal = () => {
    return nonVegItems.reduce((sum, item) => {
      const qty = cart[item.id] || 0;
      return sum + qty * item.price;
    }, 0);
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {nonVegItems.map((item) => {
          const qty = cart[item.id] || 0;
          const itemTotal = qty * item.price;
          return (
            <div key={item.id} className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top p-3" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text fw-bold">₹{item.price}</p>

                  {qty === 0 ? (
                    <button className="btn btn-danger w-100" onClick={() => handleAddToCart(item)}>
                      Add To Cart
                    </button>
                  ) : (
                    <div>
                      <div className="d-inline-flex align-items-center border rounded">
                        <button className="btn btn-danger" onClick={() => handleDecrease(item)}>-</button>
                        <span className="px-3 fw-bold">{qty}</span>
                        <button className="btn btn-danger" onClick={() => handleIncrease(item)}>+</button>
                      </div>
                      <p className="mt-2">Total: ₹{itemTotal}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <ToastContainer />
    </div>
  );
}

export default NonVeg;*/


/*import React from 'react';
import '../css/NonVeg.css';   
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// image imports
import fishImg from '../assets/image/fish.png';
import muttonImg from '../assets/image/mutton.png';
import prawnImg from '../assets/image/prawn.png';
import chickenImg from '../assets/image/chicken.png';
import fishFryImg from '../assets/image/fish_fry.png';
import bhurjiImg from '../assets/image/bhurji.png';
import eggImg from '../assets/image/egg.png';
import kababImg from '../assets/image/kabab.png';


import { ToastContainer } from 'react-toastify';

function NonVeg() {
  const nonVegItems = [
    { id: 1, name: "Fish Curry", price: 120, image: fishImg },
    { id: 2, name: "Mutton", price: 250, image: muttonImg },
    { id: 3, name: "Prawn", price: 220, image: prawnImg },
    { id: 4, name: "Chicken", price: 180, image: chickenImg },
    { id: 5, name: "Fish Fry", price: 150, image: fishFryImg },
    { id: 6, name: "Egg Bhurji", price: 80, image: bhurjiImg },
    { id: 7, name: "Boiled Egg", price: 40, image: eggImg },
    { id: 8, name: "Kabab", price: 200, image: kababImg },
  ];

  const handleAddToCart = (itemName) => {
    toast.success(`${itemName} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="nonveg-container">
      <div className="nonveg-grid">
        {nonVegItems.map((item) => (
          <div key={item.id} className="nonveg-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item.name)}>Add To Cart</button>
          </div>
        ))}
      </div>
     
      <ToastContainer />
    </div>
  );
}

export default NonVeg;*/


/*import React from 'react';
import '../css/NonVeg.css';   // ✅ Import external CSS

// image imports
import fishImg from '../assets/image/fish.png';
import muttonImg from '../assets/image/mutton.png';
import prawnImg from '../assets/image/prawn.png';
import chickenImg from '../assets/image/chicken.png';
import fishFryImg from '../assets/image/fish_fry.png';
import bhurjiImg from '../assets/image/bhurji.png';
import eggImg from '../assets/image/egg.png';
import kababImg from '../assets/image/kabab.png';

function NonVeg() {
  const nonVegItems = [
    { id: 1, name: "Fish Curry", price: 120, image: fishImg },
    { id: 2, name: "Mutton", price: 250, image: muttonImg },
    { id: 3, name: "Prawn", price: 220, image: prawnImg },
    { id: 4, name: "Chicken", price: 180, image: chickenImg },
    { id: 5, name: "Fish Fry", price: 150, image: fishFryImg },
    { id: 6, name: "Egg Bhurji", price: 80, image: bhurjiImg },
    { id: 7, name: "Boiled Egg", price: 40, image: eggImg },
    { id: 8, name: "Kabab", price: 200, image: kababImg },
  ];

  const handleAddToCart = (itemName) => {
    alert(`${itemName} is added to the cart`);
  };

  return (
    <div className="nonveg-container">
      <div className="nonveg-grid">
        {nonVegItems.map((item) => (
          <div key={item.id} className="nonveg-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVeg;*/



/*import React from 'react';
//import NonVegImage from '../assets/image/non_veg.png';
import fishImg from '../assets/image/fish.png';
import muttonImg from '../assets/image/mutton.png';
import prawnImg from '../assets/image/prawn.png';
import chickenImg from '../assets/image/chicken.png';
import fishFryImg from '../assets/image/fish_fry.png';
import bhurjiImg from '../assets/image/bhurji.png';
import eggImg from '../assets/image/egg.png';
import kababImg from '../assets/image/kabab.png';

function NonVeg() {
  const nonVegItems = [
    { id: 1, name: "Fish Curry", price: 120, image: fishImg },
    { id: 2, name: "Mutton", price: 250, image: muttonImg },
    { id: 3, name: "Prawn", price: 220, image: prawnImg },
    { id: 4, name: "Chicken", price: 180, image: chickenImg },
    { id: 5, name: "Fish Fry", price: 150, image: fishFryImg },
    { id: 6, name: "Egg Bhurji", price: 80, image: bhurjiImg },
    { id: 7, name: "Boiled Egg", price: 40, image: eggImg },
    { id: 8, name: "Kabab", price: 200, image: kababImg },
    // ✅ If you add 1000 items, no code changes needed
  ];

  const handleAddToCart = (itemName) => {
    alert(`${itemName} is added to the cart`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {nonVegItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <img src={item.image} alt={item.name} width="150" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVeg;*/


/*function NonVeg() {
  return (
    <>
    <center>
    <h1>NonVeg Items..</h1>
    <img src={NonVegImage} alt="Veg Items" width="400" />
    </center>
    </>
  )
}*/

{/*<h1>Non‑Veg Items</h1>*/}



