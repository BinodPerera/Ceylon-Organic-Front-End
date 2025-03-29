import React from 'react';
import './App.css';

// importing react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import SideNav from "./components/SideNav";

// importing pages
import Homepage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/error";

import Products from "./pages/product/Products";
import InsertProduct from "./pages/product/InsertProduct";
import ProductDetails from "./pages/product/Product-details";
import ManageProduct from "./pages/product/ManageProduct";
import EditProduct from "./pages/product/EditProduct";

import Users from "./pages/user/Users";
import InsertUser from "./pages/user/UsersInsert";

import Login from './pages/admin/login';
import Register from './pages/admin/register';
import Dashboard from './pages/admin/dashboard';

import Category from './pages/category/category';
import AddCategory from './pages/category/AddCategory';
import EditCategory from './pages/category/EditCategory';



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:category_id" element={<Products />} />
        <Route path="/add-product" element={<div class="container-fluid"><div class="row"><SideNav /><InsertProduct /></div></div>} />
        <Route path="/manage-products" element={<div class="container-fluid"><div class="row"><SideNav /><ManageProduct /></div></div>} />
        <Route path="/edit-product/:id" element={<div class="container-fluid"><div class="row"><SideNav /><EditProduct /></div></div>} />
        <Route path='/product-details/:product_id' element={<ProductDetails />} />

        <Route path="/users" element={<Users />} />
        <Route path="/insert_user" element={<InsertUser />} />

        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/dashboard" element={<div class="container-fluid"><div class="row"><SideNav /><Dashboard /></div></div>} />

        <Route path="/category" element={
          <div class="container-fluid">
            <div class="row">
              <SideNav />
              <Category />
            </div>
          </div>
        } />
        <Route path="/add-category" element={
          <div class="container-fluid">
            <div class="row">
              <SideNav />
              <AddCategory />
            </div>
          </div>
        } />
        <Route path="/edit-category/:id" element={
          <div class="container-fluid">
            <div class="row">
              <SideNav />
              <EditCategory />
            </div>
          </div>
        } />
        
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
