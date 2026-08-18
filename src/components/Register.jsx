import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";

function Register() {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [singleUser, setSingleUser] = useState(null);

  const registerLogic = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:6565/api/users/register",
        userData
      );
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful 🎉",
          text: "You have registered successfully!",
          confirmButtonText: "OK",
          timer: 3000,
          timerProgressBar: true,
        });

        confetti({
          particleCount: 150,
          spread: 70,
          colors: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8f00ff"],
          origin: { y: 0.6 },
        });

        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:6565/api/users/getAll");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:6565/api/users/${id}`);
      setSingleUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      setSingleUser(null);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column - All Users */}
        <div className="col-md-4">
          <h4>All Users</h4>
          <button className="btn btn-primary mb-3" onClick={fetchAllUsers}>
            Show All Users
          </button>
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                <strong>{user.id}</strong> | {user.username} | {user.email} | {user.mobile}
              </li>
            ))}
          </ul>

          {/* Find User by ID */}
          <div className="mt-4">
            <h5>Find User by ID</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter user ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className="btn btn-info" onClick={fetchUserById}>
              Get User
            </button>

            {singleUser && (
              <div className="card mt-3">
                <div className="card-body">
                  <p><strong>Username:</strong> {singleUser.username}</p>
                  <p><strong>Email:</strong> {singleUser.email}</p>
                  <p><strong>Mobile:</strong> {singleUser.mobile}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Column - Registration Form */}
        <div className="col-md-8 d-flex justify-content-center">
          <div className="card shadow w-75">
            <div className="card-header bg-success text-white text-center">
              <h3>Customer Registration</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(registerLogic)}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    {...register("username", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                </div>

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
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your mobile"
                    {...register("mobile", { required: true })}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


/*import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const registerLogic = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:6565/api/users/register",
        userData
      );

      if (response.status === 200 || response.status === 201) {
        alert("Registration Successfully");
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Registration Form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(registerLogic)}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    {...register("username", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your emailId"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your mobile"
                    {...register("mobile", { required: true })}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;*/



/*import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const registerLogic = (userData) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successfully");
    reset();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Registration Form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(registerLogic)}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    {...register("username", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your emailId"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your mobile"
                    {...register("mobile", { required: true })}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;*/


/*import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const registerLogic = (userData) => {
    //console.log(JSON.stringify(userData));
   let users= JSON.parse(localStorage.getItem("users")) || [];
   users.push(userData);
   localStorage.setItem("users",JSON.stringify(users))
   alert("Registration Sucessfully");
    reset(); 
  };

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(registerLogic)}>
        <input
          type="text"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        <br />

        <input
          type="email"
          placeholder="Enter your emailId"
          {...register("email", { required: true })}
        />
        <br />

        <input
          type="tel"
          placeholder="Enter your mobile"
          {...register("mobile", { required: true })}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;*/
