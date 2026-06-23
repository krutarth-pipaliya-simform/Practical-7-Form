import { Navigate, Outlet } from "react-router-dom";

export const Redirector = () => {
    if (localStorage.getItem("isLoggedIn") === "true") return <Navigate to="/profile" />;

    return <Outlet />;
};
