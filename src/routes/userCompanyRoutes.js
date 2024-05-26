const express = require('express');
const router = express.Router();
const userCompanyController = require('../controllers/userCompanyController');

router.get('/', userCompanyController.getAllUserCompany);
router.post('/', userCompanyController.createUserCompany)

module.exports = router;