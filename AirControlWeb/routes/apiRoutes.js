var express = require('express');
var router = express.Router();
var connection = require('../database/connection');
var tables = require('../database/tables');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('api-main', {lista: tables});
});


/**
Ejecuta la función getter() del modelo Activity para obtener todos
los registros que hayan en la tabla de la db para enviarlos
como JSON
**/
router.get('/activity', function(req, res, next) {
  tables.Activity.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});


router.get('/alarmconf', function(req, res, next) {
  tables.Alarmconf.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/alarms', function(req, res, next) {
  tables.Alarms.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/detailHouse', function(req, res, next) {
  tables.DetailHouse.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/display', function(req, res, next) {
  tables.Display.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/house', function(req, res, next) {
  tables.House.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/instalation', function(req, res, next) {
  tables.Instalation.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/rt', function(req, res, next) {
  tables.RT.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

router.get('/variables', function(req, res, next) {
  tables.Variables.src.getAll((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

module.exports = router;
