// controllers/expenseController.js
const Expense = require("../models/Expense");

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    if (req.params.id) {
      const expense = await Expense.findByPk(req.params.id);
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      res.json(expense);
    } else {
      const expenses = await Expense.findAll();
      res.json(expenses);
    }
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Error fetching expenses" });
  }
};

// Create a new expense
exports.createExpense = async (req, res) => {
  const { name, amount, category, date } = req.body;

  try {
    const newExpense = await Expense.create({
      name,
      amount,
      category,
      date,
    });
    res.status(201).json(newExpense);
  } catch (error) {
    console.error("Error creating expense:", error);
    res.status(500).json({ message: "Error creating expense" });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  const expenseId = req.params.id;
  const { name, amount, category, date } = req.body;

  try {
    const expense = await Expense.findByPk(expenseId);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    expense.name = name;
    expense.amount = amount;
    expense.category = category;
    expense.date = date;
    await expense.save();

    res.json(expense);
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ message: "Error updating expense" });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  const expenseId = req.params.id;

  try {
    const expense = await Expense.findByPk(expenseId);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    await expense.destroy();
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({ message: "Error deleting expense" });
  }
};
