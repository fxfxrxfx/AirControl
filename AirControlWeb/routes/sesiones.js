var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
   res.render('index');
});

router.post('/', function(req, res){
   req.session.nombre = req.body.nombre;
   res.redirect('/index');
   console.log("OA"); 
});

module.exports = router;
