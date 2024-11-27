import React, { useEffect, useState } from 'react';

const Wallets = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchWallets = async () => {
    try {
      const response = await fetch('https://your-backend-url.com/api/wallets');
      const data = await response.json();
      setWallets(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  return (
    <div>
      <h2>Connected Wallets</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {wallets.map((wallet, index) => (
            <li key={index}>
              <p>Address: {wallet.address}</p>
              <p>Balance: {wallet.balance}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wallets;
