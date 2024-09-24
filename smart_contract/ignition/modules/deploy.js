// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;

// module.exports = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });
const main=async()=>{
  const Transactions=await hre.ethers.getContractFactory("Transactions");
  const transactions=await Transactions.deploy();
  await transactions.deployed();
  console.log("Transaction deployed to:", transactions.address);
}
const runMain=async()=>{
  try{
    await main();
    process.exit(0);
  } catch (error){
    console.error(error);
    porcess.exit(1);
  }
}
runMain();