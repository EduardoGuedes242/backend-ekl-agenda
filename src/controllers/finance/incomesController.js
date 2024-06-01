const incomesService = require('../../services/finance/incomesService');

async function getAllIncomes(req, res) {
    const user_id = req.user.user_id
    const expenses = await incomesService.listarReceitas(user_id);
    res.json(expenses);
}

async function createIncome(req, res) {
    const user_id = req.user.user_id
    const tenant_id = req.user.tenant_id
    const { company_id, amount, date, category, description } = req.body;
    const incomeData = { user_id, tenant_id, company_id, amount, date, category, description };
    try {
        const income = await incomesService.lancamentoReceitas(incomeData);
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllIncomes,
    createIncome,
}

