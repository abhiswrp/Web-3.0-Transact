import React, { useEffect, useState } from 'react';

const Wallets = () => {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added state to track errors

  const fetchWallets = async () => {
    try {
      const response = await fetch('https://your-backend-url.com/api/wallets');
      if (!response.ok) {
        throw new Error('Failed to fetch wallets');
      }
      const data = await response.json();
      setWallets(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
      setError(error.message); // Set the error message
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  return (
    <div className="wallets-container">
      <h2>Connected Wallets</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
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
