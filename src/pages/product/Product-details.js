import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails(){
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);

    const API_URL = `http://localhost:5001/api/products/${product_id}`;

    // getting item details
    useEffect(() => {
        axios.get(API_URL)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product data:', error));
    }, [API_URL]);

    if (!product) {
        return <div>Please wait! Loading...</div>;
    }

    return (
        <section>
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-6 pt-5 mt-5">
                        <h2 className="display-1 ls-1"><span className="fw-bold text-primary">{product.name}</span></h2>
                        <p className="fs-4">{product.description}</p>
                        <div className="d-flex gap-3">
                            <a href="/products" className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Buy Now</a>
                            <a href="#" className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Add to Cart</a>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-5 mt-5">
                        <div className="d-flex gap-3">
                            <img src={`assets/images/products/${product.image}`} style={{height: '300px'}} alt={product.name} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;