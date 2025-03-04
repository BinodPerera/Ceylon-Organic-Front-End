import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

import "./Category.css";

function Category(){

    const [ categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    });

    const fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response);
    }

    return(
        <section class="pb-5">
          <div class="container-lg">

            <div class="row">
              <div class="col-md-12">

                <div class="section-header d-flex flex-wrap justify-content-between my-4">
                  
                  <h2 class="section-title">Categories</h2>
                  
                </div>
                
              </div>
            </div>
            
            <div class="card-container">
              {categories.map((category, index) => (
                <a href="">
                <div class="col">
              <div class="product-item">
                <figure>
                  <a href="index.html" title="Product Title">
                    <img src={`http://localhost:5001/${category.image}`} style={{height: "150px", borderRadius: "50%"}} alt="Product Thumbnail" class="tab-image" />
                  </a>
                </figure>
                <div class="d-flex flex-column text-center">
                  <h3 class="fs-6 fw-normal">{category.name}</h3>
                </div>
              </div>
            </div>
                </a>
              ))}
            </div>
          </div>
        </section>
    );
}

export default Category;