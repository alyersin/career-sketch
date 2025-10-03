import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Roboto Slab', serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    accent: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "12px",
        transition: "all 0.3s ease",
      },
      variants: {
        solid: {
          _hover: {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          },
        },
        outline: {
          _hover: {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        lineHeight: "1.2",
      },
    },
    Text: {
      baseStyle: {
        lineHeight: "1.6",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

export default theme;
