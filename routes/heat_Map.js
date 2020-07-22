var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  console.log("heatmap");  

  res.render('heatMap', {});
});


module.exports = router;
