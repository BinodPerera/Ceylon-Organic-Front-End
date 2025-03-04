import React from "react";

function Header(){
    return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/assets/images/icons/icon-4x.png" alt="logo" class="img-fluid" 
          style={{ 
            height: "70px",
            borderRadius: "10px",
          }} 
        />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="/products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>

        <a href="/dashboard">
          <div style={{ 
            color: "purple",
            marginLeft: "10px",
            marginRight: "10px",
            // getting content vertically center
            display: "flex",
            alignItems: "center",
          }}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=account_circle" />
            <span class="material-symbols-outlined">
              account_circle
            </span>
          </div>
        </a>
        <a class="nav-link" href="/products"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg></a>

        <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search Items" />
          <button 
            class="btn btn-primary" 
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