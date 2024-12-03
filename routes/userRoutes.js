const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário:
router.post('/register', userController.registerUser);

// Rota para obter um usuário pelo ID:
router.get('/:id', userController.getUserById);

// Rota para atualizar usuário:
router.put('/:id', userController.updateUser);

// Rota para deletar usuário:
router.delete('/:id', userController.deleteUser);

module.exports = router;