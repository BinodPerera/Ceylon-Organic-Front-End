import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { getCategories } from "../../services/categoryService";
import { getProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [categories, setCategories] = useState({});

    useEffect(() => {
        fetchProducts();
        const fetchProfile = async () => {
            const result = await getProfile();
            if (result.error){
                navigate("/login");
            }
        };
        fetchProfile();
        fetchCategories();
    }, [navigate]);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const fetchCategories = async () => {
        const data = await getCategories();
        
        const categoriesMap = {};
        data.forEach(category => {
            categoriesMap[category._id] = category.name;
        });
        setCategories(categoriesMap);
    }

    const getCategoryName = (id) => {
        return categories[id] || "";
    }

    

    return (
        <div class="col-sm p-3 min-vh-100">
            <h2>Product Dashboard</h2>
            <button onClick={() => navigate("/add-product")} className="btn btn-primary">Add Product</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price(Rs)</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { products ? (
                    products.map(product => (
                        
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{getCategoryName(product.category)}</td>
                            <td><img src={`${process.env.REACT_APP_API_URL}/${product.image}`} width="50" alt={product.name} /></td>
                            <td>
                                <button onClick={() => navigate(`/edit-product/${product._id}`)} className="btn btn-warning">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        
                    ))
                ) : (
                    <p>Loading..!</p>
                ) }
                </tbody>
            </table>
        </div>
    )
};

export default Dashboard;