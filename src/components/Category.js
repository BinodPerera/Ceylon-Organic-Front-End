import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

import "./Category.css";

function Category(){

    const [ categories, setCategories] = useState([]);
    const [ alertError, setErrorAlert ] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await getCategories();
        if(response !== false){
          setCategories(response);
        }else{
          setErrorAlert(true);
          setCategories([]); // Clear categories if fetch fails
        }
        
    };

    return(
        <section className="pb-5">
          <div className="container-lg">

            <div className="row">
              <div className="col-md-12">

                <div className="section-header d-flex flex-wrap justify-content-between my-4">
                  
                  <h2 className="section-title">Our Product Categories</h2>
                  
                </div>
                
              </div>
            </div>

            {alertError && (
              <div className="alert alert-danger" role="alert">
                <b>Sorry!</b> <br/>
                Failed to load categories. Please try again later. <br/>
                <i><span>Reason: API not Alive</span></i>
              </div>
            )}
            
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
              {categories.map((category, index) => (
                <li key={category._id} style={{listStyleType: "none"}}>
                  <a href={`/products/category/${category._id}`} style={{ textDecoration: "none" }}>
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