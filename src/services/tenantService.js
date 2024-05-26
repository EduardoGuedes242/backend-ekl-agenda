const db = require('../db');

async function listarTenants(){
    const {rows} = await db.query('SELECT * FROM "EKL$TENANT"')
    return rows;
}

async function criarTenant(tenant){
    const {name, email, phone} = tenant;
    const {rows} = await db.query(
        `INSERT INTO ekl$tenant(
            tnt_name,
            tnt_email,
            tnt_phone
        ) VALUES (
            $1, $2, $3
        ) RETURNING *`,
        [name, email, phone])
    return rows[0];
}

module.exports = {
    listarTenants,
    criarTenant,
}
