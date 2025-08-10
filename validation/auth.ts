import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type SignInInput = z.infer<typeof signInSchema>;

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(6),
});

export type RegisterIput = z.infer<typeof registerSchema>;
