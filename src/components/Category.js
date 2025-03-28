import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

import "./Category.css";

function Category(){

    const [ categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response);
        // console.log(response);
    };

    return(
        <section className="pb-5">
          <div className="container-lg">

            <div className="row">
              <div className="col-md-12">

                <div className="section-header d-flex flex-wrap justify-content-between my-4">
                  
                  <h2 className="section-title">Categories</h2>
                  
                </div>
                
              </div>
            </div>
            
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
              {categories.map((category, index) => (
                <li key={category._id} style={{listStyleType: "none"}}>
                  <a href={`/products/${category._id}`} style={{ textDecoration: "none" }}>
                    <div className="col">
                      <div className="product-item">
                        <figure>
                          <img src={`https://ceylon-organic-back-end-production.up.railway.app/${category.image}`} style={{height: "150px", borderRadius: "50%"}} alt="Product Thumbnail" className="category-card-img" />
                        </figure>
                        <div className="d-flex flex-column text-center">
                          <h3 className="category-title">{category.name}</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </div>
            </div>
          </div>
        </section>
    );
}

export default Category;