import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../services/productService";
import { useParams } from "react-router-dom";
import { getCategories } from "../../services/categoryService";

// import css file
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const { category_id } = useParams();

  useEffect(() => {
    // Fetch products immediately when the component mounts
    fetchProducts();

    // Set up interval to fetch products every 10 seconds
    const intervalId = setInterval(() => {
      fetchProducts();
    }, 10000); // 10000 milliseconds = 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  // Fetch products
  const fetchProducts = async () => {
    const response = await getProducts();
    
    if(category_id){
      const response = await getProductsByCategory(category_id);
      setProducts(response);
    }
    else{
      const response = await getProducts();
      setProducts(response);
    }
  }

  // Fetch categories
  // const fetchCategories = async () => {
  //   const response = await getCategories();
    //console.log(response);
  // }

  return (
    <section className="pb-5">
      <div className="container-lg">

        <div className="row">
          <div className="col-md-12">

            <div className="section-header d-flex flex-wrap justify-content-between my-4">
              
              <h2 className="section-title">Products</h2>
              
            </div>
            
          </div>
        </div>
        
        {!products ? <h1>Loading..!</h1> :
          <div className="card-container">
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
        }
      </div>
    </section>
  );
}

export default Products;