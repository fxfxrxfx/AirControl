var express = require('express');
var router = express.Router();
var House = require('../models/activity');

/* GET home page. */
router.get('/', function(req, res, next) {
  House.getHouses((err, data) => {
    if (err) {
      throw err;
    } else {
        res.json(data);
    }
  });
});

/*

*/
module.exports = router;
