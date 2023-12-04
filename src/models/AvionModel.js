// src/models/AvionModel.js
const db = require('../utils/db');

const getAllAviones = async () => {
    const query = 'SELECT * FROM aviones';
    const result = await db.query(query);
    return result;
};

const getByAvionCodigo = async (codigo) => {
    const query = 'SELECT * FROM aviones WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result[0];
};

const insertAvion = async (codigo, tipo, baseRevision) => {
    const query = 'INSERT INTO aviones (codigo, tipo, base_revision) VALUES (?, ?, ?)';
    const result = await db.query(query, [codigo, tipo, baseRevision]);
    return result.insertId;
};

const updateAvion = async (codigo, tipo, baseRevision) => {
    const query = 'UPDATE aviones SET tipo = ?, base_revision = ? WHERE codigo = ?';
    const result = await db.query(query, [tipo, baseRevision, codigo]);
    return result.affectedRows;
};

const deleteByAvionCodigo = async (codigo) => {
    const query = 'DELETE FROM aviones WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllAviones,
    getByAvionCodigo,
    insertAvion,
    updateAvion,
    deleteByAvionCodigo,
};
