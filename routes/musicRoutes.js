const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

// Rota para criar uma nova música
router.post('/', musicController.createMusic);

// Rota para obter uma música pelo ID
router.get('/:id', musicController.getMusicById);

module.exports = router;