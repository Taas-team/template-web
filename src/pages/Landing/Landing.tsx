import React from 'react';
import { Banner, Navbar } from './components';
import Footer from './components/Footer';
import {AuthProvider} from "../../providers/AuthProvider";
import Features from "./components/Features";

export const Landing = () => (
  <AuthProvider>
    <Navbar />
    <Banner />
      <Features/>
    <Footer />
  </AuthProvider>
);
