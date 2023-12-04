// src/app.js
const express = require('express');
const db = require('./utils/db');
const app = express();
const avionRoutes = require('./routes/AvionRoutes');
const pilotoRoutes = require('./routes/PilotoRoutes');
const tripulacionRoutes = require('./routes/TripulacionRoutes');
const vueloRoutes = require('./routes/VueloRoutes');
const baseRoutes = require('./routes/BaseRoutes');

app.use(express.json());


app.use('/vuelo', vueloRoutes);
app.use('/tripulacion', tripulacionRoutes);
app.use('/piloto', pilotoRoutes);
app.use('/avion', avionRoutes);
app.use('/base', baseRoutes);

// Handle 404
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});