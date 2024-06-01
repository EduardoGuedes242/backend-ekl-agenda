const db = require('../../db');

async function listarDespesas(user_id){
    const {rows} = await db.query(
        `SELECT * FROM public."ekl$expenses"
        WHERE ekl$expenses.usr_id = $1`, [user_id]
    )
    return rows;
}

async function lancamentoDespesa(despesa) {
    const { user_id, tenant_id, company_id, amount, date, category, description } = despesa;
    const { rows } = await db.query(
        `INSERT INTO public."ekl$expenses"(
            usr_id,
            tnt_id,
            cpn_id,
            exp_amount,
            exp_date,
            exp_category,
            exp_description
        ) VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7
        ) RETURNING *;`,
        [user_id, company_id, tenant_id, amount, date, category, description]
    );
    return rows[0];
}


module.exports = {
    listarDespesas,
    lancamentoDespesa,
}
