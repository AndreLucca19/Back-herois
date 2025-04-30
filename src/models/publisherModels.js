const pool = require("../config/database");

const getPublishers = async () => {
    const result = await pool.query("SELECT * FROM publishers");
    return result.rows;
};

const getPublisherById = async (id) => {
    const result = await pool.query("SELECT * FROM publishers WHERE id = $1", [id]);
    return result.rows[0];
};

const createPublisher = async (publisher_name, founder) => {
    const result = await pool.query("INSERT INTO publishers (publisher_name, founder) VALUES ($1, $2) RETURNING *", [publisher_name, founder]
    );
    return result.rows[0];
};

const updatePublisher = async (id, publisher_name, founder) => {
    const result = await pool.query("UPDATE publishers SET publisher_name = $1, founder = $2 WHERE id = $3 RETURNING *", [publisher_name, founder, id]
    );
    return result.rows[0];
};

const deletePublisher = async (id) => {
    const result = await pool.query(
        "DELETE FROM publishers WHERE id = $1 RETURNING *",
        [id]
    );
    return { message: "Heroi deletado com sucesso"};
};

module.exports = { getPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher };
