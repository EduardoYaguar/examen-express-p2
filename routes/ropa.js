var express = require('express');
var router = express.Router();
var db = require('../models');

// Ruta para mostrar el formulario de búsqueda
router.get('/buscar', function(req, res, next) {
  res.render('/buscar');
});

// Ruta para la página principal de servicios (redirige al formulario de búsqueda)
router.get('/', function(req, res, next) {
  res.redirect('/buscar');
});

// Ruta para obtener un servicio por ID (GET)
router.get('/buscar/:id', async function(req, res, next) {
  try {
    const servicioId = req.params.id;
    
    // Buscar el servicio por ID incluyendo las áreas relacionadas
    const servicio = await db.Servicio.findByPk(servicioId, {
      include: [{
        model: db.Area,
        through: { attributes: [] } // Excluye los atributos de la tabla intermedia
      }]
    });
    
  } catch (error) {
    console.error('Error al buscar el servicio:', error);
    res.render('servicios/error', {
      mensaje: 'Ocurrió un error al buscar el servicio'
    });
  }
});

module.exports = router;