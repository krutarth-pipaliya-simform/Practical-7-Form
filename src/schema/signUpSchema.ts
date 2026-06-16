import z from "zod";

export const signUpSchema = z
    .object({
        firstName: z.string().min(1, { error: "Please fill this field" }),
        lastName: z.string().min(1, { error: "Please fill this field" }),
        email: z.email({ error: "Please enter a valid email" }),
        city: z.string().min(1, { error: "Please fill this field" }),
        state: z.string().min(1, { error: "Please fill this field" }),
        address: z.string().min(1, { error: "Please fill this field" }),
        age: z.string().min(1, { error: "Please fill this field" }),
        gender: z.enum(["male", "female", "other"], { error: "Please select the gender" }),
        contactNumber: z.string().length(10, { error: "Number should be exactly 10 numbers long" }),
        profileImageLink: z.url({ error: "Please enter a valid URL" }),
        birthDate: z.string({ error: "Please select a valid Date" }),
        password: z
            .string()
            .min(8, { error: "Password must be at least 8 characters long." })
            .max(32, { error: "Password cannot exceed 32 characters." })
            .regex(/[A-Z]/, { error: "Password must contain at least one uppercase letter." })
            .regex(/[a-z]/, { error: "Password must contain at least one lowercase letter." })
            .regex(/[0-9]/, { error: "Password must contain at least one number." })
            .regex(/[^A-Za-z0-9]/, {
                error: "Password must contain at least one special character.",
            }),
        confirmPassword: z.string(),
        agreeTerms: z.literal(true, { error: "Please agree to our terms" }),
    })
    .refine((data) => data.confirmPassword === data.password, {
        error: "Both passwords should match",
        path: ["confirmPassword"],
    });

export type SignupFormDataType = z.infer<typeof signUpSchema>;
