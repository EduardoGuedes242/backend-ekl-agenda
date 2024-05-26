const db = require('../db');

async function listarCompany(){
    const {rows} = await db.query('SELECT * FROM "ekl$company"')
    return rows;
}

async function criarCompany(company){
    const {tenant_id, name,} = company;
    const {rows} = await db.query(
        `INSERT INTO public."ekl$company"(
            tnt_id,
            cpn_name
        ) VALUES (
            $1,
            $2
        ) RETURNING *;`,
        [tenant_id, name])
    return rows[0];
}

module.exports = {
    listarCompany,
    criarCompany,
}
