const db = require('../db');

async function listarServicos(){
    const {rows} = await db.query('SELECT * FROM "ekl$services"')
    return rows;
}

async function criarServicos(service){
    const {name, price, time, company_id} = service;
    const {rows} = await db.query(
        `INSERT INTO public."ekl$services"(
            svc_name,
            svc_price,
            svc_time,
            cpn_id
        ) VALUES (
            $1,
            $2,
            $3,
            $4
        ) RETURNING *;`,
        [name, price, time, company_id])
    return rows[0];
}

module.exports = {
    listarServicos,
    criarServicos,
}
