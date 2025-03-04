import { useEffect, useState } from "react";
import { getCategoryById, updateCategory } from "../../services/categoryService";
import { getProfile} from "../../services/authService";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", description: "", image: null });

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const data = await getCategoryById(id);
                setFormData({ name: data.name, description: data.description, image: data.image });
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };
        fetchCategory();

        const isLogged = async () => {
            const result = await getProfile();
            if(result.error){
                navigate('/login');
            }
        }
        isLogged();
        
    }, [ id, navigate]); // ✅ Depend on `id` so it runs when `id` changes

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("description", formData.description);
        if (formData.image instanceof File) {
            formDataToSend.append("image", formData.image);
        }

        try {
            await updateCategory(id, formDataToSend);
            navigate("/dashboard");
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    return (
        <div class="col-sm p-3 min-vh-100">
            <h2>Edit Category</h2>
            <form onSubmit={handleSubmit}>
                
                <div class="mb-3 mt-3">
                    <input type="text" name="name" value={formData.name} className="form-control mb-2" onChange={handleChange} required />
                </div>
                <div class="mb-3 mt-3">
                    <input type="file" name="image" className="form-control mb-2" onChange={handleChange} />
                </div>
                <div class="mb-3 mt-3">
                    <textarea name="description" value={formData.description} className="form-control mb-2" rows={5} onChange={handleChange} required></textarea>
                </div>
                <div class="mb-3 mt-3">
                <button type="submit" className="btn btn-success w-50">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditCategory;
