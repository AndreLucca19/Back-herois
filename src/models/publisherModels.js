const pool = require("../config/database");

const getPublishers = async () => {
    const result = await pool.query("SELECT * FROM publishers");
    return result.rows;
};

const getPublisherById = async (id) => {
    const result = await pool.query("SELECT * FROM publishers WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getPublishers, getPublisherById };
