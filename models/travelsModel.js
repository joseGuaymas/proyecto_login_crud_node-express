const pool = require("./db");

async function getTravels() {
    try{
        const query = "SELECT * FROM travels";
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    };
};

async function getTravel(id) {
    try{
        const query = "SELECT * FROM travels WHERE id = ?";
        const rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log("error");
    };
};

async function addTravel(data) {
    try {
        const query = "INSERT INTO travels SET ?"
        const row = await pool.query(query, [data]);
        return row;
    } catch (error) {
        throw error;
    }
};

async function deleteTravel(id) {
    const query = "DELETE FROM travels WHERE id = ?"
    const row = await pool.query(query, [id]);
    return row;
}

async function modifyTravel(data, id) {
    const query = "UPDATE travels SET ? WHERE id = ?"
    const row = await pool.query(query, [data, id])
    return row;
}

module.exports = { getTravels, addTravel, getTravel, deleteTravel, modifyTravel };