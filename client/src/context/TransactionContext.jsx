// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ether';
// import { contractABI, contractAddress } from '../utils/constants';
// export const TransactionContext=React.createContext();
// const { ethereum }=window;
// const getEthereumContract=()=>{
//     const provider=new ethers.providers.Web3Provider(ethereum);
//     const signer=provider.getSigner();
//     const transactionContract=new ethers.Contract(contractAddress, contractABI, signer);
//     return transactionContract;
// }
// export const TransactionProvider=({children})=>
// {
//     const [currentAccount, setCurrentAccount]=useState('');
//     const [formData, setFormData]=useSate({addressTo:'',amount:'',keyword:'',message:''});
//     const handleChange=(e,name)=>
//     {
//         setFormData((prevState)=>({...prevState,[name]:e.target.value}));
//     }
//     const checkIfWalletIsConnected=async()=>
//     {
//         try
//         {
//             if(!ethereum) return alert("Please install metamask");
//             const accounts=await ethereum.request({ method: 'eth_accounts' });
//             if(accounts.length)
//             {
//                 setCurrentAccount(accounts[0]);
//             }
//             else
//             {
//                 console.log("No accounts found");
//             }
//         }
//         catch(error)
//         {
//             console.log(error);
//             throw new Error("No ethereum object");
//         }
//     }
//     const connectWallet=async()
//     {
//         try
//         {
//             if(!ethereum) return alert("Please install metamask");
//             const accounts = await ethereum.request({ method: 'eth_requestAccounts', });
//             setCurrentAccount(accounts[0]);
//         }
//         catch(error)
//         {
//             console.log(error);
//             throw new Error("No ethereum object.");
//         }
//     }
//     const sendTransaction=async ()=>
//     {
//         try
//         {
//             if(!ethereum) return alert("Please install metamask");
//             const {addressTo, amount, keyword, message}=formData;
//             const transactionContract = getEthereumContact();
//             const parsedAmount=ethers.util.parseEther(amount);

//             await ethereum.request({
//                 method:'eth_sendTransaction',
//                 param:[{
//                     from: currentAccount,
//                     to:addressTo,
//                     gas: '0x5208',
//                     value: amount,

//                 }]
//             })
//         }
//         catch(error)
//         {
//             console.log(error);
//             throw new Error("No ethereum object.");
//         }
//     }
//     useEffect(()=>
//     {
//         checkIfWalletIsConnected();
//     },[]);
//     return (
//         <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
//             {children}
//         </TransactionContext.Provider>
//     )
// }

import React, { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import PropTypes from 'prop-types';

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = useCallback(async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  },[]);

  const checkIfWalletIsConnect = useCallback(async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  },[getAllTransactions]);

  const checkIfTransactionsExists = useCallback(async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  },[]);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }]
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [checkIfWalletIsConnect,checkIfTransactionsExists]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
TransactionsProvider.propTypes={
    children:PropTypes.node.isRequired,
};