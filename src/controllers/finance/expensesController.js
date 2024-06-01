const expensesService = require('../../services/finance/expensesService');

async function getAllExpenses(req, res) {
    const user_id = req.user.user_id
    const expenses = await expensesService.listarDespesas(user_id);
    res.json(expenses);
}

async function createExpense(req, res) {
    const user_id = req.user.user_id
    const tenant_id = req.user.tenant_id
    const { company_id, amount, date, category, description } = req.body;
    const expensesData = { user_id, tenant_id, company_id, amount, date, category, description };
    try {
        const expense = await expensesService.lancamentoDespesa(expensesData);
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllExpenses,
    createExpense,
}

