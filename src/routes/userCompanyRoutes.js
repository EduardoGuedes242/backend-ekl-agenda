const express = require('express');
const router = express.Router();
const userCompanyController = require('../controllers/userCompanyController');
const authMiddleware = require('../authMiddleware');

router.get('/', authMiddleware, userCompanyController.getAllUserCompany);
router.post('/', authMiddleware, userCompanyController.createUserCompany)

module.exports = router;