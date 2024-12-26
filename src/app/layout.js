"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import theme from "../theme";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderOn = ["/login", "/register"];

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ChakraProvider theme={theme}>
          {!hideHeaderOn.includes(pathname) && <Header />}
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
