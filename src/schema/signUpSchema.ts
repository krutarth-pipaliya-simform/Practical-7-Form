import z from "zod";

export const signUpSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    city: z.string(),
    state: z.string(),
    address: z.string(),
    gender: z.enum(["male", "female"]),
    contactNumber: z.string().length(10),
    profileImageLink: z.url(),
    birthDate: z.string(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(32, { message: "Password cannot exceed 32 characters." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must contain at least one special character.",
        }),
});

export type SignupFormDataType = z.infer<typeof signUpSchema>;
