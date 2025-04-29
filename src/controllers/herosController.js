const heroModel = require("../models/herosModels");

const getAllHeros = async (req, res) => {
    try {
        const heros = await heroModel.getHeros();
        res.json(heros);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heróis." });
    }
};

const getHero = async (req, res) => {
    try {
        const hero = await heroModel.getHeroById(req.params.id);
        if (!hero) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herói." });
    }
};

const createHero = async (req, res) => {
    try {
        const { name, publisher_name } = req.body;
        const newHero = await heroModel.createHero(name, publisher_name);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

module.exports = { getAllHeros, getHero, createHero };