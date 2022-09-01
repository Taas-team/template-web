import React from 'react';
import { Banner, Navbar } from './components';
import Footer from './components/Footer';
import {AuthProvider} from "../../providers/AuthProvider";

export const Landing = () => (
  <AuthProvider>
    <Navbar />
    <Banner />

    <Footer />
  </AuthProvider>
);
