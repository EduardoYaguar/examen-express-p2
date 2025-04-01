var express = require('express');
var router = express.Router();
var db = require('../models');

// Ruta para mostrar el formulario de búsqueda
router.get('/buscar', function(req, res, next) {
  res.render('servicios/buscar');
});
router.get('/tabla-rangos', function(req, res, next) {
    res.render('servicios/tabla-rangos');
  });
  router.get('/tabla', function(req, res, next) {
    res.render('servicios/tabla');
  });

router.get('/', function(req, res, next) {
  res.redirect('/servicios/buscar');
});


router.get('/buscar/:id', async function(req, res, next) {
  try {
    const servicioId = req.params.id;
    

    const servicio = await db.Servicio.findByPk(servicioId, {
      include: [{
        model: db.ropa,
        through: { attributes: [] } 
      }]
    });
    
    if (!servicio) {
      return res.render('servicios/error', {
        mensaje: `No se encontró ningún servicio con el ID ${servicioId}`
      });
    }
    
    res.render('servicios/detalle', { servicio });
  } catch (error) {
    console.error('Error al buscar el servicio:', error);
    res.render('servicios/error', {
      mensaje: 'Ocurrió un error al buscar el servicio'
    });
  }
});


router.post('/buscar', function(req, res, next) {
  const servicioId = req.body.id;
  res.redirect(`/servicios/buscar/${servicioId}`);
});

module.exports = router;