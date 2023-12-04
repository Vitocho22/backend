// src/routes/PilotoRoutes.js
const express = require('express');
const router = express.Router();
const PilotoController = require('../controllers/PilotoController');

// Rutas para la entidad Piloto
router.get('/pilotos', PilotoController.getAllPilotos);
router.get('/pilotos/:codigo', PilotoController.getPilotoByCodigo);
router.post('/pilotos', PilotoController.createPiloto);
router.put('/pilotos/:codigo', PilotoController.updatePiloto);
router.delete('/pilotos/:codigo', PilotoController.deletePiloto);

module.exports = router;
