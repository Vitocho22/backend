// src/models/user.js
const db = require('../utils/db');
const bcrypt = require('../utils/bcrypt'); 

const createUser = async (userData) => {
    const { name, lastName, email, password } = userData;
    const hashedPassword = await bcrypt.hashPassword(password);
    const query = 'INSERT INTO users (name, last_name, email, password) VALUES (?, ?, ?, ?)';
    const result = await db.query(query, [name, lastName, email, hashedPassword]);
    return result.insertId;
};

const getUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const result = await db.query(query, [email]);
    return result;
};

module.exports = {
    createUser,
    getUserByEmail,
};
