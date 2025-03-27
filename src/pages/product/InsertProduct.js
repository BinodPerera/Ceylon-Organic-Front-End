import React, { useState, useEffect } from "react";
//import axios from "axios";  // reason: to make HTTP requests
import { insertProduct } from "../../services/productService";
import { getProfile } from "../../services/authService";
import { getCategories } from "../../services/categoryService";
import { useNavigate } from "react-router-dom";

const InsertProduct = () => {

  const [ name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  // check if user is logged in
  useEffect(() => {
    const fetchProfile = async () => {
      const result = await getProfile();
      if (result.error){
        navigate("/login");
      }
    };
    fetchProfile();
  }, [navigate]);

  // get all category id with names
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("description", description);
    formDataToSend.append("price", price);
    formDataToSend.append("category", category);
    formDataToSend.append("image", image);

    const response = await insertProduct(formDataToSend);
    alert(response.message);
  }

  return (
    <div className="col-sm p-3 min-vh-100">
      <h2 className="text-center">Insert Product</h2>

      {/* Form to Add Product */}
      <form onSubmit={handleSubmit} className="mb-4">
        
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="form-control mb-2" 
        />

        <textarea 
          name="description" 
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)} 
          required 
          className="form-control mb-2">
        </textarea>

        <input 
          type="number" 
          name="price" 
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)} 
          required 
          className="form-control mb-2" 
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          required
          className="form-control mb-2"
        >
          <option disabled>Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>

        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
          required 
          className="form-control mb-2" 
        />
        
        <button type="submit" className="btn btn-success w-50">Add Product</button>
        <button type="reset" className="btn btn-danger w-50">Clear</button>
        
      </form>
    </div>
  );
}

export default InsertProduct;
