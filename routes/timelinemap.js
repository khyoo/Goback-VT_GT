var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  console.log("timelinemap");  

  res.render('timelinemap', {});
});


module.exports = router;
