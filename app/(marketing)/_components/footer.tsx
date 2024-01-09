import React from "react";

import { Button } from "@/components/ui/button";

import Logo from "./logo";

const Footer = () => {
  return (
    <div className="z-50 flex w-full items-center justify-between bg-background p-6 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="flex w-full items-center justify-end gap-x-2 text-muted-foreground md:ml-auto">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
