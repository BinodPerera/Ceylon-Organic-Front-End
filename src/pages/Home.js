import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

// importing components
import Category from "../components/Category";

import "./Home.css";

function Home(){

    document.title = "Home - Organic Foods";

    const [products, setProducts] = useState([]);
      
      useEffect(() => {
        fetchProducts();
    
        const intervalId = setInterval(() => {
          fetchProducts();
        }, 10000);
    
        return () => clearInterval(intervalId);
      }, []);
      
      // Fetch products
      const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response);
        // console.log(response);
      }
    
    return (
        <div>
            <section style={{backgroundImage: "url('assets/images/banner-ad-4.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="container-lg">
                    <div className="row">
                    <div className="col-lg-6 pt-5 mt-5">
                        <h2 className="carousel-text-heading">Fresh Organics in Sri Lanka</h2>
                        <p className="carousel-text-secondary-heading">We will provide fresh organics to your doorstep!</p>
                        <div className="d-flex gap-3">
                        <a href="/products" className="btn btn-primary bg-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">View Store</a>
                        <a href="/contact" className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Contact us</a>
                        </div>
                        <div className="row my-5">
                        
                        </div>
                    </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
                        <div className="col">
                            <div className="card border-0 bg-primary rounded-0 p-4 text-light">
                            <div className="row">
                                <div className="col-md-3 text-center">
                                <svg width="60" height="60"><use xlinkHref="#fresh"></use></svg>
                                </div>
                                <div className="col-md-9">
                                <div className="card-body p-0">
                                    <h5 className="text-light">Fresh from farm</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-secondary rounded-0 p-4 text-light">
                            <div className="row">
                                <div className="col-md-3 text-center">
                                <svg width="60" height="60"><use xlinkHref="#organic"></use></svg>
                                </div>
                                <div className="col-md-9">
                                <div className="card-body p-0">
                                    <h5 className="text-light">100% Organic</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-danger rounded-0 p-4 text-light">
                            <div className="row">
                                <div className="col-md-3 text-center">
                                <svg width="60" height="60"><use xlinkHref="#delivery"></use></svg>
                                </div>
                                <div className="col-md-9">
                                <div className="card-body p-0">
                                    <h5 className="text-light">Free delivery</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>

            <Category />

            <section className="pb-5">
            <div className="container-lg">

                <div className="row">
                <div className="col-md-12">

                    <div className="section-header d-flex flex-wrap justify-content-between my-4">
                    
                    <h2 className="section-title">Products</h2>
                    
                    </div>
                    
                </div>
                </div>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {products.map((product, index) => (
                    <li key={product._id} style={{listStyleType: "none"}}>
                        <div className="col">
                            <div className="product-item">
                                <figure>
                                <a href={`/product-details/${product._id}`} title="Product Title">
                                    <img src={`https://ceylon-organic-back-end-production.up.railway.app/${product.image}`} alt="Product Thumbnail" className="tab-image" />
                                </a>
                                </figure>
                                <div className="d-flex flex-column text-center">
                                    <h3 className="fs-6 fw-normal">{product.name}</h3>
                                    <div>
                                        <span className="rating">
                                        <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                                        <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                                        <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                                        <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                                        <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                                        </span>
                                        <span>(41)</span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <del>${product.price}</del>
                                        <span className="text-dark fw-semibold">${product.price - (product.price)*0.01}</span>
                                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                    </div>
                                    <div className="button-area p-3 pt-0">
                                        <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                </div>
            </div>
            </section>

        </div>
    );
}

export default Home;