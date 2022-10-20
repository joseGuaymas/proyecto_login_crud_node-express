const pool = require("./db");
const md5 = require("md5");

async function getUser(user, pass) {
    try {
        const query = "SELECT * FROM users WHERE user_name = ? AND user_pass = ?";
        const row = await pool.query(query, [user, md5(pass)]);
        return row[0];
    } catch (error) {
        throw(error);
    }
}

module.exports = { getUser };