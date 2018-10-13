var express = require('express');
var router = express.Router();

/* GET stat graphics. */
router.get('/', function(req, res, next) {
  res.render('login', {nombre: "oa"});
});

module.exports = router;
