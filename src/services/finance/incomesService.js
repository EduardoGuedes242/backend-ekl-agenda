const db = require('../../db');

async function listarReceitas(user_id){
    const {rows} = await db.query(
        `SELECT * FROM public."ekl$incomes"
        WHERE ekl$incomes.usr_id = $1`, [user_id]
    )
    return rows;
}

async function lancamentoReceitas(receita) {

    const { user_id, tenant_id, company_id, amount, date, category, description } = receita;
    console.log(company_id)
    console.log(receita)
    const { rows } = await db.query(
        `INSERT INTO public."ekl$incomes"(
            usr_id,
            tnt_id,
            cpn_id,
            inc_amount,
            inc_date,
            inc_category,
            inc_description
        ) VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7
        ) RETURNING *;`,
        [user_id, tenant_id, company_id, amount, date, category, description]
    );
    return rows[0];
}


module.exports = {
    listarReceitas,
    lancamentoReceitas,
}
