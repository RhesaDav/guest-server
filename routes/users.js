var express = require('express');
var router = express.Router();

var usersController = require('../controllers/user');
const Users = require('../models/Users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', Users.findAll)
router.post('/', usersController.createUser)
router.delete('/:id', usersController.deleteUser)
router.get('/:id', usersController.findUser)

module.exports = router;
