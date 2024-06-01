const db = require('../../db');

async function balanceGeneral(user_id){
    const {rows} = await db.query(
        `WITH income_sum AS (
          SELECT 
              usr_id, 
              SUM(inc_amount) AS total_receita
          FROM ekl$incomes
          WHERE usr_id = $1
          GROUP BY usr_id
      ),
      expense_sum AS (
          SELECT 
              usr_id, 
              SUM(exp_amount) AS total_despesa
          FROM ekl$expenses
          WHERE usr_id = $1
          GROUP BY usr_id
      )      
      SELECT
          COALESCE(income_sum.total_receita, 0) AS receita,
          COALESCE(expense_sum.total_despesa, 0) AS despesa,
          COALESCE(income_sum.total_receita, 0) - COALESCE(expense_sum.total_despesa, 0) AS saldo
      FROM 
          income_sum
      FULL OUTER JOIN 
          expense_sum ON income_sum.usr_id = expense_sum.usr_id;
      `, [user_id]
    )
    return rows;
}

module.exports = {
  balanceGeneral
}
