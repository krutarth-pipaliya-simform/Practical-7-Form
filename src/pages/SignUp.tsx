import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema, type SignupFormDataType } from "../schema/signUpSchema";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormDataType>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { birthDate: "1947-08-15" },
    });
    const navigate = useNavigate();

    return (
        <form
            onSubmit={handleSubmit((data) => {
                localStorage.setItem("signUpData", JSON.stringify(data));
                navigate("/login");
            })}
            className="p-4 mx-auto max-w-1/2 flex flex-col gap-6 border rounded-lg"
        >
            <h1 className="text-3xl text-center">Sign Up</h1>

            <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                {...register("firstName")}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

            <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                {...register("lastName")}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

            <TextField id="email" label="E-mail" variant="outlined" {...register("email")} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <TextField id="city" label="City" variant="outlined" {...register("city")} />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}

            <TextField id="state" label="State" variant="outlined" {...register("state")} />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}

            <TextField id="address" label="Address" variant="outlined" {...register("address")} />
            {errors.address && <p className="text-red-500">{errors.address.message}</p>}

            <TextField id="age" label="Age" type="number" variant="outlined" {...register("age")} />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}

            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup row>
                    <FormControlLabel
                        name="gender"
                        value="male"
                        control={<Radio {...register("gender")} />}
                        label="Male"
                    />
                    <FormControlLabel
                        name="gender"
                        value="female"
                        control={<Radio {...register("gender")} />}
                        label="Female"
                    />
                    <FormControlLabel
                        name="gender"
                        value="other"
                        control={<Radio {...register("gender")} />}
                        label="Other"
                    />
                </RadioGroup>
            </FormControl>
            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}

            <TextField
                id="contactNumber"
                label="Contact Number"
                type="number"
                variant="outlined"
                {...register("contactNumber")}
            />
            {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>}

            <TextField
                id="profileImageLink"
                label="Profile Image Link"
                type="text"
                variant="outlined"
                {...register("profileImageLink")}
            />
            {errors.profileImageLink && (
                <p className="text-red-500">{errors.profileImageLink.message}</p>
            )}

            <TextField
                id="birthDate"
                label="Birth date"
                type="date"
                variant="outlined"
                {...register("birthDate")}
            />
            {errors.birthDate && <p className="text-red-500">{errors.birthDate.message}</p>}

            <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                {...register("password")}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <TextField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <FormControlLabel
                control={<Checkbox {...register("agreeTerms")} />}
                label="Agree to our terms"
            />
            {errors.agreeTerms && <p className="text-red-500">{errors.agreeTerms.message}</p>}

            <Link to="/login" className="underline text-blue-400">
                Already a member? Login here
            </Link>

            <Button type="submit" variant="contained">
                Sign Up
            </Button>
        </form>
    );
};
