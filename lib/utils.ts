import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T) : T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}

// Format errors
export function formatError(error: unknown): string {
  if (error instanceof ZodError) {
    // Handle Zod error - join with newline instead of period+space
    const fieldErrors = error.issues.map(err => err.message);
    return fieldErrors.join("\n");
  } else if (
    error instanceof Error &&
    'name' in error &&
    error.name === "PrismaClientKnownRequestError" && 
    'code' in error &&
    error.code === "P2002"
  ) {
    // Handle Prisma error - simple message without accessing meta
    return "An account with this email already exists. Please use a different email.";
  } else if (error instanceof Error) {
    // Handle other errors
    return error.message;
  } else {
    return "An error occurred";
  }
}