import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteWrapper = () => {
    if (localStorage.getItem("isLoggedIn") !== "true") return <Navigate to="/login" />;

    return <Outlet />;
};
