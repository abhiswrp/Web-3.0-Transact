// https://eth-sepolia.g.alchemy.com/v2/2PKHtnSWfKO3NQkme_MMCwocMbFkPhq_
require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:{
    version:'0.8.24',},
    settings:{
      optimizer:{
        enabled:true,
        runs:200
      }
    },
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/2PKHtnSWfKO3NQkme_MMCwocMbFkPhq_',
      accounts:['c216d19b29566a9d189307d62e8d89d613894dca9620c0732f56eb8ddf9cdeca']
    }
  }
}