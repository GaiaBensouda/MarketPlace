const express = require('express');
const router = express.Router();

// Example route to get all users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// Example route to create a user
router.post('/', (req, res) => {
  res.send('Create a new user');
});

// Example route to update a user
router.put('/:id', (req, res) => {
  res.send(`Update user with ID ${req.params.id}`);
});

// Example route to delete a user
router.delete('/:id', (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});

module.exports = router;
