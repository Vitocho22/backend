// src/controllers/PilotoController.js
const PilotoModel = require('../models/PilotoModel');

const getAllPilotos = async (req, res) => {
    try {
        const pilotos = await PilotoModel.getAllPilotos();
        res.json(pilotos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de pilotos' });
    }
};

const getPilotoByCodigo = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const piloto = await PilotoModel.getByPilotoCodigo(codigo);
        if (!piloto) {
            return res.status(404).json({ error: 'Piloto no encontrado' });
        }
        res.json(piloto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el piloto' });
    }
};

const createPiloto = async (req, res) => {
    const { codigo, nombre, horasVuelo, baseCodigo } = req.body;
    try {
        const pilotoId = await PilotoModel.insertPiloto(codigo, nombre, horasVuelo, baseCodigo);
        res.json({ pilotoId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el piloto' });
    }
};

const updatePiloto = async (req, res) => {
    const codigo = req.params.codigo;
    const { nombre, horasVuelo, baseCodigo } = req.body;
    try {
        const affectedRows = await PilotoModel.updatePiloto(codigo, nombre, horasVuelo, baseCodigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Piloto no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el piloto' });
    }
};

const deletePiloto = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const affectedRows = await PilotoModel.deleteByPilotoCodigo(codigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Piloto no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el piloto' });
    }
};

module.exports = {
    getAllPilotos,
    getPilotoByCodigo,
    createPiloto,
    updatePiloto,
    deletePiloto,
};
