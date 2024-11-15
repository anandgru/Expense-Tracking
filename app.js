// app.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const expenseRoutes = require("./routes/expenseRoutes");
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse incoming JSON requests

// Expense Routes
app.use("/api/expenses", expenseRoutes);

// Test API Route (optional)
app.get("/", (req, res) => {
  res.sendFile(__dirname+'/public/index.html');
});

// Sync the database
sequelize.sync().then(() => {
  console.log("Database synced");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
