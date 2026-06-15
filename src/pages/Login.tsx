import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { logInSchema, type LogInFormDataType } from "../schema/logInSchema";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInFormDataType>({
        resolver: zodResolver(logInSchema),
    });
    const navigate = useNavigate();

    return (
        <form
            className="p-4 mx-auto max-w-1/2 flex flex-col gap-6 border rounded-lg"
            onSubmit={handleSubmit((data) => {
                const localData = localStorage.getItem("signUpData");
                const signUpData = JSON.parse(localData ?? " ");

                if (signUpData?.email === data.email && signUpData?.password === data.password) {
                    localStorage.setItem("isLoggedIn", "true");
                    navigate("/profile");
                }
            })}
        >
            <h1 className="text-3xl text-center">Log In</h1>

            <TextField id="email" label="E-mail" variant="outlined" {...register("email")} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                {...register("password")}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <Link to="/signup" className="underline text-blue-400">
                Not a member? Sign Up here
            </Link>

            <Button type="submit" variant="contained">
                Log In
            </Button>
        </form>
    );
};
