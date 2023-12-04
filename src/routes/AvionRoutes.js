// src/routes/AvionRoutes.js
const express = require('express');
const router = express.Router();
const AvionController = require('../controllers/AvionController');

// Rutas para la entidad Avion
router.get('/aviones', AvionController.getAllAviones);
router.get('/aviones/:codigo', AvionController.getAvionByCodigo);
router.post('/aviones', AvionController.createAvion);
router.put('/aviones/:codigo', AvionController.updateAvion);
router.delete('/aviones/:codigo', AvionController.deleteAvion);

module.exports = router;
