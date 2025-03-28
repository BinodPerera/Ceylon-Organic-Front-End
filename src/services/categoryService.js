const API_URL = "https://ceylon-organic-back-end-production.up.railway.app/api/category";
// const API_URL = "http://localhost:5001/api/category";

// ✅ Get All Categories
export const getCategories = async () => {
    try {
        const response = await fetch(API_URL, { credentials: "include" });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return Array.isArray(data) ? data : []; // ✅ Ensure it's an array
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // ✅ Return empty array to prevent `.map()` errors
    }
};

// ✅ Get Category by ID
export const getCategoryById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { credentials: "include" });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching category:", error);
        return null; // ✅ Return `null` to avoid breaking UI
    }
};

// ✅ Create New Category (with Image)
export const createCategory = async (formData) => {
    //console.log(formData);
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            credentials: "include",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating category:", error);
        return { error: "Something went wrong." };
    }
};

// ✅ Update Category
export const updateCategory = async (id, formData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            credentials: "include",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating category:", error);
        return { error: "Something went wrong." };
    }
};

// ✅ Delete Category
export const deleteCategory = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error deleting category:", error);
        return { error: "Something went wrong." };
    }
};
