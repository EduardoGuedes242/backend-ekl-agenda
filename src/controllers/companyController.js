const companyService = require('../services/companyService');

async function getAllCompany(req, res) {
    const user_id = req.user.id
    console.log(user_id)
    const companys = await companyService.listarCompany(user_id);
    res.json(companys);
}

async function createCompany(req, res) {
    const tenant_id = req.user.tenant_id
    const { name } = req.body;
    const companyData = { tenant_id, name };
    console.log(companyData)
    try {
        const tenant = await companyService.criarCompany(companyData);
        res.status(201).json(tenant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllCompany,
    createCompany,
}

