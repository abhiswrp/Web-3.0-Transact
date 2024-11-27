import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Footer from './components/Footer';
import Wallets from './components/Wallets';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Wallets />
      <Footer />
    </div>
  );
};

export default App;
