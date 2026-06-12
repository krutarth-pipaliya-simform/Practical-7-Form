import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();
    if (localStorage.getItem("isLoggedIn") !== "true") navigate("/signup");
    return <div>Profile</div>;
};
