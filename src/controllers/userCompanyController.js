const userCompanyService = require('../services/userCompanyService');

async function getAllUserCompany(req, res) {
    const tenants = await userCompanyService.listarUserCompany();
    res.json(tenants);
}

async function createUserCompany(req, res) {
    const tenant = await userCompanyService.criarUserCompany(req.body);
    res.status(201).json(tenant);
}

module.exports = {
    getAllUserCompany,
    createUserCompany,
}

