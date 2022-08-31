import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import {HackWebProviders} from "../../providers/HackWebProviders";
import {ProductCard} from "../../common/components/itemCard";
import {Home} from "../Home";
import {LandingPage} from "../LandingPage";

export const HomePage = () => {
    return (
        <HackWebProviders>
            <ChakraProvider theme={theme}>
                <Home/>
                <LandingPage/>
            </ChakraProvider>
        </HackWebProviders>
    );
}
