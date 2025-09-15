'use server'

import { signInFormSchema } from "../validators"
import { signIn, signOut } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error"

//Sign in the user with credentials
export async function signInWithCredentials(
    prevState: unknown,
    formData: FormData
) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });
        //Sign in the user
        await signIn("credentials", user);

        return { success: true, message: 'Brie-lliant! You’re in.', user };

    } catch (error) {
        if (isRedirectError(error)) {
            //Handle redirect errors
            throw error;
        }
        return { success: false, message: 'Oh crumbly—those curd-entials didn’t match.' };
    }
}

//Sign out the user
export async function signOutUser() {
    await signOut();
}