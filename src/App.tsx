import React from 'react';
import {HomePage} from "./pages/HomePage/HomePage";
import {HackWebProviders} from "./providers/HackWebProviders";
import {ChakraProvider, theme} from "@chakra-ui/react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";

export const App = () => {
  return (
      <Router>
        <HackWebProviders>
          <ChakraProvider theme={theme}>

            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route index element={<Navigate to="dishes" />} />
              </Route>
            </Routes>

          </ChakraProvider>
        </HackWebProviders>
      </Router>
  );
}
