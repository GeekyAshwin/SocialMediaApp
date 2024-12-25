import z from "zod";

const registerValidation = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    username: z.string().min(3, "Username must be at least 3 characters long"),
    name: z.string().min(1, "Name is required"),
});

export default registerValidation;