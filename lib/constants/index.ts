export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Just Add Cheese';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Everything but the cheese — boards, tools, and accompaniments.';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT = Number(process.env.NEXT_PUBLIC_LATEST_PRODUCTS_LIMIT) || 8;

export const signInDefaultValues = {
  email: '',
  password: '',
};

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};