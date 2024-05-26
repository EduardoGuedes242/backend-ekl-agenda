const db = require('../db');

// Funções de serviço para usuários
async function listarUsuarios() {
    const { rows } = await db.query('SELECT * FROM "EKL$USER"');
    return rows;
}

async function criarUsuario(usuario) {
    const { nome, email, senha } = usuario;
    const { rows } = await db.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senha]);
    return rows[0];
}

async function obterUsuario(id) {
    const { rows } = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return rows[0];
}


async function atualizarUsuario(id, usuario) {
    const { nome, email, senha } = usuario;
    const { rows } = await db.query('UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *', [nome, email, senha, id]);
    return rows[0];
}

async function deletarUsuario(id) {
    await db.query('DELETE FROM usuarios WHERE id = $1', [id]);
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario,
};
