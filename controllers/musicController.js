const Music = require('../models/Music');

// Criar uma nova música
exports.createMusic = async (req, res) => {
    try {
        const { title, artist, playlistId } = req.body;
        const newMusic = new Music({ title, artist });
        if (playlistId) newMusic.playlistId = playlistId;
        await newMusic.save();
        res.status(201).json(newMusic);
    } catch (error) {
        res.status(500).send('Erro ao criar música: ' + error.message);
    }
};

// Obter uma música pelo ID
exports.getMusicById = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        if (!music) return res.status(404).send('Música não encontrada');
        res.status(200).json(music);
    } catch (error) {
        res.status(500).send('Erro ao buscar música: ' + error.message);
    }
};

