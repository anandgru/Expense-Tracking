// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Get all expenses
router.get('/', expenseController.getAllExpenses);

router.get('/:id', expenseController.getAllExpenses);


// Create a new expense
router.post('/create', expenseController.createExpense);

// Update an existing expense
router.put('/update/:id', expenseController.updateExpense);

// Delete an expense
router.delete('/delete/:id', expenseController.deleteExpense);

module.exports = router;
