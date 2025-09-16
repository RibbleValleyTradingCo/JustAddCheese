import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();
  if (session) return redirect(callbackUrl || "/");

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-muted/20 to-transparent" />
      </div>

      <div className="relative min-h-screen px-4 py-8 sm:py-12 lg:py-16">
        {/* Main container */}
        <div className="mx-auto w-full max-w-7xl grid gap-8 lg:grid-cols-2 lg:gap-16 items-center lg:items-start">
          {/* Left: Branding & Value Props - First on mobile, second on desktop */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Premium Tools
                </span>
                <br />
                <span className="text-foreground">for Cheese Lovers</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
                Discover artisan cheese boards, professional slicers, specialty
                knives, and everything you need for the perfect cheese
                experience.
              </p>
            </div>

            {/* Trust indicators - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-row gap-6 items-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>30-day returns</span>
              </div>
            </div>

            {/* Product categories - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-4 text-sm max-w-md">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">✓ Cheese Boards</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">✓ Cheese Knives</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">✓ Cheese Slicers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">✓ Serving Sets</span>
              </div>
            </div>
          </div>

          {/* Right: Form - Second on mobile, first on desktop */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <Card className="border-border/50 backdrop-blur-sm bg-card/95 shadow-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="mb-6 text-center lg:text-left">
                  <h2 className="text-2xl font-semibold tracking-tight mb-2">
                    Create your account
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Join our community of cheese enthusiasts
                  </p>
                </div>
                <SignUpForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
