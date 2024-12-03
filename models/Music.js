const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    playlist: { type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }
});

module.exports = mongoose.model('Music', musicSchema);