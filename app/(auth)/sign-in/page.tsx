import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import CredentialsSignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();
  if (session) {
    return redirect(callbackUrl || "/");
  }

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
          {/* Left: Branding & Welcome Back - First on mobile */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Welcome Back
                </span>
                <br />
                <span className="text-foreground">to Your Collection</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
                Continue exploring our curated selection of premium cheese
                boards, artisan knives, and specialty tools.
              </p>
            </div>

            {/* Recent additions - Hidden on mobile */}
            <div className="hidden lg:block space-y-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                New This Season
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">
                    Japanese Steel Cheese Knives
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">
                    Acacia Wood Serving Boards
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">
                    Professional Wire Cheese Slicers
                  </span>
                </div>
              </div>
            </div>

            {/* Customer testimonial - Hidden on mobile */}
            <div className="hidden lg:block border-l-2 border-primary/20 pl-4 italic text-sm text-muted-foreground max-w-md">
              {
                "The quality of their cheese tools is exceptional. My charcuterie boards have never looked better!"
              }
              <div className="not-italic mt-2 text-xs">
                — Sarah M., Verified Buyer
              </div>
            </div>
          </div>

          {/* Right: Form - Second on mobile */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <Card className="border-border/50 backdrop-blur-sm bg-card/95 shadow-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="mb-6 text-center lg:text-left">
                  <h2 className="text-2xl font-semibold tracking-tight mb-2">
                    Sign in to your account
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Access your orders, wishlist, and exclusive member offers
                  </p>
                </div>
                <CredentialsSignInForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
