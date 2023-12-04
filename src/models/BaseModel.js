// src/models/BaseModel.js
const db = require('../utils/db');

const getAllBases = async () => {
    const query = 'SELECT * FROM base';
    const result = await db.query(query);
    return result;
};

const getByBaseCodigo = async (codigo) => {
    const query = 'SELECT * FROM base WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result[0];
};

const insertBase = async (codigo, nombre) => {
    const query = 'INSERT INTO base (codigo, nombre) VALUES (?, ?)';
    const result = await db.query(query, [codigo, nombre]);
    return result.insertId;
};

const updateBase = async (codigo, nombre) => {
    const query = 'UPDATE base SET nombre = ? WHERE codigo = ?';
    const result = await db.query(query, [nombre, codigo]);
    return result.affectedRows;
};

const deleteByBaseCodigo = async (codigo) => {
    const query = 'DELETE FROM base WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllBases,
    getByBaseCodigo,
    insertBase,
    updateBase,
    deleteByBaseCodigo,
};
