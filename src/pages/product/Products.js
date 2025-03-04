import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/productService";
import { getCategories } from "../../services/categoryService";

// import css file
import "./Products.css";

function Products( ) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  });

  // Fetch products
  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  }

  // fetch categories
  const fetchCategories = async () => {
    const response = await getCategories();
    //console.log(response);
  }
  

    return (
        <section class="pb-5">
          <div class="container-lg">

            <div class="row">
              <div class="col-md-12">

                <div class="section-header d-flex flex-wrap justify-content-between my-4">
                  
                  <h2 class="section-title">Products</h2>
                  
                </div>
                
              </div>
            </div>
            
            <div class="card-container">
              {products.map((product, index) => (
              <div class="col">
              <div class="product-item">
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src={`http://localhost:5001/${product.image}`} alt="Product Thumbnail" class="tab-image" />
                  </a>
                </figure>
                <div class="d-flex flex-column text-center">
                  <h3 class="fs-6 fw-normal">{product.name}</h3>
                  <div>
                    <span class="rating">
                      <svg width="18" height="18" class="text-warning"><use xlinkHref="#star-full"></use></svg>
                      <svg width="18" height="18" class="text-warning"><use xlinkHref="#star-full"></use></svg>
                      <svg width="18" height="18" class="text-warning"><use xlinkHref="#star-full"></use></svg>
                      <svg width="18" height="18" class="text-warning"><use xlinkHref="#star-full"></use></svg>
                      <svg width="18" height="18" class="text-warning"><use xlinkHref="#star-half"></use></svg>
                    </span>
                    <span>(41)</span>
                  </div>
                  <div class="d-flex justify-content-center align-items-center gap-2">
                    <del>${product.price}</del>
                    <span class="text-dark fw-semibold">${product.price - (product.price)*0.01}</span>
                    <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                  </div>
                  <div class="button-area p-3 pt-0">
                    <div class="row g-1 mt-2">
                      <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1" /></div>
                      <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                      <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              ))}
            </div>
          </div>
        </section>
    );
}

export default Products;