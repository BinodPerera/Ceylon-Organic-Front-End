import { useState, useEffect } from "react";
import { createCategory } from "../../services/categoryService";
import { getProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {

    const [ name, setName] = useState("");
    const [ description, setDescription] = useState("");
    const [ image, setImage] = useState(null);
    const navigate = useNavigate();

    // check if user is logged in
    useEffect(() => {
        const fetchProfile = async () => {
            const result = await getProfile();
            if (result.error){
                navigate("/login");
            }
        };
        fetchProfile();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", name);
        formDataToSend.append("description", description);
        formDataToSend.append("image", image);

        const response = await createCategory(formDataToSend);
        alert(response.message);
        //navigate("/category");
    }

    return (
        <div class="col-sm p-3 min-vh-100">
            <h2 class="monomakh-regular">Add Category</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3 mt-3">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control mb-2"
                        placeholder="Category Name" 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>

                <div class="mb-3 mt-3">
                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        className="form-control mb-2"
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                    >
                    </textarea>
                </div>
                <div class="mb-3 mt-3">
                    <input 
                        type="file" 
                        name="image" 
                        className="form-control mb-2" 
                        onChange={(e) => setImage(e.target.files[0])} 
                        required 
                    />
                </div>
                
                <button type="submit" className="btn btn-success w-50">Add Product</button>
                <button type="reset" className="btn btn-danger w-50">Clear</button>
            </form>
        </div>
    );
};

export default AddCategory;
