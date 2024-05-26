const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.getAllCompany);
router.post('/', companyController.createCompany)

module.exports = router;