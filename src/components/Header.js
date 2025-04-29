import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {  isLogged } from "../services/authService";
import { CartContext } from "../context/CartContext";

import "./Header.css";

function Header({ setShowCart, showCart}) {

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [ search_text, set_search_text] = useState("");

  const handleSearch = () => {
    if (search_text) {
      navigate(`/products/search/${search_text}`);
      window.location.reload();
    } else {
      alert("Please enter a search term");
    }
  }

  const { cart } = useContext(CartContext);
  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await isLogged();
        if (response === true) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
      catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    }
    checkAuthentication();
  }, [isAuthenticated]);

  const handleDashboardClick = (e) => {
    e.preventDefault(); // Prevent default navigation behavior
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  window.addEventListener("scroll", function () {
    setShowCart(false);
  });

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/images/icons/icon-4x.png"
            alt="logo"
            className="img-fluid"
            style={{
              height: "70px",
              borderRadius: "10px",
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item" style={{display: "flex", justifyContent: "center",}}>
              <a className="nav-link">
              <button className="nav-btn" onClick={handleDashboardClick}>
                User Dashboard
              </button>
              </a>
            </li>
            <li className="nav-item" style={{display: "flex", justifyContent: "center",}}>
                <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
                  🛒 Cart {cart.length > 0 && <div className="cart-item-count">{cart.length}</div>}
                </button>
            </li>
          </ul>

          <form className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}>
            <input
              className="form-control me-2 search-input"
              type="text"
              placeholder="Search Items"
              value={search_text}
              onChange={(e) => set_search_text(e.target.value)}
              style={{
                borderRadius: "50px",
                border: "1px solid green",
              }}
            />
            <button
              className="btn btn-primary"
              type="submit"
              style={{
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                borderRadius: "50px",
                border: "none"
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
