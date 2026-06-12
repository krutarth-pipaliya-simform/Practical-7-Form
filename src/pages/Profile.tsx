import { Navigate } from "react-router-dom";

export const Profile = () => {
    if (!isLoggedIn()) return <Navigate to={"/signup"} />;
    return <div>Profile</div>;
};

const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
};
