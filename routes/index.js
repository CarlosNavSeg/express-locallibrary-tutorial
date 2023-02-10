var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

router.get('/users/cool', function(req, res, next) {
  res.render('users');
});


module.exports = router;
