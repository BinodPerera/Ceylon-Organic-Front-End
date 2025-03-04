import { useState } from 'react';
import { loginUser } from '../../services/authService';
import { useNavigate } from "react-router-dom"; // ✅ Import for redirection

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // ✅ Initialize useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await loginUser(email, password);
        if (response.token) { // ✅ If login is successful (token is received)
            navigate("/dashboard"); // 🔄 Redirect to profile page
        } else {
            setError(response.message || "Login failed. Please try again.");
        }
    };

    
    return (
        <div class="col-sm-8 p-5 text-white" style={{ backgroundColor: "purple" }}>
            <h2 className="text-center">Sign in</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div class="mb-3 mt-3">
                    <input 
                        type="email" 
                        className="form-control mb-2"  
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <input 
                        type="password" 
                        className="form-control mb-2"  
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            <p>Need to create Account? <a href="/register">Create Account</a></p>
        </div>
    );
}

export default Login;