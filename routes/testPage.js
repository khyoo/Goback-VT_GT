var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  console.log("Test Event");  

  res.render('testPage', {});
});

module.exports = router;
