import { Navigate, useNavigate } from "react-router-dom";

import { signUpSchema } from "../schema/signUpSchema";

export const Profile = () => {
    const navigate = useNavigate();

    const localData = localStorage.getItem("signUpData");
    const { success, data } = signUpSchema.safeParse(JSON.parse(localData ?? " "));
    // For case when data is tempered.
    if (!success) {
        alert("Data is tempered");
        return <Navigate to="/signup" />;
    }

    const {
        profileImageLink,
        firstName,
        lastName,
        email,
        contactNumber,
        address,
        age,
        city,
        state,
    } = data;

    return (
        <div>
            <div>
                <img src={profileImageLink} alt="Profile-picture" />
                <button
                    onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        navigate("/signup");
                    }}
                    className="bg-blue-400 rounded-full"
                >
                    Log Out
                </button>
            </div>
            <div>
                <span>{firstName + " "}</span>
                <span>{lastName + " "}</span>
                <span>{age} Years Old</span>
            </div>
            <div>{email}</div>
            <div>{contactNumber}</div>
            <div>{address}</div>
            <div>{city}</div>
            <div>{state}</div>
        </div>
    );
};
