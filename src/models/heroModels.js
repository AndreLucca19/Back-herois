const pool = require("../config/database");

const getAllHeros = async (name) => {
    if (!name) {
        const result = await pool.query(`SELECT heros.*, publishers.publisher_name AS publisher_name FROM heros LEFT JOIN publishers ON heros.publisher_name = publishers.publisher_name`
        );
        return result.rows;
    } else {
        const result = await pool.query(`SELECT heros.*, publishers.publisher_name AS publisher_name FROM heros LEFT JOIN publishers ON heros.publisher_name = publishers.publisher_name WHERE heros.name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
};

const getHeroById = async (id) => {
    const result = await pool.query(`SELECT heros.*, publishers.publisher_name AS publisher_name FROM heros LEFT JOIN publishers ON heros.publisher_name = publishers.publisher_name WHERE heros.id = $1`, [id]);
    return result.rows[0];
};

const createHero = async (name, publisher_name, photo) => {
    const result = await pool.query("INSERT INTO heros (name, publisher_name, photo) VALUES ($1, $2) RETURNING *", [name, publisher_name, photo]
    );
    return result.rows[0];
};

const updateHero = async (id, name, publisher_name, photo) => {
    const result = await pool.query("UPDATE heros SET name = $1, publisher_name = $2 WHERE id = $3 RETURNING *", [name, publisher_name, id, photo]
    );
    return result.rows[0];
};

const deleteHero = async (id) => {
    const result = await pool.query(
        "DELETE FROM heros WHERE id = $1 RETURNING *", [id]
    );
    return { message: "Heroi deletado com sucesso"};
};

module.exports = { getAllHeros, getHeroById, createHero, updateHero, deleteHero };