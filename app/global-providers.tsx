import React from "react";

import { ConvexClientProvider } from "@/providers/convex-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notion-theme-2"
        >
          {children}
        </ThemeProvider>
      </ConvexClientProvider>
    </>
  );
};

export default GlobalProviders;
