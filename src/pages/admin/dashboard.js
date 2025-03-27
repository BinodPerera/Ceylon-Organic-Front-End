import { useEffect, useState } from "react";
import { getProfile, logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null); // Initialize as `null`
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const result = await getProfile();
            if (result.error) {
                navigate("/login"); // Redirect if not authenticated
            } else {
                setUser(result);
            }
        };
        fetchProfile();

    }, [navigate]);

    // ✅ Move handleLogout outside useEffect
    const handleLogout = async () => {
        const result = await logoutUser();
        if (result.message) {
            console.log(result.message);
            navigate("/login"); // Redirect to login after logout
        } else {
            console.error(result.error);
        }
    };

    return (
        
                <div className="col-sm p-3 min-vh-100">
                <h2>Welcome to Dashboard</h2>
                {user ? (
                    <div>
                        <p>
                            Name: {user.username}{" "}
                            {user.role >= 0 ? (
                                <span className="badge bg-secondary">Admin</span>
                            ) : (
                                <span className="badge bg-secondary">User</span>
                            )}
                        </p>
                        <p>Email: {user.email}</p>
                        <p>
                            <button onClick={handleLogout} type="button" className="btn btn-danger">
                                Logout
                            </button>
                        </p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                </div>
    );
};

export default Dashboard;
