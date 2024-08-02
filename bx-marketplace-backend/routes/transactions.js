const express = require('express');
const router = express.Router();

// Example route to get all transactions
router.get('/', (req, res) => {
  res.send('Get all transactions');
});

// Example route to create a new transaction
router.post('/', (req, res) => {
  res.send('Create a new transaction');
});

// Example route to update a transaction
router.put('/:id', (req, res) => {
  res.send(`Update transaction with ID ${req.params.id}`);
});

// Example route to delete a transaction
router.delete('/:id', (req, res) => {
  res.send(`Delete transaction with ID ${req.params.id}`);
});

module.exports = router;
