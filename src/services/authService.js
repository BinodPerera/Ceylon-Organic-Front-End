
const API_URL = "https://ceylon-organic-back-end-production.up.railway.app/api/auth";
// const API_URL = "http://localhost:5001/api/auth";

export const loginUser = async ( email, password) => {
    try {
        const response = await fetch( `${API_URL}/login`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include" // ✅ Important to send & receive cookies
        });

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error: ", error);
        return { error: "Something went wrong" };
    }
};

export const getProfile = async () => {
    try {
        const response = await fetch(`${API_URL}/profile`, {
            method: "GET",
            credentials: "include", // ✅ Required to send cookies
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error: ", error);
        return { error: "Something went wrong. Cannot access your profile" };
    }
};

export const registerUser = async ( username, email, password) => {
    console.log(username);
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, email, password }),
            credentials: "include" // ✅ Important to send & receive cookies
        });

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error: ", error);
        return { error: "Something went wrong registering the user" };
    }
}

export const logoutUser = async () => {
    try {
        const response = await fetch(`${API_URL}/logout`, {
            method: "POST",
            credentials: "include", // ✅ Important for sending cookies
        });

        if (!response.ok) {
            throw new Error("Logout failed!");
        }

        return { message: "Logged out successfully!" };
    } catch (error) {
        console.error("Error:", error);
        return { error: "Something went wrong while logging out." };
    }
};

