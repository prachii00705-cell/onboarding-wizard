import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .email("Enter a valid email address"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});

export const accountSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters"),
});