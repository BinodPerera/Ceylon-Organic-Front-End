const API_URL = `${process.env.REACT_APP_API_URL}/api/product`;
// const API_URL = "http://localhost:5001/api/product";

// send request to insert Product
export const insertProduct = async (formData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            credentials: "include",
            body: formData,
        });

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    }
    catch(error) {
        return { error: "Something went wrong." };
    }
};

// send request to get all products
export const getProducts = async () => {
    try {
        const response = await fetch(API_URL, { credentials: "include" });

        if(!response.ok) {
            throw new Error(`HTTP error! Status:: ${response.status}`);
        }
        const data = await response.json();
        return Array.isArray(data) ? data : []; // Ensure it's an array
    }
    catch (error) {
        console.error("Error fetching products:", error);
        return false;
    }
};

// send request to get product by id
export const getProductsById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        return null;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/product/category/${category}`);

        if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    }
    catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};


// send request to update product
export const updateProduct = async (id, formData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            credentials: "include",
            body: formData,
        });

        if(!response.ok) throw new Error(`Htto Error! Status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        return { error: "something went wrong!"};
    }
};

// send request to delete product 
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            credentials: "include"
        });

        if(!response) throw new Error(`Http error occured! status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        return { error: "Something went wrong!"};
    }
};

// send request to get product by search
export const getProductsBySearch = async (search) => {
    try {
        const response = await fetch(`${API_URL}/search/${search}`);

        if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        return [];
    }
};