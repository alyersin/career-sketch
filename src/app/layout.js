"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation"; // Import usePathname
import theme from "../theme";
import Header from "@/Components/Header/Header";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  // Define the pages where the header should NOT be displayed
  const hideHeaderOn = ["/pages/login", "/register"]; // Add paths here

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ChakraProvider theme={theme}>
          {/* Conditionally render the Header */}
          {!hideHeaderOn.includes(pathname) && <Header />}
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
