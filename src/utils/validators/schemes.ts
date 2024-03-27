import { z } from 'zod'

export const schemaSignInData = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(3),
})

export type SignInData = z.infer<typeof schemaSignInData>

export const schemaSignUpData = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email('Invalid email address'),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignUpData = z.infer<typeof schemaSignUpData>
