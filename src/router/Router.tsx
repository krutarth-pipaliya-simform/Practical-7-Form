import { createBrowserRouter, redirect } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { ProtectedRouteWrapper } from "../components/ProtectedRouteWrapper";
import { Redirector } from "../components/Redirector";

export const Router = createBrowserRouter([
    {
        path: "/",
        loader: () => redirect("/profile"),
    },
    {
        element: <ProtectedRouteWrapper />,
        children: [
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        element: <Redirector />,
        children: [
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);
