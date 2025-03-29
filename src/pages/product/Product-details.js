import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductsById } from "../../services/productService";

import "./Product-details.css";

const ProductDetails = () => {

    const { product_id } = useParams();



    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const data = await getProductsById(product_id);
                setProduct(data);
            }
            catch (error){
                console.log(error);
            }
        }
        fetchProductDetails();
    }, [product_id]);

    return (
        <div className="item-details-container">
        {
            !product ? <h1>Loading..!</h1> :
            <div className="row">
                <div className="col-md-6">
                    <img src={`${process.env.REACT_APP_API_URL}/${product.image}`} alt="Product Thumbnail" className="product-img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Price: ${product.price}</p>
                    <p className="product-category">Category: {product.category}</p>
                    <br />
                    <button className="btn btn-secondary">Add to Cart</button>
                </div>
            </div>

        }
        </div>
    );
};

export default ProductDetails;
