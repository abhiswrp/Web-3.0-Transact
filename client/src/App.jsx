import React from 'react';
import { Navbar, Welcome, Services, Transactions, Footer } from './components';
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
