const publisherModel = require("../models/publisherModels");

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await publisherModel.getPublishers();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editoras." });
    }
};

const getPublisherById = async (req, res) => {
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

const createPublisher = async (req, res) => {
    try {
        const { publisher_name, founder } = req.body;
        const newPublisher = await publisherModel.createPublisher(publisher_name, founder);
        res.status(201).json(newPublisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar editora." });
    }
};

const updatePublisher = async (req, res) => {
    try {
        const { publisher_name, founder } = req.body;
        const publisher = await publisherModel.updatePublisher(req.params.id, publisher_name, founder);
        if (!publisher) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao editar editora." });
    }
};

const deletePublisher = async (req, res) => {
    try {
        const publisher = await publisherModel.deletePublisher(req.params.id);
        if (!publisher) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};
module.exports = { getAllPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher };