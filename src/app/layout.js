"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import theme from "../theme";
import Header from "@/Components/Header/Header";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderOn = ["/login", "/register"];

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ChakraProvider theme={theme}>
          {!hideHeaderOn.includes(pathname) && <Header />}
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
