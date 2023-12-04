// src/routes/TripulacionRoutes.js
const express = require('express');
const router = express.Router();
const TripulacionController = require('../controllers/TripulacionController');

// Rutas para la entidad Tripulacion
router.get('/tripulacion', TripulacionController.getAllTripulacion);
router.get('/tripulacion/:codigo', TripulacionController.getTripulacionByCodigo);
router.post('/tripulacion', TripulacionController.createTripulacion);
router.put('/tripulacion/:codigo', TripulacionController.updateTripulacion);
router.delete('/tripulacion/:codigo', TripulacionController.deleteTripulacion);

module.exports = router;
``
