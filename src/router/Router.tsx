import { createBrowserRouter } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/SignUp";
import { Redirector } from "../pages/Redirector";
import { Login } from "../pages/Login";

export const Router = createBrowserRouter([
    {
        index: true,
        element: <Redirector />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);
