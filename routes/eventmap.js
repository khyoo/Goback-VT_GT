var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  console.log("eventmap");  

  res.render('eventMap', {});
});

module.exports = router;
