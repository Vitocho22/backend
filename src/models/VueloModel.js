// src/models/VueloModel.js
const db = require('../utils/db');

const getAllVuelos = async () => {
    const query = 'SELECT * FROM vuelos';
    const result = await db.query(query);
    return result;
};

const getByNumeroVuelo = async (numeroVuelo) => {
    const query = 'SELECT * FROM vuelos WHERE numero_vuelo = ?';
    const result = await db.query(query, [numeroVuelo]);
    return result[0];
};

const insertVuelo = async (numeroVuelo, origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo) => {
    const query = 'INSERT INTO vuelos (numero_vuelo, origen, destino, hora_partida, horas_aterrizaje, avion_codigo, piloto_codigo, tripulacion_codigo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await db.query(query, [numeroVuelo, origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo]);
    return result.insertId;
};

const updateVuelo = async (numeroVuelo, origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo) => {
    const query = 'UPDATE vuelos SET origen = ?, destino = ?, hora_partida = ?, horas_aterrizaje = ?, avion_codigo = ?, piloto_codigo = ?, tripulacion_codigo = ? WHERE numero_vuelo = ?';
    const result = await db.query(query, [origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo, numeroVuelo]);
    return result.affectedRows;
};

const deleteByNumeroVuelo = async (numeroVuelo) => {
    const query = 'DELETE FROM vuelos WHERE numero_vuelo = ?';
    const result = await db.query(query, [numeroVuelo]);
    return result.affectedRows;
};

module.exports = {
    getAllVuelos,
    getByNumeroVuelo,
    insertVuelo,
    updateVuelo,
    deleteByNumeroVuelo,
};
