const tenantService = require('../services/tenantService');

async function getAllTenant(req, res) {
    const tenants = await tenantService.listarTenants();
    res.json(tenants);
}

async function createTenant(req, res) {
    const tenant = await tenantService.criarTenant(req.body);
    res.status(201).json(tenant);
}

module.exports = {
    getAllTenant,
    createTenant,
}

