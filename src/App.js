import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Register from "./components/Register";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
function App() {
  return (
    <>
      <div className="App">
        <h3 className="heading">Buy. Think. Go 🛒</h3>

        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="Register" element={<Register />} /> */}
            <Route path="Login" element={<Login />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
