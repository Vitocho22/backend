// src/controllers/AvionController.js
const AvionModel = require('../models/AvionModel');

const getAllAviones = async (req, res) => {
    try {
        const aviones = await AvionModel.getAllAviones();
        res.json(aviones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de aviones' });
    }
};

const getAvionByCodigo = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const avion = await AvionModel.getByAvionCodigo(codigo);
        if (!avion) {
            return res.status(404).json({ error: 'Avión no encontrado' });
        }
        res.json(avion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el avión' });
    }
};

const createAvion = async (req, res) => {
    const { codigo, tipo, manteniendo, baseCodigo } = req.body;
    try {
        const avionId = await AvionModel.insertAvion(codigo, tipo, manteniendo, baseCodigo);
        res.json({ avionId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el avión' });
    }
};

const updateAvion = async (req, res) => {
    const codigo = req.params.codigo;
    const { tipo, manteniendo, baseCodigo } = req.body;
    try {
        const affectedRows = await AvionModel.updateAvion(codigo, tipo, manteniendo, baseCodigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Avión no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el avión' });
    }
};

const deleteAvion = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const affectedRows = await AvionModel.deleteByAvionCodigo(codigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Avión no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el avión' });
    }
};

module.exports = {
    getAllAviones,
    getAvionByCodigo,
    createAvion,
    updateAvion,
    deleteAvion,
};
