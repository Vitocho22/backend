// src/models/PilotoModel.js
const db = require('../utils/db');

const getAllPilotos = async () => {
    const query = 'SELECT * FROM pilotos';
    const result = await db.query(query);
    return result;
};

const getByPilotoCodigo = async (codigo) => {
    const query = 'SELECT * FROM pilotos WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result[0];
};

const insertPiloto = async (codigo, nombre, horasVuelo, baseCodigo) => {
    const query = 'INSERT INTO pilotos (codigo, nombre, horas_vuelo, base_codigo) VALUES (?, ?, ?, ?)';
    const result = await db.query(query, [codigo, nombre, horasVuelo, baseCodigo]);
    return result.insertId;
};

const updatePiloto = async (codigo, nombre, horasVuelo, baseCodigo) => {
    const query = 'UPDATE pilotos SET nombre = ?, horas_vuelo = ?, base_codigo = ? WHERE codigo = ?';
    const result = await db.query(query, [nombre, horasVuelo, baseCodigo, codigo]);
    return result.affectedRows;
};

const deleteByPilotoCodigo = async (codigo) => {
    const query = 'DELETE FROM pilotos WHERE codigo = ?';
    const result = await db.query(query, [codigo]);
    return result.affectedRows;
};

module.exports = {
    getAllPilotos,
    getByPilotoCodigo,
    insertPiloto,
    updatePiloto,
    deleteByPilotoCodigo,
};
