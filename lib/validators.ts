import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
.string()
.refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    { message: 'Must be a valid currency format with two decimal places' }
);

// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(3, 'Category must be at least 3 characters long'),
    brand: z.string().min(3, 'Brand must be at least 3 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'At least one image URL is required'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
});

//Scheme for signing users in
export const signInFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});