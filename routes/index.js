var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/logando', loginController.logar)

module.exports = router;
