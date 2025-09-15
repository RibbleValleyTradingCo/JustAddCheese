"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        disabled={pending}
        className="w-full h-11 text-base rounded-xl shadow-sm transition-shadow hover:shadow-md"
        variant="default"
      >
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form action={action} className="space-y-6 sm:space-y-7">
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-sm sm:text-base font-medium">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={signInDefaultValues.email}
          className="h-11 rounded-xl text-base"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password" className="text-sm sm:text-base font-medium">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="password"
          defaultValue={signInDefaultValues.password}
          className="h-11 rounded-xl text-base"
        />
      </div>

      <div className="space-y-4">
        <SignInButton />
      </div>

      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}

      <div className="border-t border-border/60 pt-4 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" target="_self" className="link">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
