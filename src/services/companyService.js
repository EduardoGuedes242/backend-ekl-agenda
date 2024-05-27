const db = require('../db');

async function listarCompany(user_id){
    const {rows} = await db.query(
        `SELECT * FROM public."ekl$company"
        join ekl$user_company on (ekl$company.cpn_id = ekl$user_company.cpn_id)
        WHERE ekl$user_company.usr_id = $1`, [user_id]
    )
    return rows;
}

async function criarCompany(company) {
    const { tenant_id, name } = company;
    const { rows } = await db.query(
        `INSERT INTO public."ekl$company"(
            tnt_id,
            cpn_name
        ) VALUES (
            $1,
            $2
        ) RETURNING *;`,
        [tenant_id, name]
    );
    return rows[0];
}


module.exports = {
    listarCompany,
    criarCompany,
}
