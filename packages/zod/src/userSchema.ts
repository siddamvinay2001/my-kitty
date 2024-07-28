import { z } from 'zod';

export const phonenumberSchema = z
  .string()
  .regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
    message: 'Invalid phone number',
  });

export const emailSchema = z.string().email();

export const nameSchema = z
  .string()
  .max(32, { message: "Name shouldn't be more than 32 characters" });

export const passwordSchema = z
  .string()
  .min(6, { message: 'Password must be at least 6 characters long' })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number',
  });

export const loginSchema = z.object({
  username: z.union([emailSchema, phonenumberSchema]),
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    email: emailSchema.optional(),
    phoneNumber: phonenumberSchema.optional(),
    name: nameSchema,
    password: passwordSchema,
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: 'Either the phone number or email must be provided',
    path: ['email', 'phoneNumber'],
  });
