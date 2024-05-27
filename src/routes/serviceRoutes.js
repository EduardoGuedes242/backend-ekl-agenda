const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../authMiddleware');

router.get('/', authMiddleware, serviceController.getAllServices);
router.post('/', authMiddleware, serviceController.createService)

module.exports = router;