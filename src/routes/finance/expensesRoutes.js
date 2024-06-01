const express = require('express');
const router = express.Router();
const expensesController = require('../../controllers/finance/expensesController');
const authMiddleware = require('../../authMiddleware');

router.get('/', authMiddleware, expensesController.getAllExpenses);
router.post('/', authMiddleware, expensesController.createExpense)

module.exports = router;