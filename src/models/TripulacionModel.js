// src/models/TripulacionModel.js
const db = require('../utils/db');

const getAllTripulacion = async () => {
    const query = 'SELECT * FROM tripulacion';
    const result = await db.query(query);
    return result;
};

const getByTripulacionCodigo = async (codigo) => {
    const query = 'SELECT * FROM tripulacion WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result[0];
};

const insertTripulacion = async (codigo, nombre, baseCodigo) => {
    const query = 'INSERT INTO tripulacion (codigo, nombre, base_codigo) VALUES (?, ?, ?)';
    const result = await db.query(query, [codigo, nombre, baseCodigo]);
    return result.insertId;
};

const updateTripulacion = async (codigo, nombre, baseCodigo) => {
    const query = 'UPDATE tripulacion SET nombre = ?, base_codigo = ? WHERE codigo = ?';
    const result = await db.query(query, [nombre, baseCodigo, codigo]);
    return result.affectedRows;
};

const deleteByTripulacionCodigo = async (codigo) => {
    const query = 'DELETE FROM tripulacion WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllTripulacion,
    getByTripulacionCodigo,
    insertTripulacion,
    updateTripulacion,
    deleteByTripulacionCodigo,
};
