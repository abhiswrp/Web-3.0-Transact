const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const walletsRoute = require('./routes/wallets');
app.use('/api/wallets', walletsRoute);

const transactionsRoute = require('./routes/transactions');
app.use('/api/transactions', transactionsRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));