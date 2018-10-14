var express = require('express');
var router = express.Router();

/* GET stat graphics. */
router.get('/', function(req, res, next) {
  res.render('stats', {nombre: "oa"});
});

module.exports = router;
