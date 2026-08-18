import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUser }) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const loginLogic = async (loginData) => {
    try {
      const response = await axios.post("http://localhost:6565/api/users/login", loginData);
      const user = response.data;
      const username = user.username;

      localStorage.setItem("username", username); // persist
      setUser(username); // update App state

      if (response.status === 200) {
        
        alert("Login Successful");
        navigate("/home");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Invalid password");
      } else if (error.response?.status === 404) {
        alert("User not found");
      } else {
        alert("Login failed");
      }
    }
    reset();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <div className="card-header bg-danger text-white text-center">
          <h3>Welcome Back 🍴</h3>
          <p className="mb-0">Login to continue ordering</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(loginLogic)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Login
            </button>
          </form>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">
            New here? <a href="/register" className="text-danger">Create an account</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;



/*import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUser }) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const loginLogic = async (loginData) => {
    try {
      const response = await axios.post("http://localhost:6565/api/users/login", loginData);
      // response.data is the user object returned by backend
  const user = response.data;
 
  const username = user.username;
   localStorage.setItem("username",username);  
   setUser(username);                           

      if (response.status === 200) {
        alert("Login Successful");
        navigate("/home");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Invalid password");
      } else if (error.response?.status === 404) {
        alert("User not found");
      } else {
        alert("Login failed");
      }
    }
    reset();
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(loginLogic)}>
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        <input type="password" placeholder="Password" {...register("password", { required: true })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;*/






/*import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit, reset } = useForm();
    let navigate=useNavigate();

    let loginLogics = (loginData) => {
    
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

   
    const validUser = registeredUsers.find(user =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

   
if (validUser) {// alert('Login Sucessfull')
    navigate("/veg");
    window.location.reload();
} else {
    alert("login Failllll Please wake up check code");
}

}

  return (
    <>
    <form onSubmit={handleSubmit(loginLogic)}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          type="tel"
          placeholder="Enter your mobile"
          {...register("mobile", { required: true })}
        />

    </form>
    </>
   
  )
}

export default Login*/