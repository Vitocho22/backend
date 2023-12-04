// src/routes/BaseRoutes.js
const express = require('express');
const router = express.Router();
const BaseController = require('../controllers/BaseController');

// Obtener todas las bases
router.get('/bases', BaseController.getAllBases);

// Obtener una base por código
router.get('/bases/:codigo', BaseController.getBaseByCodigo);

// Crear una nueva base
router.post('/bases', BaseController.createBase);

// Actualizar una base por código
router.put('/bases/:codigo', BaseController.updateBase);

// Eliminar una base por código
router.delete('/bases/:codigo', BaseController.deleteBase);

module.exports = router;
