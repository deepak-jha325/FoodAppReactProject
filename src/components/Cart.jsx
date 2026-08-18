
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from 'react-icons/fa'
import { addToCart, removeOne, removeAll } from '../redux/CartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cart = useSelector(globalState => globalState.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = (grandTotal * 0.05).toFixed(2);
  const discount = grandTotal > 500 ? 50 : 0;
  const finalTotal = (grandTotal + parseFloat(tax) - discount).toFixed(2);

  return (
    <div className="container mt-4">
      <div className="row">
        
        {/* LEFT SIDE - Cart Items */}
        <div className="col-md-8">
          <h2 className="mb-3 d-flex align-items-center">
            <FaShoppingCart className="me-2 text-danger" size={28} />
            <span className="fw-bold">Cart Items</span>
          </h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="card mb-2 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded-start"
                      style={{ height: "100px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body p-2">
                      <h6 className="card-title mb-1">{item.name}</h6>
                      <p className="mb-1">Price: ₹{item.price}</p>
                      <p className="mb-1"><b>Total: ₹{item.price * item.quantity}</b></p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <button 
                        className="btn btn-light btn-sm me-2"
                        onClick={() => dispatch(removeOne(item.id))}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="btn btn-light btn-sm ms-2"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        <FaPlus />
                      </button>
                      <button 
                        className="btn btn-danger btn-sm ms-3"
                        onClick={() => dispatch(removeAll(item.id))}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE - Summary */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-4 text-center">Order Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span className="fw-semibold">₹{grandTotal}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Tax (5%)</span>
                <span className="fw-semibold">₹{tax}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Discount</span>
                <span className="fw-semibold text-success">-₹{discount}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fw-bold fs-5">Final Total</span>
                <span className="fw-bold fs-4 text-danger">₹{finalTotal}</span>
              </div>

             {/* <button 
                className="btn btn-danger w-100 py-2 fw-bold rounded-pill" 
                onClick={() => {
                  navigate("/checkout", { state: { cart, grandTotal, tax, discount, finalTotal } });
                navigate("/checkout", { state: { finalTotal: Number(finalTotal) } });

                }}
              >
                Proceed to Checkout
              </button>*/}


<button
  className="btn btn-success w-100 mt-4"
  onClick={() =>
    navigate("/checkout", {
      state: {
        cart: cart,
        grandTotal: grandTotal,
        tax: tax,
        discount: discount,
        finalTotal: finalTotal,
      },
    })
  }
>
  Proceed to Checkout
</button>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart;




/*import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { addToCart, removeOne, removeAll } from '../redux/CartSlice'
import { FaShoppingCart } from "react-icons/fa";


function Cart() {
  const cart = useSelector(globalState => globalState.cart);
  const dispatch = useDispatch();

  const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = grandTotal * 0.05;
  const discount = grandTotal > 500 ? 50 : 0;
  const finalTotal = grandTotal + tax - discount;

  return (
    <div className="container mt-4">
      <div className="row">
        
        
        <div className="col-md-8">
          <h2 className="mb-3 d-flex align-items-center">
  <FaShoppingCart className="me-2 text-danger" size={28} />
  <span className="fw-bold">Cart Items</span>
</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="card mb-2 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded-start"
                      style={{ height: "100px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body p-2">
                      <h6 className="card-title mb-1">{item.name}</h6>
                      <p className="mb-1">Price: ₹{item.price}</p>
                      <p className="mb-1"><b>Total: ₹{item.price * item.quantity}</b></p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <button 
                        className="btn btn-light btn-sm me-2"
                        onClick={() => dispatch(removeOne(item.id))}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="btn btn-light btn-sm ms-2"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        <FaPlus />
                      </button>
                      <button 
                        className="btn btn-danger btn-sm ms-3"
                        onClick={() => dispatch(removeAll(item.id))}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        
        <div className="col-md-4">
  <div className="card border-0 shadow-sm">
    <div className="card-body">
      <h4 className="fw-bold mb-4 text-center">Order Summary</h4>

      
      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted">Subtotal</span>
        <span className="fw-semibold">₹{grandTotal}</span>
      </div>

      
      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted">Tax (5%)</span>
        <span className="fw-semibold">₹{tax}</span>
      </div>

      
      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted">Discount</span>
        <span className="fw-semibold text-success">-₹{discount}</span>
      </div>

      <hr />

     
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fw-bold fs-5">Final Total</span>
        <span className="fw-bold fs-4 text-danger">₹{finalTotal}</span>
      </div>

      
      <button className="btn btn-danger w-100 py-2 fw-bold rounded-pill">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>


      </div>
    </div>
  )
}

export default Cart*/

/*import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

function Cart() {
  const cart = useSelector(globalState => globalState.cart);
  const dispatch = useDispatch();

  
  const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  
  const tax = grandTotal * 0.05;       // 5% tax
  const discount = grandTotal > 500 ? 50 : 0; // flat discount if > 500
  const finalTotal = grandTotal + tax - discount;

  return (
    <div className="container mt-4">
      <div className="row">
        
        
        <div className="col-md-8">
          <h2 className="mb-3">Cart Items</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="card mb-2 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded-start"
                      style={{ height: "100px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body p-2">
                      <h6 className="card-title mb-1">{item.name}</h6>
                      <p className="mb-1">Price: ₹{item.price}</p>
                      <p className="mb-1">Total: ₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <button className="btn btn-light btn-sm me-2">
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button className="btn btn-light btn-sm ms-2">
                        <FaPlus />
                      </button>
                      <button className="btn btn-danger btn-sm ms-3">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        
        <div className="col-md-4">
          <h2 className="mb-3">Summary</h2>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>₹{grandTotal}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Tax (5%)</span>
              <strong>₹{tax}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Discount</span>
              <strong>-₹{discount}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Final Total</span>
              <strong>₹{finalTotal}</strong>
            </li>
          </ul>
          <button className="btn btn-primary w-100 mt-3">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart*/




/*import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  let cart = useSelector(globalState => globalState.cart);
  let grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity),0);


  return (
    <>
      <h2 className="mb-4">Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className="card text-center shadow-sm mb-3" style={{ width: "200px" }}>
                <img 
                  src={item.image} 
                  className="card-img-top" 
                  alt={item.name} 
                  style={{ height: "120px", objectFit: "contain" }} 
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">{item.name}</h6>
                  <p className="text-muted small mb-1">₹{item.price} × {item.quantity}</p>
                  <p className="fw-bold mb-0">Total: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <h1>Total Bill: {grandTotal}</h1>
    </>
  )
}

export default Cart*/






/*import React from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import styled from 'styled-components';
const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
`;

function Cart() {
  const handleOrder = () => {
    const orderId = Math.floor(Math.random() * 1000000);

    Swal.fire({
      icon: 'success',
      title: 'Order Placed Successfully 🎉',
      html: `Your order id is <b>${orderId}</b>.`,
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true,
    });

    confetti({
      particleCount: 150,
      spread: 70,
      colors: ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#8f00ff'],
      origin: { y: 0.6 }
    });
  };

  return (
    <>
    <div style={{ textAlign: 'center', padding: '80px' }}>
      <CheckoutButton onClick={handleOrder}>
        Checkout
      </CheckoutButton>
    </div>
    </>
  );
}

export default Cart;*/



/*import React from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';   // ✅ Import confetti
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Cart.css';

function Cart() {
  const handleOrder = () => {
    const orderId = Math.floor(Math.random() * 1000000);

    // Show SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Order Placed Successfully ! 🎉',
      html: `Your order id is <b>${orderId}</b>.`,
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'swal-popup',
        title: 'swal-title',
        htmlContainer: 'swal-text',
        confirmButton: 'swal-btn'
      }
    });
    // Fire confetti immediately

  confetti({
  particleCount: 150,
  spread: 70,
  colors: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'],
  origin: { y: 0.6 }
});
};

return (
    <div className="container text-center py-5">
      <button 
        className="btn btn-success btn-lg shadow-sm" 
        onClick={handleOrder}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;*/


//*********************************************

/*confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };*/

  /*confetti({
  particleCount: 60,
  angle: 60,
  spread: 55,
  origin: { x: 0 }
})
};*/


/*confetti({
  particleCount: 60,
  angle: 120,
  spread: 55,
  origin: { x: 1 }
})
};*/

/*confetti({
  particleCount: 60,
  angle: 60,
  spread: 55,
  origin: { x: 0 }
})
};*/

/*confetti({
  particleCount: 120,
  spread: 80,
  colors: ['#28a745', '#85e085'], 
  origin: { y: 0.6 }
})
};*/

/*const duration = 3 * 1000;
const end = Date.now() + duration;

(function frame() {
  confetti({
    particleCount: 5,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  confetti({
    particleCount: 5,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})
};*/

/*confetti({
  particleCount: 80,
  spread: 100,
  shapes: ['circle', 'square'],
  scalar: 1.2,
  origin: { y: 0.6 }
})
};*/

  