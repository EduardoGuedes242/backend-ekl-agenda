const express = require('express');
const router = express.Router();
const incomesController = require('../../controllers/finance/incomesController');
const authMiddleware = require('../../authMiddleware');

router.get('/', authMiddleware, incomesController.getAllIncomes);
router.post('/', authMiddleware, incomesController.createIncome)

module.exports = router;