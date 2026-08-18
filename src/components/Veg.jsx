import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../css/Veg.css';

// image imports
import tomatoImg from '../assets/image/tomato.png';
import potatoImg from '../assets/image/potato.png';
import carrotImg from '../assets/image/carrot.png';
import cabbageImg from '../assets/image/cabbage.png';
import onionImg from '../assets/image/onion.png';
import capsicumImg from '../assets/image/capsicum.png';
import brinjalImg from '../assets/image/brinjal.png';
import peasImg from '../assets/image/peas.png';

function Veg() {
  const dispatch = useDispatch();

  const vegItems = [
    { id: 1, name: "Tomato", price: 20, image: tomatoImg },
    { id: 2, name: "Potato", price: 30, image: potatoImg },
    { id: 3, name: "Carrot", price: 25, image: carrotImg },
    { id: 4, name: "Cabbage", price: 15, image: cabbageImg },
    { id: 5, name: "Onion", price: 22, image: onionImg },
    { id: 6, name: "Capsicum", price: 35, image: capsicumImg },
    { id: 7, name: "Brinjal", price: 28, image: brinjalImg },
    { id: 8, name: "Peas", price: 18, image: peasImg },
  ];

  const handleAddToCart = (item) => {
    toast.success(`${item.name} Added Successfully 🛒`, {
      position: "top-right",
      autoClose: 2000,
      onClose: () => {
        // Dispatch only after toast closes
        dispatch(addToCart(item));
      }
    });
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {vegItems.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text fw-bold">₹{item.price}</p>
                <button 
                  className="btn btn-success w-100"
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

export default Veg;










/*import React from 'react';
import '../css/Veg.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// image imports
import tomatoImg from '../assets/image/tomato.png';
import potatoImg from '../assets/image/potato.png';
import carrotImg from '../assets/image/carrot.png';
import cabbageImg from '../assets/image/cabbage.png';
import onionImg from '../assets/image/onion.png';
import capsicumImg from '../assets/image/capsicum.png';
import brinjalImg from '../assets/image/brinjal.png';
import peasImg from '../assets/image/peas.png';


import { ToastContainer } from 'react-toastify';

function Veg() {
  const vegItems = [
    { id: 1, name: "Tomato", price: 20, image: tomatoImg },
    { id: 2, name: "Potato", price: 30, image: potatoImg },
    { id: 3, name: "Carrot", price: 25, image: carrotImg },
    { id: 4, name: "Cabbage", price: 15, image: cabbageImg },
    { id: 5, name: "Onion", price: 22, image: onionImg },
    { id: 6, name: "Capsicum", price: 35, image: capsicumImg },
    { id: 7, name: "Brinjal", price: 28, image: brinjalImg },
    { id: 8, name: "Peas", price: 18, image: peasImg },
  ];

  const handleAddToCart = (itemName) => {
    toast.success(`${itemName} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="veg-container">
      <div className="veg-grid">
        {vegItems.map((item) => (
          <div key={item.id} className="veg-card">
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

export default Veg;*/


















/*import React from 'react';
import '../css/Veg.css';   // ✅ Import external CSS

// image imports
import tomatoImg from '../assets/image/tomato.png';
import potatoImg from '../assets/image/potato.png';
import carrotImg from '../assets/image/carrot.png';
import cabbageImg from '../assets/image/cabbage.png';
import onionImg from '../assets/image/onion.png';
import capsicumImg from '../assets/image/capsicum.png';
import brinjalImg from '../assets/image/brinjal.png';
import peasImg from '../assets/image/peas.png';

function Veg() {
  const vegItems = [
    { id: 1, name: "Tomato", price: 20, image: tomatoImg },
    { id: 2, name: "Potato", price: 30, image: potatoImg },
    { id: 3, name: "Carrot", price: 25, image: carrotImg },
    { id: 4, name: "Cabbage", price: 15, image: cabbageImg },
    { id: 5, name: "Onion", price: 22, image: onionImg },
    { id: 6, name: "Capsicum", price: 35, image: capsicumImg },
    { id: 7, name: "Brinjal", price: 28, image: brinjalImg },
    { id: 8, name: "Peas", price: 18, image: peasImg },
  ];

  const handleAddToCart = (itemName) => {
    alert(`${itemName} is added to the cart`);
  };

  return (
    <div className="veg-container">
      <div className="veg-grid">
        {vegItems.map((item) => (
          <div key={item.id} className="veg-card">
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

export default Veg;*/


/*import React from 'react';
//import VegImage from '../assets/image/veg.png';
import tomatoImg from '../assets/image/tomato.png';
import potatoImg from '../assets/image/potato.png';
import carrotImg from '../assets/image/carrot.png';
import cabbageImg from '../assets/image/cabbage.png';
import onionImg from '../assets/image/onion.png';
import capsicumImg from '../assets/image/capsicum.png';
import brinjalImg from '../assets/image/brinjal.png';
import peasImg from '../assets/image/peas.png';

function Veg() {
  const vegItems = [
    { id: 1, name: "Tomato", price: 20, image: tomatoImg },
    { id: 2, name: "Potato", price: 30, image: potatoImg },
    { id: 3, name: "Carrot", price: 25, image: carrotImg },
    { id: 4, name: "Cabbage", price: 15, image: cabbageImg },
    { id: 5, name: "Onion", price: 22, image: onionImg },
    { id: 6, name: "Capsicum", price: 35, image: capsicumImg },
    { id: 7, name: "Brinjal", price: 28, image: brinjalImg },
    { id: 8, name: "Peas", price: 18, image: peasImg },
    // ✅ Add more items here — no code changes needed
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
        {vegItems.map((item) => (
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

export default Veg;*/


/*function Veg() {
  return (
    <>
    <center>
    <h1>Veg Items..</h1>
    <img src={VegImage} alt="Veg Items" width="400" />
    </center>
    </>
  )
}*/

{/*<h1>Veg Items</h1>*/}
