// filepath: c:\Users\Aluno DS\back-a\src\controllers\publisherController.js
const publisherModel = require("../models/publisherModels");

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await publisherModel.getPublishers();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editoras." });
    }
};

const getPublisher = async (req, res) => {
    try {
        const publisher = await publisherModel.getPublisherById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

module.exports = { getAllPublishers, getPublisher };