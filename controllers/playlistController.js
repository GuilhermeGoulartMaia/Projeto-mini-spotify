const Playlist = require('../models/Playlist');
const Music = require('../models/Music');

//Criar playlist
exports.createPlaylist = async (req, res) => {
    try {
        const { name, userId } = req.body;
        const newPlaylist = new Playlist({ name, userId });
        await newPlaylist.save();
        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(500).send('Erro ao criar playlist: ' + error.message);
    }
};
//Encontrar playlist pelo id:
exports.getPlaylistById = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('musics');
        if (!playlist) return res.status(404).send('Playlist não encontrada');
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).send('Erro ao buscar playlist: ' + error.message);
    }
};

//Atualizar playlist:
exports.updatePlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!playlist) return res.status(404).send('Playlist não encontrada');
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).send('Erro ao atualizar playlist: ' + error.message);
    }
};
//Deletar playlist:
exports.deletePlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndDelete(req.params.id);
        if (!playlist) return res.status(404).send('Playlist não encontrada');
        res.status(200).send('Playlist deletada com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao deletar playlist: ' + error.message);
    }
};

//Add musica na playlist:
exports.addMusicToPlaylist = async (req, res) => {
    const { playlistId, musicId } = req.body;

    try {
        // Verificar se a playlist existe
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist não encontrada.' });
        }

        // Verificar se a música existe
        const music = await Music.findById(musicId);
        if (!music) {
            return res.status(404).json({ error: 'Música não encontrada.' });
        }

        // Evitar duplicação de músicas
        if (playlist.musics.includes(musicId)) {
            return res.status(400).json({ error: 'Música já está na playlist.' });
        }

        // Adicionar música à playlist
        playlist.musics.push(musicId);
        await playlist.save();

        res.status(200).json({
            message: 'Música adicionada à playlist com sucesso!',
            playlist,
        });
    } catch (error) {
        console.error('Erro ao adicionar música à playlist:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};
