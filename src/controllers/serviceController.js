const serviceService = require('../services/serviceService');

async function getAllServices(req, res) {
    const tenants = await serviceService.listarServicos();
    res.json(tenants);
}

async function createService(req, res) {
    const tenant = await serviceService.criarServicos(req.body);
    res.status(201).json(tenant);
}

module.exports = {
    getAllServices,
    createService,
}

