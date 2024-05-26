const companyService = require('../services/companyService');

async function getAllCompany(req, res) {
    const tenants = await companyService.listarCompany();
    res.json(tenants);
}

async function createCompany(req, res) {
    const tenant = await companyService.criarCompany(req.body);
    res.status(201).json(tenant);
}

module.exports = {
    getAllCompany,
    createCompany,
}

