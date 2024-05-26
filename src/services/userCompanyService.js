const db = require('../db');

async function listarUserCompany(){
    const {rows} = await db.query('SELECT * FROM "ekl$user_company"')
    return rows;
}

async function criarUserCompany(userCompany){
    const {company_id, user_id,} = userCompany;
    const {rows} = await db.query(
        `INSERT INTO public."ekl$user_company"(
            cpn_id,
            usr_id
        ) VALUES (
            $1,
            $2
        ) RETURNING *;`,
        [company_id, user_id])
    return rows[0];
}

module.exports = {
    listarUserCompany,
    criarUserCompany,
}
