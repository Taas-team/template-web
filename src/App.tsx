import React from 'react';
import { Home } from './pages/Home';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HackWebProviders } from './providers/HackWebProviders';
import {ProductCard} from "./common/components/itemCard";
import {itemList} from "./common/components/Item";

export const App = () => {
  return (
    <HackWebProviders>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </HackWebProviders>
  );
}
