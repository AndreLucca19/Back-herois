const pool = require("../config/database");

const getHeros = async () => {
    const result = await pool.query(
    `SELECT heros.*, publishers.publisher_name AS publisher_name 
        FROM heros 
        LEFT JOIN publishers ON heros.publisher_name = publishers.publisher_name`
    );
    return result.rows;
};

const getHeroById = async (id) => {
    const result = await pool.query(
    `SELECT heros.*, publishers.publisher_name AS publisher_name 
        FROM heros 
        LEFT JOIN publishers ON heros.publisher_name = publishers.publisher_name 
        WHERE heros.id = $1`,
    [id]
    );
    return result.rows[0];
};

const createHero = async (name, publisher_name) => {
    const result = await pool.query(
      "INSERT INTO heros (name, publisher_name) VALUES ($1, $2) RETURNING *",
    [name, publisher_name]
    );
    return result.rows[0];
};

module.exports = { getHeros, getHeroById, createHero };