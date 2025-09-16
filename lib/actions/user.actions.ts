'use server'
import { signUpFormSchema } from "../validators"
import { signInFormSchema } from "../validators"
import { signIn, signOut } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { prisma } from "@/db/prisma"
import { hashSync } from "bcrypt-ts-edge"
import { formatError } from "@/lib/utils"
 
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

// Sign up user
export async function signUpUser(prevState: unknown, formData: FormData){
    try {
        const user = signUpFormSchema.parse({
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        });

        const plainPassword = user.password;

        user.password = hashSync(user.password, 10);

        await prisma.user.create({
            data:{
                name: user.name,
                email: user.email,
                password: user.password,
            },

        });

        await signIn('credentials',{
            email: user.email,
            password: plainPassword,
        })

        // You can add your user creation logic here, for now just return success
        return { success: true, message: "Whey-hey! Sign up successful!"};
    } catch (error) {
        if (isRedirectError(error)){
        throw error;
        }
        return { success: false, message: formatError(error) };
    }
}