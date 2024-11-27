import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have Metamask installed!");
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const fetchTransactions = async () => {
    const dummyTransactions = [
      { id: 1, from: "0xabc...", to: "0xdef...", amount: "1 ETH", timestamp: "2024-11-27" },
      { id: 2, from: "0xghi...", to: "0xjkl...", amount: "2 ETH", timestamp: "2024-11-26" },
    ];

    setTransactions(dummyTransactions);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        currentAccount,
        connectWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
