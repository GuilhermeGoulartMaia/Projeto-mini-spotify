const User = require('../models/User');
//Registrar usuário:
exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send('Erro ao registrar usuário: ' + error.message);
    }
};
// Encontrar usuário pelo id:
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('Usuário não encontrado');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Erro ao buscar usuário: ' + error.message);
    }
};

// Fazer update do usuário:
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send('Usuário não encontrado');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Erro ao atualizar usuário: ' + error.message);
    }
};
// Deletar o usuário:
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('Usuário não encontrado');
        res.status(200).send('Usuário deletado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao deletar usuário: ' + error.message);
    }
};