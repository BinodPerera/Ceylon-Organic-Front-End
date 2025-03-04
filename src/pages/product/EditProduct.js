import { useEffect, useState } from "react";
import { getProductsById, updateProduct } from "../../services/productService";
import { getProfile } from "../../services/authService";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../services/categoryService";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({ name: "", description: "", category: "", image: null, price: ""});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const data = await getProductsById(id);
                setFormData({ name: data.name, description: data.description, category: data.category, image: data.image, price: data.price });
            }
            catch (error){
                alert(error);
            }
        }
        

        const isLogged = async () => {
            const result = await getProfile();
            if(result.error){
                navigate('/login');
            }
        }

        fetchProductDetails();
        isLogged();
    }, [id, navigate]);

    const fetchCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    }
    fetchCategories();
    
    return (
        <div class="col-sm p-3 min-vh-100">
            <h2>Edit Product</h2>
            <form>
                <div class="mb-3 mt-3">
                    <input type="text" name="name" value={formData.name} className="form-control mb-2" required />
                </div>
                <div class="mb-3 mt-3">
                    <input type="file" name="image" className="form-control mb-2" />
                </div>
                <div class="mb-3 mt-3">
                    <label for="category">Select Category</label>
                    <select name="category" value={formData.category} className="form-control mb-2" required>
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div class="mb-3 mt-3">
                    <label for="description">Enter Description</label>
                    <textarea name="description" value={formData.description} className="form-control mb-2" rows={5} required></textarea>
                </div>
                <div class="mb-3 mt-3">
                    <label for="price">Enter Price</label>
                    <input type="number" name="name" value={formData.price} className="form-control mb-2" required />
                </div>
                <div class="mb-3 mt-3">
                <button type="submit" className="btn btn-success w-50">Update</button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;