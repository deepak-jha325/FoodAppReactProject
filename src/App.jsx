
import React, { useState } from 'react';
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './css/Apply.css'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'


// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import Checkout from './components/Checkout'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  let cart = useSelector(globalState => globalState.cart);
  let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  // ✅ Read username directly from localStorage
 // ✅ State for user
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogout = () => {
    localStorage.removeItem("username");  // clear username from localStorage
    setUsername(null);
    window.location.reload();  
  };
  
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="navbar d-flex justify-content-center gap-5 py-2 bg-dark">
          <Link to="/home" className="text-center text-white">
            <img src={homeImg} alt="Home" style={{ height: "40px" }} />
            <div>Home</div>
          </Link>

          <Link to="/veg" className="text-center text-white">
            <img src={vegImg} alt="Veg" style={{ height: "40px" }} />
            <div>Veg</div>
          </Link>

          <Link to="/nonveg" className="text-center text-white">
            <img src={nonVegImg} alt="NonVeg" style={{ height: "40px" }} />
            <div>NonVeg</div>
          </Link>

          <Link to="/cart" className="position-relative text-center text-white">
            <FaShoppingCart size={40} className="text-danger" />
            {totalCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.75rem", minWidth: "18px" }}
              >
                {totalCount}
              </span>
            )}
            <div>Cart</div>
          </Link>
         

          {/* ✅ Conditional rendering */}
          {username ? (
            <>
              <span className="text-white fw-bold">Welcome, {username}</span>
              <button onClick={handleLogout} className="btn btn-sm btn-danger ms-3">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}

        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
           <Route path="/register" element={<Register />} />
         {/* <Route path="/login" element={<Login />} />*/}
          {/* ✅ Pass setUsername down */}
          <Route path="/login" element={<Login setUser={setUsername} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App





/*import React from 'react'
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './css/Apply.css'

// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import cartImg from './assets/image/add_to_cart.png'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/home">
            <img src={homeImg} alt="Home" />
            <span>Home</span>
          </Link>
          <Link to="/veg">
            <img src={vegImg} alt="Veg" />
            <span>Veg</span>
          </Link>
          <Link to="/nonveg">
            <img src={nonVegImg} alt="NonVeg" />
            <span>NonVeg</span>
          </Link>
          <Link to="/cart">
            <img src={cartImg} alt="Cart" />
            <span>Cart</span>
          </Link>
        </div>

        
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/


/*import React from 'react'
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './css/Apply.css'

// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import cartImg from './assets/image/add_to_cart.png'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>
          <img src={homeImg} alt="Home" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/veg" className={({ isActive }) => isActive ? "active-link" : ""}>
          <img src={vegImg} alt="Veg" />
          <span>Veg</span>
        </NavLink>
        <NavLink to="/nonveg" className={({ isActive }) => isActive ? "active-link" : ""}>
          <img src={nonVegImg} alt="NonVeg" />
          <span>NonVeg</span>
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
          <img src={cartImg} alt="Cart" />
          <span>Cart</span>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/


/*import React from 'react'
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import cartImg from './assets/image/add_to_cart.png'

// external CSS
import './css/Apply.css'

function App() {
  return (
    <BrowserRouter>
     
      <div className="header">
        <div className="header-title">My Food App</div>
        <div className="nav-container">
          <Link to="/home">
            <img src={homeImg} alt="Home" />
          </Link>
          <Link to="/veg">
            <img src={vegImg} alt="Veg Items" />
          </Link>
          <Link to="/nonveg">
            <img src={nonVegImg} alt="Non-Veg Items" />
          </Link>
          <Link to="/cart">
            <img src={cartImg} alt="Cart Items" />
          </Link>
        </div>
      </div>

      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/







/*import React from 'react'
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import cartImg from './assets/image/add_to_cart.png'

// external CSS
import './css/Apply.css'

function App() {
  return (
    <BrowserRouter>
      
      <div className="header">
        My Food App
      </div>

      
      <div className="nav-container">
        <Link to="/home">
          <img src={homeImg} alt="Home" />
        </Link>
        <Link to="/veg">
          <img src={vegImg} alt="Veg Items" />
        </Link>
        <Link to="/nonveg">
          <img src={nonVegImg} alt="Non-Veg Items" />
        </Link>
        <Link to="/cart">
          <img src={cartImg} alt="Cart Items" />
        </Link>
      </div>

      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/






/*import React from 'react'
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import cartImg from './assets/image/add_to_cart.png'

// external CSS
import './css/Apply.css'

function App() {
  return (
    <BrowserRouter>
      <div className="nav-container">
        <Link to="/home">
          <img src={homeImg} alt="Home" />
        </Link>
        <Link to="/veg">
          <img src={vegImg} alt="Veg Items" />
        </Link>
        <Link to="/nonveg">
          <img src={nonVegImg} alt="Non-Veg Items" />
        </Link>
        <Link to="/cart">
          <img src={cartImg} alt="Cart Items" />
        </Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/





/*import React from 'react'
import Home from './components/Home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// image imports
import homeImg from './assets/image/home2.png'
import vegImg from './assets/image/veg2.png'
import nonVegImg from './assets/image/non_veg2.png'
import cartImg from './assets/image/add_to_cart.png'

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "40px", 
        margin: "20px" 
      }}>
        <Link to="/home">
          <img src={homeImg} alt="Home" width="100" />
        </Link>
        {" "}
        <Link to="/veg">
          <img src={vegImg} alt="Veg Items" width="100" />
        </Link>
        {" "}
        <Link to="/nonveg">
          <img src={nonVegImg} alt="Non-Veg Items" width="100" />
        </Link>
        {" "}
        <Link to="/cart">
          <img src={cartImg} alt="Cart Items" width="100" />
        </Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/



/*import React from 'react'
import Home from './components/home'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>

<BrowserRouter>
<nav>
      <Link to="/home">HomePage</Link>|{"  "}
      <Link to="/veg">VegItems</Link>|{"  "}
      <Link to="/nonveg">NonVegItems</Link>|{"  "}
      <Link to="/cart">CartItems</Link>|{"  "}
</nav>

      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/veg" element={<Veg/>}/>
      <Route path="/nonveg" element={<NonVeg/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
</BrowserRouter>


    </>
  );
}

export default App*/
