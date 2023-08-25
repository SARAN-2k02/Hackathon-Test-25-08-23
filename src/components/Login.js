import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [heading, setheading] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const HandleSubmit = (event) => {
    alert("hey");
    event.preventDefault();

    if (name === " " || email === " " || password === " ") {
      alert("Please enter the details");
    } else {
      console.log("name :", name);
      console.log("Email:", email);
      console.log("Password:", password);
      setheading(name);
    }
  };

  function navigateProducts() {
    navigate("/Products");
  }
  return (
    <div>
      <form className="main-form" onSubmit={HandleSubmit}>
        <div>
          <h1>LOGIN PAGE</h1>
          <h2>{heading}</h2>
          <div>
            <label htmlFor="name">Name:</label>

            <input
              type="name"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="login-btn"
            onClick={navigateProducts}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
