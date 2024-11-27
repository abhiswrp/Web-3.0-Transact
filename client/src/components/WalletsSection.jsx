import { useEffect, useState } from 'react';

const WalletsSection = () => {
  const [wallets, setWallets] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchWalletData();
    fetchTransactionHistory();
  }, []);

  const fetchWalletData = async () => {
    const mockWallets = [
      { address: '0x123...', balance: '1.5 ETH' },
      { address: '0x456...', balance: '2.1 ETH' },
    ];
    setWallets(mockWallets);
  };

  const fetchTransactionHistory = async () => {
    const mockTransactions = [
      { hash: '0x789...', amount: '0.5 ETH', date: '2024-10-20' },
      { hash: '0xabc...', amount: '1.2 ETH', date: '2024-10-19' },
    ];
    setTransactions(mockTransactions);
  };

  return (
    <div className="wallets-section">
      <h3 className="text-lg font-bold mb-2">Connected Wallets</h3>
      {wallets.length === 0 ? (
        <p>No wallets connected</p>
      ) : (
        wallets.map((wallet, index) => (
          <div key={index} className="wallet bg-gray-700 p-2 rounded-md mb-2">
            <p>Address: {wallet.address}</p>
            <p>Balance: {wallet.balance}</p>
          </div>
        ))
      )}
      <h3 className="text-lg font-bold mt-4 mb-2">Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        transactions.map((transaction, index) => (
          <div
            key={index}
            className="transaction bg-gray-700 p-2 rounded-md mb-2"
          >
            <p>Transaction Hash: {transaction.hash}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default WalletsSection;
