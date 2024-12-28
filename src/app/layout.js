"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import theme from "../theme";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderAndFooterOn = ["/pages/login", "/pages/register"];

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ChakraProvider theme={theme}>
          {!hideHeaderAndFooterOn.includes(pathname) && <Header />}

          {children}

          {!hideHeaderAndFooterOn.includes(pathname) && <Footer />}
        </ChakraProvider>
      </body>
    </html>
  );
}
