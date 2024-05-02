import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Box as="header" bg="brand.900" p={4}>
        <Heading color="white" textAlign="center">
          MTV
        </Heading>
      </Box>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
