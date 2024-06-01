const express = require('express');
const router = express.Router();
const balanceController = require('../../controllers/finance/balanceController');
const authMiddleware = require('../../authMiddleware');

router.get('/general', authMiddleware, balanceController.getAllBalanceGeneral);

module.exports = router;