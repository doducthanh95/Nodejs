const express = require('express');
var router = express.Router();

var userController = require('../controllers/user_controller');

router.get('/', userController.login);

module.exports = router;
