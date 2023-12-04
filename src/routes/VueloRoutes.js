// src/routes/VueloRoutes.js
const express = require('express');
const router = express.Router();
const VueloController = require('../controllers/VueloController');

// Rutas para la entidad Vuelo
router.get('/vuelos', VueloController.getAllVuelos);
router.get('/vuelos/:numeroVuelo', VueloController.getVueloByNumeroVuelo);
router.post('/vuelos', VueloController.createVuelo);
router.put('/vuelos/:numeroVuelo', VueloController.updateVuelo);
router.delete('/vuelos/:numeroVuelo', VueloController.deleteVuelo);

module.exports = router;
