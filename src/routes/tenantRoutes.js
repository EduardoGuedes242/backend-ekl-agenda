const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const authMiddleware = require('../authMiddleware');

router.get('/', authMiddleware, tenantController.getAllTenant);
router.post('/', tenantController.createTenant)

module.exports = router;