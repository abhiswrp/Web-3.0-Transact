const express = require('express');
const router = express.Router();

const transactions = [
  { hash: '0x789...', amount: '0.5 ETH', date: '2024-10-20' },
  { hash: '0xabc...', amount: '1.2 ETH', date: '2024-10-19' },
];

router.get('/', (req, res) => {
  res.json(transactions);
});

module.exports = router;
