import { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../../services/categoryService";
import { getProfile} from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const result = await getProfile();
            if (result.error){
                navigate("/login");
            }
        };
        fetchProfile();
        fetchCategories();
    }, [navigate]);

    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            await deleteCategory(id);
            fetchCategories(); // Refresh category list
        }
    };

    return (
        <div class="col-sm p-3 min-vh-100">
            <h2>Category Dashboard</h2>
            <button onClick={() => navigate("/add-category")} className="btn btn-primary">Add Category</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category._id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td><img src={`http://localhost:5001/${category.image}`} width="50" alt={category.name} /></td>
                            <td>
                                <button onClick={() => navigate(`/edit-category/${category._id}`)} className="btn btn-warning">Edit</button>
                                <button onClick={() => handleDelete(category._id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
