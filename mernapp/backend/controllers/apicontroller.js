const axios = require('axios');
const Transaction = require('../models/transaction');

const fetchAndStoreTransactions = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Transaction.deleteMany({});
        await Transaction.insertMany(response.data);
        res.json({ message: 'Database initialized with seed data' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch and store transactions' });
    }
};

module.exports = { fetchAndStoreTransactions };
