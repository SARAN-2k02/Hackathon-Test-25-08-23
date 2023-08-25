import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>HOMEPAGE</h1>
      </div>
      <nav className="links">
        {/* <Link to="/Register">Register</Link> */}
        <Link to="/Login">Login</Link>
        <Link to="/Products">Products</Link>
      </nav>
    </>
  );
};

export default Home;
