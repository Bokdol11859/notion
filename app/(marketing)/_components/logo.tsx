import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <div className=" flex items-center gap-x-2">
      <Image src="/logo-dark.png" height={40} width={40} alt="Logo" />
      <p className={cn("font-semibold")}>Notion</p>
    </div>
  );
};

export default Logo;
