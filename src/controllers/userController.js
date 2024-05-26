const usuarioService = require('../services/userService');

// Funções de controle para usuários
async function listarUsuarios(req, res) {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
}

async function criarUsuario(req, res) {
    const usuario = await usuarioService.criarUsuario(req.body);
    res.status(201).json(usuario);
}

async function obterUsuario(req, res) {
    const usuario = await usuarioService.obterUsuario(req.params.id);
    res.json(usuario);
}

async function atualizarUsuario(req, res) {
    const usuario = await usuarioService.atualizarUsuario(req.params.id, req.body);
    res.json(usuario);
}

async function deletarUsuario(req, res) {
    await usuarioService.deletarUsuario(req.params.id);
    res.status(204).end();
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario,
};
