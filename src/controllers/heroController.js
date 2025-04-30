const heroModel = require("../models/heroModels");

const getAllHeroes = async (req, res) => {
    try {
        const { name } = req.query;
        const heroes = await heroModels.getAllHeroes(name);
        res.json(heroes);
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar heróis"});
    }
}

const getHeroById = async (req, res) => {
    try {
        const hero = await heroModels.getHeroById(req.params.id)
        res.json(hero)
    } catch (error) {
        res.status(500).json({message: "erro ao buscar herói"})
    }
}

const createHero = async (req, res) => {
    try {
        const { name, publisher_name } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHero = await heroModels.createHero(name, publisher_name, photo);
        res.status(201).json(newHero);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHero = async (req, res) => {
    try {
        const { name, publisher_name } = req.body;
        const hero = await heroModels.updateHero(req.params.id, name, publisher_name);
        res.json(hero);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao editar herói.' });
    }
}

const deleteHero = async (req, res) => {
    try {
        const hero = await heroModels.deleteHero(req.params.id);
        res.json(hero);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao deletar herói.' });
    }
}

module.exports = { getAllHeroes, getHeroById, createHero, updateHero, deleteHero };