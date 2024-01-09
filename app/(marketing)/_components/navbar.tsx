"use client";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Spinner } from "@/components/ui/spinner";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

import Logo from "./logo";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop(20);

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6  dark:bg-[#1F1F1F] ",
        scrolled && "border-b shadow-sm",
      )}
    >
      <div className="flex w-full items-center justify-between gap-x-2  text-black text-muted-foreground md:ml-auto dark:text-white">
        <Logo />
        <div className="mr-2 flex items-center">
          {isLoading && <Spinner className="mr-2" />}
          {!isAuthenticated && !isLoading && (
            <div className="mr-2 flex gap-2">
              <SignInButton mode="modal">
                <Button variant={"ghost"} size={"sm"}>
                  Log In
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size={"sm"}>Learn More</Button>
              </SignInButton>
            </div>
          )}
          {isAuthenticated && !isLoading && (
            <div className="mr-4 flex items-center gap-2">
              <Button variant={"ghost"} size={"sm"} asChild>
                <Link href={"/documents"}>Documents</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
