// src/controllers/TripulacionController.js
const TripulacionModel = require('../models/TripulacionModel');

const getAllTripulacion = async (req, res) => {
    try {
        const tripulacion = await TripulacionModel.getAllTripulacion();
        res.json(tripulacion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de tripulación' });
    }
};

const getTripulacionByCodigo = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const tripulacion = await TripulacionModel.getByTripulacionCodigo(codigo);
        if (!tripulacion) {
            return res.status(404).json({ error: 'Miembro de tripulación no encontrado' });
        }
        res.json(tripulacion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el miembro de tripulación' });
    }
};

const createTripulacion = async (req, res) => {
    const { codigo, nombre, baseCodigo } = req.body;
    try {
        const tripulacionId = await TripulacionModel.insertTripulacion(codigo, nombre, baseCodigo);
        res.json({ tripulacionId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el miembro de tripulación' });
    }
};

const updateTripulacion = async (req, res) => {
    const codigo = req.params.codigo;
    const { nombre, baseCodigo } = req.body;
    try {
        const affectedRows = await TripulacionModel.updateTripulacion(codigo, nombre, baseCodigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Miembro de tripulación no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el miembro de tripulación' });
    }
};

const deleteTripulacion = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const affectedRows = await TripulacionModel.deleteByTripulacionCodigo(codigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Miembro de tripulación no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el miembro de tripulación' });
    }
};

module.exports = {
    getAllTripulacion,
    getTripulacionByCodigo,
    createTripulacion,
    updateTripulacion,
    deleteTripulacion,
};
