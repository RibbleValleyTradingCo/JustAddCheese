"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src="/logo.png"
        alt={`${APP_NAME} logo`}
        height={96}
        width={96}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold">Oh Cheezus...</h1>
        <p className="text-3xl font-bold">404</p>
        <p className="text-destructive mt-4">
          The page you are looking for does not exist.
        </p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
