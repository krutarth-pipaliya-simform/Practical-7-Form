import { Navigate } from "react-router-dom";

export const Redirector = () => {
    if (localStorage.getItem("isLoggedIn") === "true") <Navigate to={"/profile"} />;
    return <Navigate to={"/signup"} />;
};
