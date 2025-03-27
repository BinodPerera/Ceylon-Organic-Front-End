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

    const handleChange = (e) => {
        if(e.target.name === "image") {
            setFormData({...formData, image: e.target.files[0]});
        }
        else {
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("price", formData.price);
        if(formData.image instanceof File){
            formDataToSend.append("image", formData.image);
        }

        try {
            await updateProduct(id, formDataToSend);
            alert("Product updated successfully");
        }
        catch (error){
            alert(error);
        }
    }
    
    return (
        <div className="col-sm p-3 min-vh-100">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control mb-2" required />
                </div>
                <div className="mb-3 mt-3">
                    <input type="file" name="image" onChange={handleChange} className="form-control mb-2" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="category">Select Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="form-control mb-2" required>
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="description">Enter Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="form-control mb-2" rows={5} required></textarea>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="price">Enter Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control mb-2" required />
                </div>
                <div className="mb-3 mt-3">
                <button type="submit" className="btn btn-success w-50">Update</button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;