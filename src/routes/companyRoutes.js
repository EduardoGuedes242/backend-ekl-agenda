const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const authMiddleware = require('../authMiddleware');

router.get('/', authMiddleware, companyController.getAllCompany);
router.post('/', authMiddleware, companyController.createCompany)

module.exports = router;