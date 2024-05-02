import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#16161D",
    800: "#1A202C",
    700: "#2D3748",
  },
  background: {
    50: "#171923",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "brand.800",
          color: "white",
          _hover: {
            bg: "brand.700",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
