"use client";

import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const Heading = React.memo(() => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unified.
        <br />
        Welcome to <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Notion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading ? (
        <div className="flex w-full items-center justify-center">
          <Spinner />
        </div>
      ) : isAuthenticated && !isLoading ? (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Notion
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <SignInButton mode="modal">
          <Button size={"sm"}>
            Enter Notion <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
});

export default Heading;
