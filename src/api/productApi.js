import axios from "axios";

const API_URL = "http://localhost:5001/ceylone_organic/products";

export const getAllProducts = () => axios.get(API_URL);
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);
export const addProduct = (formData) => axios.post(API_URL, formData);
export const updateProduct = (id, formData) => axios.put(`${API_URL}/${id}`, formData);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
