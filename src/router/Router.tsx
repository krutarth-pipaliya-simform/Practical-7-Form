import { createBrowserRouter } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Router = createBrowserRouter([
    {
        index: true,
        element: <Home />,
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
        path: "/Profile",
        element: <Profile />,
    },
]);
