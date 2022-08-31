import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import {HackWebProviders} from "../../providers/HackWebProviders";
import {ProductCard} from "../../common/components/itemCard";
import {LandingPage} from "../LandingPage";
import Footer from "../Footer/Footer";
import {Navbar} from "../LandingPage/Navbar/Navbar";

export const HomePage = () => {
    return (
        <HackWebProviders>
            <ChakraProvider theme={theme}>
                <Navbar/>
                <LandingPage/>
                <Footer/>
            </ChakraProvider>
        </HackWebProviders>
    );
}
