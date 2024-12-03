const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

// Rota para criar uma nova playlist
router.post('/', playlistController.createPlaylist);

// Rota para obter uma playlist pelo ID
router.get('/:id', playlistController.getPlaylistById);

// Rota para atualizar playlist:
router.put('/:id', playlistController.updatePlaylist);

// Rota para deletar playlist:
router.delete('/:id', playlistController.deletePlaylist);

// Rota para add musica na playlist:
router.patch('/add-music', playlistController.addMusicToPlaylist);

module.exports = router;