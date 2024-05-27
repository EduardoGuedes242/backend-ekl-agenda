const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Funções de serviço para usuários
async function listarUsuarios() {
    const { rows } = await db.query('SELECT * FROM "ekl$user"');
    return rows;
}

async function criarUsuario(usuario) {
    const { tenant_id, name, email, password } = usuario;

    const senhaCriptografada = await bcrypt.hash(password, 10);

    const { rows } = await db.query(
        `INSERT INTO ekl$user (
            tnt_id,
            usr_name,
            usr_email,
            usr_password
        ) VALUES (
            $1, $2, $3, $4
        ) RETURNING *`,
        [tenant_id, name, email, senhaCriptografada]
    );

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

async function login(usuario) {
    const { email, senha } = usuario;
    const { rows } = await db.query('SELECT * FROM ekl$user WHERE USR_EMAIL = $1', [email]);
    if (rows.length === 0) {
        throw new Error('Usuário não encontrado');
    }
    const usuarioRetornado = rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuarioRetornado.usr_password);
    if (!senhaCorreta) {
        throw new Error('Senha incorreta');
    }
    const token = jwt.sign({
        user_id: usuarioRetornado.usr_id,
        tenant_id: usuarioRetornado.tnt_id
    }, 'chave_secreta', { expiresIn: '1h' }); 
    return token;
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario,
    login,
};
