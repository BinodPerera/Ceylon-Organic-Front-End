import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

import './register.css';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }else{
            const response = await registerUser(username, email, password);
            if (response.token) {
                navigate("/dashboard");
            } else {
                alert( response.message || "Registration failed. Please try again.");
            }
        }

        
    }

    return (
        <div class="register-container">
            <h2 className="text-center">Create Account</h2>
            <form onSubmit={handleRegister}>
                <div class="mb-3 mt-3">
                    <input 
                        type="text" 
                        className="form-control mb-2" 
                        placeholder="Enter Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                <div class="mb-3">
                    <input 
                        type="password" 
                        className="form-control mb-2"  
                        placeholder="Enter confirm password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
            <button type="submit" className="submit-btn">Create Account</button>
            </form>
            <p>Alredy have Account? <a href="/login">Sign in</a></p>
        </div>
    );
}

export default Register;