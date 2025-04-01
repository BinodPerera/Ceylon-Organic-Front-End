import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    if(!token) {
        return <Navigate to={'/login'} />
    }
    else{
        return <Outlet />
    }
}

export default ProtectedRoute;
// This component checks if the user is authenticated by checking for a token in localStorage.
// If the token is not present, it redirects the user to the login page.
// If the token is present, it renders the child components using <Outlet />.
// This is useful for protecting routes that should only be accessible to authenticated users.