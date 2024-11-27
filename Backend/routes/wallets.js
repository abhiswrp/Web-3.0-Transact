const express = require('express');
const router = express.Router();

const wallets = [
  { address: '0x123...', balance: '1.5 ETH' },
  { address: '0x456...', balance: '2.1 ETH' },
];

router.get('/', (req, res) => {
  res.json(wallets);
});

module.exports = router;
