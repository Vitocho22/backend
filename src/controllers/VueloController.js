// src/controllers/VueloController.js
const VueloModel = require('../models/VueloModel');

const getAllVuelos = async (req, res) => {
    try {
        const vuelos = await VueloModel.getAllVuelos();
        res.json(vuelos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de vuelos' });
    }
};

const getVueloByNumeroVuelo = async (req, res) => {
    const numeroVuelo = req.params.numeroVuelo;
    try {
        const vuelo = await VueloModel.getByNumeroVuelo(numeroVuelo);
        if (!vuelo) {
            return res.status(404).json({ error: 'Vuelo no encontrado' });
        }
        res.json(vuelo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el vuelo' });
    }
};

const createVuelo = async (req, res) => {
    const { numeroVuelo, origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo } = req.body;
    try {
        const vueloId = await VueloModel.insertVuelo(numeroVuelo, origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo);
        res.json({ vueloId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el vuelo' });
    }
};

const updateVuelo = async (req, res) => {
    const numeroVuelo = req.params.numeroVuelo;
    const { origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo } = req.body;
    try {
        const affectedRows = await VueloModel.updateVuelo(numeroVuelo, origen, destino, horaPartida, horasAterrizaje, avionCodigo, pilotoCodigo, tripulacionCodigo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Vuelo no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el vuelo' });
    }
};

const deleteVuelo = async (req, res) => {
    const numeroVuelo = req.params.numeroVuelo;
    try {
        const affectedRows = await VueloModel.deleteByNumeroVuelo(numeroVuelo);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Vuelo no encontrado' });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el vuelo' });
    }
};

module.exports = {
    getAllVuelos,
    getVueloByNumeroVuelo,
    createVuelo,
    updateVuelo,
    deleteVuelo,
};
