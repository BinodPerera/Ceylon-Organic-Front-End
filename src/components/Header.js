import React from "react";

import "./Header.css";

function Header(){
    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="/assets/images/icons/icon-4x.png" alt="logo" className="img-fluid" 
          style={{ 
            height: "70px",
            borderRadius: "10px",
          }} 
        />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              <button className="nav-btn">User Dashboard</button>
            </a>
          </li>
        </ul>

        

        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search Items" />
          <button 
            className="btn btn-primary" 
            type="button"
            style={{
              backgroundColor: "purple",
              color: "white",
              fontWeight: "bold",
            }}
          >Search
          </button>
        </form>
        
      </div>
    </div>
  </nav>
    );
}

export default Header;