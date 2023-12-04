// src/controllers/BaseController.js
const BaseModel = require('../models/BaseModel');

const getAllBases = async (req, res) => {
    try {
        const bases = await BaseModel.getAllBases();
        res.json(bases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de bases' });
    }
};

const getBaseByCodigo = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const base = await BaseModel.getByBaseCodigo(codigo);
        if (!base) {
            return res.status(404).json({ error: 'Base no encontrada' });
        }
        res.json(base);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la base' });
    }
};

const createBase = async (req, res) => {
    const { codigo, nombre } = req.body;
    try {
        const baseId = await BaseModel.insertBase(codigo, nombre);

        // Obtener la lista actualizada de bases
        const bases = await BaseModel.getAllBases();

        // Enviar la lista completa como respuesta
        res.json({ baseId, bases });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la base' });
    }
};

const updateBase = async (req, res) => {
    const codigo = req.params.codigo;
    const { nombre } = req.body;
    try {
        const affectedRows = await BaseModel.updateBase(codigo, nombre);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Base no encontrada' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la base' });
    }
};

const deleteBase = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const affectedRows = await BaseModel.deleteByBaseCodigo(codigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Base no encontrada' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la base' });
    }
};

module.exports = {
    getAllBases,
    getBaseByCodigo,
    createBase,
    updateBase,
    deleteBase,
};
