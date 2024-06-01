const balanceService = require('../../services/finance/balanceService');

async function getAllBalanceGeneral(req, res) {
    const user_id = req.user.user_id
    const balance = await balanceService.balanceGeneral(user_id);
    res.json(balance);
}

module.exports = {
    getAllBalanceGeneral,
    //createExpense,
}

