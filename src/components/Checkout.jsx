import React, { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import QRCode from "react-qr-code";
import emailjs from "@emailjs/browser";

function Checkout() {
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const location = useLocation();
  const {
    cart = [],
    grandTotal = 0,
    tax = 0,
    discount = 0,
    finalTotal = 0, // ⚠️ this already includes tax
  } = location.state || {};

  const shippingCharge = 50; // ✅ define shipping
  const amount = Number(finalTotal) + shippingCharge; // ✅ add shipping to finalTotal

  const orderId = Math.floor(Math.random() * 1000000);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };

    // ✅ Payload includes shipping in total
    const templateParams = {
      order_id: String(orderId),
      orders: cart.map(item => ({
        name: String(item.name),
        units: String(item.quantity),
        price: String((item.price * item.quantity).toFixed(2))
      })),
      cost: {
        subtotal: String(grandTotal.toFixed(2)), // base subtotal
        discount: String(discount),
        shipping: String(shippingCharge),
        tax: String(Number(tax).toFixed(2)),
        total: String(amount.toFixed(2)) // ✅ includes shipping
      },
      email: String(userData.email)
    };

    console.log("Payload sent to EmailJS:", templateParams);

    emailjs.send(
      "service_t86dn4y",
      "template_iqw9szl",
      templateParams,
      { publicKey: "v-rUBDaobIaliYY5L" }
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully 🎉",
        html: `Order Placed For ${userData.name} with id <b>${orderId}</b>. Email sent successfully!`,
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
      });

      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      dispatch(clearCart());
      navigate("/");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      Swal.fire({
        icon: "error",
        title: "Email Sending Failed",
        text: error.text || JSON.stringify(error),
      });
    });
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
            params: { lat: latitude, lon: longitude, format: "json", addressdetails: 1 },
          });
          if (response.data && response.data.address) {
            const addr = response.data.address;
            const fullAddress = [
              addr.house_number,
              addr.road,
              addr.suburb,
              addr.city || addr.town || addr.village,
              addr.state,
              addr.postcode,
              addr.country,
            ].filter(Boolean).join(", ");
            addressRef.current.value = fullAddress || response.data.display_name;
          } else {
            alert("No detailed address found for this location.");
          }
        } catch (error) {
          alert("Error fetching address: " + error.message);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Customer Address</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" ref={nameRef} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="tel" ref={mobileRef} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" ref={emailRef} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea ref={addressRef} className="form-control" rows="2" required />
          <button type="button" className="btn btn-outline-primary mt-2" onClick={handleCurrentLocation}>
            Use Current Location
          </button>
        </div>

        <div className="payment-method">
          <h3>Select Payment Method:</h3>
          <button type="button" onClick={() => setPaymentMethod('qr')}> 🧾 QR Code</button>
          <button type="button" onClick={() => setPaymentMethod('card')}> 💳 Card</button>
        </div>

        {paymentMethod === 'qr' && (
          <div className="qr-code-payment">
            <h4>Scan the QR Code to Pay: ₹{amount.toFixed(2)}</h4>
            <QRCode value={`upi://pay?pa=gobiglobexzzz2@ybl&pn=RatanStore&am=${amount.toFixed(2)}&cu=INR`} />
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="qr-code-payment">
            <h4>Enter the Card details:</h4>
            <input type="text" placeholder="Card Number" className="form-control mb-2" />
            <input type="text" placeholder="Expiry Date (MM/YY)" className="form-control mb-2" />
            <input type="text" placeholder="CVV" className="form-control mb-2" />
          </div>
        )}

        <br /><br />
        <button type="submit" className="btn btn-success w-100">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;



/*import React, { useRef } from 'react';
import axios from 'axios';

function Checkout() {
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };
    console.log("Captured User Data:", userData);
    alert(`Order placed for ${userData.name}`);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // Example using OpenStreetMap Nominatim API (free)
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse`,
              {
                params: {
                  lat: latitude,
                  lon: longitude,
                  format: "json",
                },
              }
            );

            const fullAddress = response.data.display_name;
            addressRef.current.value = fullAddress;
          } catch (error) {
            alert("Error fetching address: " + error.message);
          }
        },
        (error) => {
          alert("Unable to fetch location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Checkout</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" ref={nameRef} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="tel" ref={mobileRef} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" ref={emailRef} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea ref={addressRef} className="form-control" rows="2" required />
          <button
            type="button"
            className="btn btn-outline-primary mt-2"
            onClick={handleCurrentLocation}
          >
            Use Current Location
          </button>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;*/

/*import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/CartSlice'
import { FaCheckCircle } from 'react-icons/fa'
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';


function Checkout() {
  const cart = useSelector(globalState => globalState.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = (grandTotal * 0.05).toFixed(2);
  const discount = grandTotal > 500 ? 50 : 0;
  const finalTotal = (grandTotal + parseFloat(tax) - discount).toFixed(2);

  const handleConfirmOrder = () => {
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


    dispatch(clearCart());
    navigate("/");
    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-danger text-white text-center rounded-top-4">
              <h3 className="fw-bold mb-0">
                <FaCheckCircle className="me-2" /> Checkout
              </h3>
            </div>
            <div className="card-body p-4">
              {cart.length === 0 ? (
                <p className="text-center text-muted">Your cart is empty.</p>
              ) : (
                <>
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

                  <button 
                    className="btn btn-danger w-100 py-2 fw-bold rounded-pill shadow-sm" 
                    onClick={handleConfirmOrder}
                  >
                    Confirm Order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;*/


/*import React from 'react'

function Checkout() {
  return (
    <h1>Welcome To Checkout Page</h1>
  )
}

export default Checkout*/



