const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController');
const authMiddleware = require('../authMiddleware');

router.get('/', authMiddleware, usuarioController.listarUsuarios);
router.post('/', usuarioController.criarUsuario);
router.get('/:id', authMiddleware, usuarioController.obterUsuario);
router.put('/:id', authMiddleware, usuarioController.atualizarUsuario);
router.delete('/:id', authMiddleware, usuarioController.deletarUsuario);
router.post('/login', usuarioController.login);

module.exports = router;
