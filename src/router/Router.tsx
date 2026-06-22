import { createBrowserRouter, redirect } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";

export const Router = createBrowserRouter([
    {
        path: "/signup",
        loader: () => {
            if (localStorage.getItem("isLoggedIn") === "true") return redirect("/profile");
        },
        element: <SignUp />,
    },
    {
        path: "/login",
        loader: () => {
            if (localStorage.getItem("isLoggedIn") === "true") return redirect("/profile");
        },
        element: <Login />,
    },
    {
        path: "/profile",
        loader: () => {
            if (localStorage.getItem("isLoggedIn") !== "true") return redirect("/signup");
        },
        element: <Profile />,
    },
]);
