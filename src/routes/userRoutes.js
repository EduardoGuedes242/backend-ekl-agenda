const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController');

// Rotas para usuários
router.get('/', usuarioController.listarUsuarios);
router.post('/', usuarioController.criarUsuario);
router.get('/:id', usuarioController.obterUsuario);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.deletarUsuario);

module.exports = router;
