var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //if(req.session.nombre){
     res.render('index', {nombre: req.session.nombre});
  /*}else{
     res.redirect('/login');
  }*/
});

module.exports = router;
